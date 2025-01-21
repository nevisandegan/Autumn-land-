import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Guest from "./models/guests";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await Guest.findOne({ email: user.email });
        if (!existingGuest) {
          await Guest.create({ name: user.name, email: user.email });
        }
        return true;
      } catch {
        return false;
      }
    },
    async session({ session }) {
      try {
        const existingGuest = await Guest.findOne({
          email: session.user.email,
        });

        session.user.guest_id = existingGuest._id;

        return session;
      } catch {
        return session;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
