import GithubProvider from "next-auth/providers/github";
import dbConnect from "@/db/connect";
import User from "@/models/user";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],

    callbacks: {
        async signIn({ user, account }) {
            if (account.provider !== "github") return false;

            await dbConnect();
            const currentuser = await User.findOne({ email: user.email });

            if (!currentuser) {
                const newuser = await User.create({
                    email: user.email,
                    username: user.email.split("@")[0],
                });
                user.name = newuser.username;
            }
            return true;
        },

        async session({ session }) {
            await dbConnect();   // ← ye line missing thi (Step 3 ka fix bhi isi me ho gaya)
            const dbuser = await User.findOne({ email: session.user.email });
            if (dbuser) {
                session.user.username = dbuser.username;
            }
            return session;
        },
    },
};