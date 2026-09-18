import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google"
import User from "@/models/user";
import Payment from "@/models/payment";

const handler = NextAuth(
    {
        // Configure one or more authentication providers
        providers: [
            GithubProvider({
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET,
            }),
            // GoogleProvider({
            //     clientId: process.env.GOOGLE_ID,
            //     clientSecret: process.env.GOOGLE_SECRET,
            // }),
            // ...add more providers here
        ],
        callbacks: {
            async signIn({ user,account, profile,email, credentials }) {
               if (account.providers === "github") {
                const client = await mongoose.connect("mongodb://localhost:27017/getchai");
                const currentuser= await User.findOne({ email: user.email });
                if(!currentuser){
                    const newuser = await User.create({
                        email:email,
                        username:user.split("@")[0]
                    });
                    await newuser.save();
                    console.log("New user created:", newuser);
                    user.name = newuser.username;
                }
                else{
                    user.name = currentuser.username;
                }
                return true;
               }
            },
            async session({ session, token, user }) {
                const dbuser= await User.findOne({ email: session.user.email });
                session.user.username= dbuser.username;
                return session;
            }
        }
    }
)

export { handler as GET, handler as POST }