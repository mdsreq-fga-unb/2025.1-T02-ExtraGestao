"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HeaderProps {
    title?: string;
    className?: string;
    children?: React.ReactNode;
    pagina?: string;
}

export default function Header({ title = "Home", className = "", children }: HeaderProps) {
    const { data: session } = useSession();

    const Router = useRouter();

    return (
        <><header className={`w-full flex items-center justify-between px-10 py-4 bg-[#070424] border-b-2 border-blue-500 ${className}`}>
            <div className="flex items-center gap-3">
                <h1 className="font-chakra text-blue-400 text-2xl">{title}</h1>
                {children}
            </div>
            <div className="flex items-center gap-3"
                onClick={() => Router.push("/home")}>
                <Image src="/home.svg" alt="home" width={40} height={40} className="w-13 h-13 cursor-pointer" />
            </div>
            <div className="flex items-center gap-3">
                <span className="text-white">{session?.user?.name || "Usuário"}</span>
                <div className="rounded-full bg-white/10 p-2 border border-white/30">
                    <svg width={32} height={32} fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="4" stroke="#fff" strokeWidth="2" />
                        <path stroke="#fff" strokeWidth="2" d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                </div>
                <button
                    onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth/login` })}
                    className="ml-2 flex items-center gap-1 text-sm text-white hover:text-red-400 transition cursor-pointer"
                    title="Sair"
                >
                    <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
                        <path d="M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="hidden sm:inline">Sair</span>
                </button>
            </div>
        </header >
        </>
    );
}
