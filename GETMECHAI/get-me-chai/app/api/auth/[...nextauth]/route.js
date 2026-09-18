import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";

import User from "@/models/user";

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],

    callbacks: {
        async signIn({ user, account }) {

            if (account.provider === "github") {

                await mongoose.connect(
                    "mongodb://localhost:27017/getchai"
                );

                const currentuser = await User.findOne({
                    email: user.email
                });

                if (!currentuser) {
                    const newuser = await User.create({
                        email: user.email,
                        username: user.email.split("@")[0]
                    });
                    console.log("New user created:", newuser);

                    user.name = newuser.username;
                    console.log("User name set to:", user.name);
                }
                return true;
            }
            return false;
        },

        async session({ session }) {

            const dbuser = await User.findOne({
                email: session.user.email
            });
            if (dbuser) {
                session.user.username = dbuser.username;
            }
            return session;
        }
    }
});

export { handler as GET, handler as POST };