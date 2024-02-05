import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import { SiweMessage } from "siwe"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Ethereum",
            credentials: {
                message: {
                    label: "Message",
                    type: "text",
                    placeholder: "0x0",
                },
                signature: {
                    label: "Signature",
                    type: "text",
                    placeholder: "0x0",
                },
            },
            async authorize(credentials) {
                try {
                    const siwe = new SiweMessage(JSON.parse(credentials?.message || "{}"))
                    const csrf = cookies().get('next-auth.csrf-token')?.value.split('|')[0]
                    const nextAuthUrl = new URL(process.env.NEXTAUTH_URL!)

                    const result = await siwe.verify({
                        signature: credentials?.signature || "",
                        domain: nextAuthUrl.host,
                        nonce: csrf,
                    })

                    if (result.success) {
                        return {
                            id: siwe.address,
                        }
                    }
                    return null
                } catch (e) {
                    console.error(e)
                    return null
                }
            },
        }),
    ],

    callbacks: {
        // token.sub will refer to the id of the wallet address
        // @ts-ignore
        session: ({ session, token }) => ({
            ...session,
            user: {
                ...session.user,
                id: token.sub,
            },
        }),
    },

    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }