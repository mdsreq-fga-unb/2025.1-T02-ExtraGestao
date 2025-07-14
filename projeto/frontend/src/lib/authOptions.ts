import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            name: string;   
            role: string;
        };
        accessToken: string;
    }

    interface JWT {
        id: number;
        name: string;
        role: string;
        accessToken: string;
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'CPF', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined) {
                if (!credentials) {
                    return null;
                }

                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_LOGIN_URL}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            senha: credentials.password,
                        }),
                    });

                    if (!response.ok) {
                        throw new Error('Invalid credentials');
                    }

                    const user = await response.json();

                    if (user && user.access_token) {
                        return {
                            id: user.sub,
                            name: user.username,
                            role: user.role,
                            accessToken: user.access_token,
                        };
                    }
                    return null;
                } catch (error) {
                    console.error('Authorization error:', error);
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: 'jwt' as const,
    },
    jwt: {
        secret: process.env.NEXT_PUBLIC_JWT_SECRET,
        maxAge: 60 * 60 * 24,
    },
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id;
                token.username = user.name
                token.role = user.role;
                token.accessToken = user.accessToken;
            }
            return { ...token, ...user, ...account };
        },
        async session({ session, token }) {
            if (session.user && token.id && token.username && token.role && token.accessToken) {
                session.user.id = Number(token.id);
                session.user.name = token.username;
                session.user.role = token.role;
            }
            if (token.accessToken) {
                session.accessToken = token.accessToken;

            }
            return session;
        }
    }
}
