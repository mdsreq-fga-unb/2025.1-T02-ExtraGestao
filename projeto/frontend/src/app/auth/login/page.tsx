"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [feedback, setFeedback] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setEmail(email);
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const payload = { email, senha };

        try {
            const result = await signIn('credentials', {
                redirect: false,
                email: email,
                password: payload.senha,
            });
            if (result?.error) {
                setFeedback('Erro ao fazer login');
            } else {
                setFeedback('Login bem-sucedido!');
                setIsSuccess(true);
                setLoading(false);
                setTimeout(() => {
                    router.push('/home');
                }, 2000);
            }
        } catch (error) {
            console.error('Erro:', error);
            setFeedback('Erro ao fazer login');
        }
    }

    return (
        <main className="min-h-screen w-full bg-[#07061A] flex items-center justify-center relative overflow-hidden">
            {/* Background principal (hexágonos) */}
            <Image
                src="/pattern-bg.svg"
                alt=""
                fill
                className="object-cover opacity-80 pointer-events-none select-none rotate-[180deg]"
                priority
                draggable={false}
                style={{ top: "80px" }}
            />

            <div className="relative z-10 flex flex-col md:flex-row gap-0 md:gap-16 items-center">
                {/* Logo grande, nunca empurra o card */}
                <div className="hidden md:flex flex-col items-center justify-center relative h-[420px] w-[420px]">
                    <Image
                        src="/logo-extra.svg"
                        alt="Logo Extra Software"
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </div>
                {/* Card do formulário */}
                <div className="relative rounded-xl border border-white/60 bg-white/5 shadow-xl px-10 py-8 w-[380px] max-w-[90vw] flex flex-col items-center backdrop-blur-sm overflow-hidden">
                    {/* Pattern dentro do card */}
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                        <Image
                            src="/pattern-card.svg"
                            alt=""
                            width={760}
                            height={500}
                            className="opacity-90 pointer-events-none select-none rotate-[90deg]"
                            draggable={false}
                        />
                    </div>
                    {/* Conteúdo do form */}
                    <div className="relative z-10 w-full">
                        <h1 className="text-white text-4xl font-mono font-extrabold text-center mb-6 tracking-wider">ENTRAR</h1>
                        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="rounded-lg px-4 py-2 bg-white/90 text-black text-lg font-mono outline-none focus:ring-2 focus:ring-[#1976FF] transition w-full"
                                autoComplete="username"
                                value={email}
                                maxLength={100}
                                onChange={(e) => handleInputEmail(e)}
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Senha"
                                className="rounded-lg px-4 py-2 bg-white/90 text-black text-lg font-mono outline-none focus:ring-2 focus:ring-[#1976FF] transition w-full"
                                autoComplete="current-password"
                                maxLength={50}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <div className="flex items-center justify-between mt-2 mb-2">
                                <label className="flex items-center gap-2 text-white text-xs select-none cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={showPassword}
                                        onChange={() => setShowPassword(!showPassword)}
                                        className="accent-[#1976FF]"
                                    />
                                    Mostrar senha
                                </label>
                                <Link href="/auth/forgot" className="text-white text-xs underline hover:text-[#1976FF] transition">
                                    Esqueci minha senha
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className="mt-2 w-full bg-white text-black font-mono text-xl rounded-full py-2 font-bold hover:bg-[#1976FF] hover:text-white transition-colors cursor-pointer"
                            >
                                Entrar
                            </button>

                        </form>
                        {/* Mensagem de Feedback */}
                        {feedback && (
                            <p
                                className={`text-sm mt-4 ${isSuccess ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {feedback}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
