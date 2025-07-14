'use client';

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Header from "@/components/Header";
import { redirect } from "next/navigation";

type Usuario = {
    idusuario: number;
    nome: string;
    email: string;
    papel: string;
};

const ROLE_OPTIONS = [
    { value: "usuario", label: "Usuário" },
    { value: "gestor", label: "Gestor" },
    { value: "usuario/gestor", label: "Usuário/Gestor" },
];

function normalizaRole(role: string | undefined | null): string {
    if (!role) {
        return "usuario";
    }

    const lowerCaseRole = role.toLowerCase();
    const normalizedRole = lowerCaseRole.replace(/[^a-z0-9/]/g, "");

    if (normalizedRole.includes("usuario") && normalizedRole.includes("gestor")) {
        return "usuario/gestor";
    }

    if (normalizedRole.includes("gestor")) {
        return "gestor";
    }

    if (normalizedRole.includes("usuario")) {
        return "usuario";
    }

    return "usuario";
}

export default function UsuariosPage() {
    const { data: session, status } = useSession();
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const token = session?.accessToken || "";

    useEffect(() => {
        if (status === "loading") return;

        if (
            status === "authenticated" &&
            session?.user?.role !== "gestor" &&
            session?.user?.role !== "usuario/gestor"
        ) {
            redirect("/aviso-adm?from=/adm");
        }
    }, [session, status]);

    const fetchUsuarios = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/list`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!res.ok) throw new Error("Erro ao buscar usuários");
            const data = await res.json();
            console.log("Dados recebidos da API:", data);

            setUsuarios(data);
        } catch (e: unknown) {
            if (e instanceof Error) {
                setError(e.message || "Erro desconhecido");
            } else {
                setError("Erro desconhecido");
            }
        }
        setLoading(false);
    };

    useEffect(() => {
        if (token) fetchUsuarios();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    const handleChangeRole = async (
        idusuario: number,
        newRole: string
    ) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/changeRole`,
                {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ idusuario, role: newRole }),
                }
            );
            if (!res.ok) throw new Error("Erro ao mudar o papel");
            fetchUsuarios();
        } catch (e) {
            alert("Erro ao mudar o papel do usuário.");
            console.error(e);
        }
    };

    return (
        <div className="min-h-screen bg-[#040215] flex flex-col">
            <Header title="Usuários do Sistema" className="w-full" />

            <div className="flex-1 p-8">
                <div className="bg-[#181a23] p-6 rounded-2xl shadow-lg max-w-5xl mx-auto">
                    <h2 className="text-white text-2xl font-bold mb-6">
                        Lista de Usuários
                    </h2>
                    {loading ? (
                        <div className="text-gray-300">Carregando...</div>
                    ) : error ? (
                        <div className="text-red-500">{error}</div>
                    ) : (
                        <table className="w-full text-white">
                            <thead>
                                <tr className="bg-[#23243c]">
                                    <th className="py-3 px-2 rounded-tl-xl text-left">Nome</th>
                                    <th className="py-3 px-2 text-left">Email</th>
                                    <th className="py-3 px-2 rounded-tr-xl text-center">Papel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((u, idx) => (
                                    <tr
                                        key={u.idusuario}
                                        className={`${idx % 2 === 0 ? "bg-[#191b2a]" : "bg-[#212336]"
                                            } hover:bg-blue-950 transition`}
                                    >
                                        <td className="py-2 px-2 text-left">{u.nome}</td>
                                        <td className="py-2 px-2 text-left">{u.email}</td>
                                        <td className="py-2 px-2 text-center">
                                            <select
                                                className="bg-[#292a40] text-white rounded p-1 min-w-[145px] text-center"
                                                value={normalizaRole(u.papel)}
                                                onChange={(e) =>
                                                    handleChangeRole(u.idusuario, e.target.value)
                                                }
                                            >
                                                {ROLE_OPTIONS.map((role) => (
                                                    <option key={role.value} value={role.value}>
                                                        {role.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
