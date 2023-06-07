import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, { NextAuthOptions } from "next-auth"
import { Password } from "@mui/icons-material"
import axios from "axios"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
                const res = await axios.post(`${baseURL}/api/login`, {
                    email:credentials?.username,
                    password:credentials?.password,
                    headers: { "Content-Type": "application/json" }
                })
                if (res.status === 200) {
                    console.log(res)
                  }
                
                return null;
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, 
    },
    pages: {
        signIn: "/Login",
    },
}
export default NextAuth(authOptions)