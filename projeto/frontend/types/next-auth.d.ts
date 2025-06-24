// next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            role: string;
        } & DefaultSession["user"];
        accessToken: string;
    }

    interface User extends DefaultUser {
        id: string;
        role: string;
        accessToken: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        id?: string;
        username?: string | null;
        role?: string;
        accessToken?: string;
    }
}