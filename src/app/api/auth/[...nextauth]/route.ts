import NextAuth, {Account, NextAuthOptions, Profile, User} from 'next-auth'
import Google from 'next-auth/providers/google'
import {CredentialInput} from "next-auth/providers";
import {AdapterUser} from "next-auth/adapters";
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";
import user = mockSession.user;
import {prisma} from "@/app/api/db";

export const authOptions:NextAuthOptions = {
    providers: [
        Google({
            // @ts-ignore
            clientId:process.env.GOOGLE_ID,
            // @ts-ignore
            clientSecret:process.env.GOOGLE_SECRET,
            profile(profile) {
                return {
                    id:profile.sub,
                    name: profile.name,
                    email: profile.email
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if(profile != undefined) {
                let email = profile.email;
                let dbEmail = await prisma.validEmails.findFirst({
                    where: {
                        email:email
                    }
                });
                if(dbEmail != null && dbEmail.email === email) {
                    return true
                }
            }
            return "/unauthorized";
        },
    },
    pages: {
        signIn: '/login'
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}