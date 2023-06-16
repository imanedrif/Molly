import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { headers } from "next/dist/client/components/headers";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "jsmith",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const res = await axios
                    .post("http://127.0.0.1:8000/api/login", {
                        email: credentials?.username,
                        password: credentials?.password,
                    })
                    .then((res) => {
                        return res.data;
                    })
                    .catch((err) => {
                        return null;
                    });
                return res;
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token;
            return session;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
    },

    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60 * 60,
        updateAge: 30 * 24 * 60 * 60 * 60,
    },
};

export default NextAuth(authOptions);
