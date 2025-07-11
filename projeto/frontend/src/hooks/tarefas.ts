
import { useState, useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type Tarefa = {
    idtarefa: number;
    nome: string;
    descricao: string;
    data_inicio: string;
    prazo: string;
    status: string;
    id_projeto: number;
    id_gestor?: number;
};

export type Usuario = {
    idusuario: number;
    nome: string;
};

export function useTarefas(token: string, idProjeto: number, refreshDeps: unknown[] = []) {
    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!token || !idProjeto) return;
        setLoading(true);
        fetch(`${API_URL}/tarefa/list`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(res => res.json())
            .then(data => setTarefas(data.filter((t: { id_projeto: number; }) => t.id_projeto === idProjeto)))
            .catch(() => setTarefas([]))
            .finally(() => setLoading(false));
    }, [token, idProjeto, ...refreshDeps]);

    return { tarefas, setTarefas, loading };
}

export async function handleCreateTarefa(token: string, data: Partial<Tarefa>, onReload: () => void) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tarefa/create`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("Erro ao criar tarefa");
    onReload();
}


export async function handleUpdateTarefa(token: string, id: number, formData: FormData, after?: () => void) {
    try {
        const res = await fetch(`${API_URL}/tarefa/update/${id}`, {
            method: "PATCH",
            headers: { Authorization: `Bearer ${token}` },
            body: formData,
        });
        if (!res.ok) throw new Error("Erro ao atualizar tarefa");
        if (after) after();
    } catch {
        alert("Erro ao atualizar tarefa");
    }
}

export async function handleDeleteTarefa(token: string, id: number, after?: () => void) {
    try {
        const res = await fetch(`${API_URL}/tarefa/delete/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Erro ao excluir tarefa");
        if (after) after();
    } catch {
        alert("Erro ao excluir tarefa");
    }
}

// Troca de status da tarefa
export async function handleChangeStatusTarefa(token: string, id: number, novoStatus: string, after?: () => void) {
    try {
        const res = await fetch(`${API_URL}/tarefa/update/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: novoStatus }),
        });
        if (!res.ok) throw new Error("Erro ao trocar status da tarefa");
        if (after) after();
    } catch {
        alert("Erro ao trocar status da tarefa");
    }
}