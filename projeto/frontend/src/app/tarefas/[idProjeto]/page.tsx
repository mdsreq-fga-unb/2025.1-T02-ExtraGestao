'use client';

import KanbanTarefas, { Usuario } from "../../../components/KanbanTarefas";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type PageParams = {
    idProjeto: string;
};

export default function Page({ params }: { params: PageParams }) {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
