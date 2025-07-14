"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Register() {
    const formatCpf = (cpf: string) => {
        return cpf
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1");
    };

    function validarCpf(cpf: string) {
        cpf = cpf.replace(/\D/g, "");
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
        let soma = 0;
        for (let i = 0; i < 9; i++) soma += Number(cpf.charAt(i)) * (10 - i);
        let resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== Number(cpf.charAt(9))) return false;
        soma = 0;
        for (let i = 0; i < 10; i++) soma += Number(cpf.charAt(i)) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== Number(cpf.charAt(10))) return false;
        return true;
    }

    const router = useRouter();
    const [cpf, setCpf] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaRepetida, setSenhaRepetida] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const cpfValido = validarCpf(cpf);

    const camposObrigatoriosPreenchidos =
        cpf.replace(/\D/g, "").length === 11 &&
        nome.trim().length > 2 &&
        email.includes("@") &&
        senha.length >= 4 &&
        senhaRepetida.length >= 4

    const podeCadastrar = camposObrigatoriosPreenchidos && senha === senhaRepetida;

    const handleInputCpf = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(formatCpf(e.target.value));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFeedback("");
        setLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cpf: cpf.replace(/\D/g, ""),
                    nome,
                    email,
                    senha,
                    papel: "usuario",
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                if (data?.message?.toLowerCase().includes("cpf")) {
                    setFeedback("Já existe um usuário com este CPF.");
                } else if (data?.message?.toLowerCase().includes("email")) {
                    setFeedback("Já existe um usuário com este e-mail.");
                } else {
                    setFeedback("Erro ao cadastrar usuário.");
                }
                setIsSuccess(false);
            } else {
                setFeedback("Cadastro realizado com sucesso! Você pode fazer login.");
                setIsSuccess(true);
                setTimeout(() => {
                    router.push("/auth/login");
                }, 2000);
            }
        } catch {
            setFeedback("Erro inesperado ao cadastrar usuário.");
            setIsSuccess(false);
        }
        setLoading(false);
    };

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
                <div className="relative rounded-xl border border-white/60 bg-white/5 shadow-xl px-10 py-12 w-[420px] max-w-[98vw] flex flex-col items-center backdrop-blur-sm overflow-hidden">
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
                    <div className="relative z-10 w-full">
                        <h1 className="text-white text-3xl md:text-4xl font-mono font-extrabold text-center mb-6 tracking-wider">CADASTRAR</h1>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="CPF"
                                className="rounded-lg px-4 py-2 bg-white/90 text-black text-lg font-mono outline-none focus:ring-2 focus:ring-[#1976FF] transition w-full"
                                autoComplete="username"
                                maxLength={14}
                                value={cpf}
                                onChange={handleInputCpf}
                                required
                            />
                            {cpf.length >= 11 && !cpfValido && (
                                <p className="text-red-500 text-sm">CPF inválido</p>
                            )}
                            <input
                                type="text"
                                placeholder="Nome"
                                className="rounded-lg px-4 py-2 bg-white/90 text-black text-lg font-mono outline-none focus:ring-2 focus:ring-[#1976FF] transition w-full"
                                value={nome}
                                maxLength={50}
                                onChange={e => setNome(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="rounded-lg px-4 py-2 bg-white/90 text-black text-lg font-mono outline-none focus:ring-2 focus:ring-[#1976FF] transition w-full"
                                value={email}
                                maxLength={100}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Senha"
                                className="rounded-lg px-4 py-2 bg-white/90 text-black text-lg font-mono outline-none focus:ring-2 focus:ring-[#1976FF] transition w-full"
                                autoComplete="new-password"
                                value={senha}
                                maxLength={50}
                                onChange={e => setSenha(e.target.value)}
                                required
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Repetir senha"
                                className="rounded-lg px-4 py-2 bg-white/90 text-black text-lg font-mono outline-none focus:ring-2 focus:ring-[#1976FF] transition w-full"
                                autoComplete="new-password"
                                value={senhaRepetida}
                                maxLength={50}
                                onChange={e => setSenhaRepetida(e.target.value)}
                                required
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
                                <Link href="/auth/login" className="text-white text-xs underline hover:text-[#1976FF] transition">
                                    Já possui conta? Entrar
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className={`mt-2 w-full bg-white text-black font-mono text-xl rounded-full py-2 font-bold transition-colors
                                ${podeCadastrar && !loading ? "hover:bg-[#1976FF] hover:text-white cursor-pointer" : "opacity-60 cursor-not-allowed"}
                                `}
                                disabled={!podeCadastrar || loading}
                            >
                                Cadastrar
                            </button>
                        </form>
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
