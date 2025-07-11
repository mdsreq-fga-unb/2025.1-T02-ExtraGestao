'use client';

import { useParams } from "next/navigation";
import KanbanTarefas, { Usuario } from "../../../components/KanbanTarefas";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Page() {
    const params = useParams();
    const idProjeto = Number(params.idProjeto);
    const { data: session } = useSession();
    const token = String(session?.accessToken || session?.user?.id || "");

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const fetchUsuarios = async () => {
        if (!token) return;
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/list`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!res.ok) throw new Error("Erro ao buscar usuários");
            const data = await res.json();
            setUsuarios(data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            setUsuarios([]);
        }
    };

    useEffect(() => {
        fetchUsuarios();
    }, [token]);

    if (!idProjeto || !token) return null;

    return (
        <KanbanTarefas
            token={token}
            usuarios={usuarios}
            idProjeto={idProjeto}
        />
    );
}
