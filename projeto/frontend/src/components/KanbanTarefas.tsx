'use client';

import React, { useEffect, useRef, useState } from "react";
import {
    useTarefas,
    handleCreateTarefa,
    handleDeleteTarefa,
} from "../hooks/tarefas";
import TarefaCard from "./TarefaCard";
import { useSession } from "next-auth/react";
import Header from "./Header";

export type Tarefa = {
    idtarefa: number;
    nome: string;
    descricao: string;
    data_inicio: string;
    prazo: string;
    status: string;
    id_projeto: number;
    id_gestor?: number;
    gestor?: {
        idusuario: number;
        nome: string;
    };
    responsaveis?: {
        idusuario: number;
        nome: string;
    }[];
    responsavel_tarefa?: {
        usuario: {
            idusuario: number;
            nome: string;
        };
    }[];
};

export type Usuario = {
    idusuario: number;
    nome: string;
};

const STATUS_COLUNAS = [
    "A fazer",
    "Em andamento",
    "Em validação",
    "Concluído",
    "Recusados",
];

export type Comentario = {
    idcomentario: number;
    texto: string;
    id_tarefa: number;
    id_usuario: number;
    usuario?: { nome: string };
};


type NovaTarefaModalProps = {
    open: boolean;
    onClose: () => void;
    onCreate: (params: {
        nome: string;
        descricao: string;
        data_inicio: string;
        prazo: string;
        id_projeto: number;
        id_gestor: number;
    }) => void;
    id_projeto: number;
    podeGerenciarTarefas: boolean;
};

type ComentarioSectionProps = {
    tarefaId: number;
    token: string;
};

const ComentarioSection: React.FC<ComentarioSectionProps> = ({ tarefaId, token }) => {
    const { data: session } = useSession();
    const [comentarios, setComentarios] = useState<Comentario[]>([]);
    const [novoComentario, setNovoComentario] = useState("");
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    const fetchComentarios = async () => {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comentario/tarefa/${tarefaId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        setComentarios(Array.isArray(data) ? data : (data ? [data] : []));
        setLoading(false);
        setTimeout(() => {
            scrollRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 200);
    };

    useEffect(() => {
        if (tarefaId) fetchComentarios();
    }, [tarefaId]);

    const handleComentar = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!novoComentario.trim()) return;
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comentario/create`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                texto: novoComentario,
                id_tarefa: tarefaId,
                id_usuario: session?.user?.id,
            }),
        });
        setNovoComentario("");
        fetchComentarios();
    };

    return (
        <div className="bg-[#f3f4fa] rounded-xl p-4 mt-4">
            <div className="font-bold text-lg mb-2 text-black">Comentários</div>
            <div className="h-36 overflow-y-auto flex flex-col gap-3 mb-2 bg-white rounded p-2">
                {loading ? (
                    <div className="text-gray-400">Carregando...</div>
                ) : comentarios.length === 0 ? (
                    <div className="text-gray-400">Nenhum comentário ainda.</div>
                ) : (
                    comentarios.map((c) => (
                        <div key={c.idcomentario} className="text-black">
                            <span className="font-semibold text-blue-700">{c.usuario?.nome || "Usuário"}: </span>
                            <span>{c.texto}</span>
                        </div>
                    ))
                )}
                <div ref={scrollRef} />
            </div>
            <form onSubmit={handleComentar} className="flex gap-2">
                <input
                    className="flex-1 p-2 rounded border border-gray-400 text-black"
                    placeholder="Escreva um comentário..."
                    value={novoComentario}
                    onChange={e => setNovoComentario(e.target.value)}
                    maxLength={1000}
                />
                <button type="submit" className="bg-blue-700 text-white px-3 py-1 rounded">
                    Enviar
                </button>
            </form>
        </div>
    );
};


const NovaTarefaModal: React.FC<NovaTarefaModalProps> = ({ open, onClose, onCreate, id_projeto, podeGerenciarTarefas }) => {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [prazo, setPrazo] = useState("");
    const { data: session } = useSession();



    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-[#fff] rounded-2xl p-8 w-full max-w-md shadow-2xl">
                <h2 className="text-black text-xl mb-4">Nova tarefa</h2>
                <form
                    className="flex flex-col gap-2"
                    onSubmit={e => {
                        e.preventDefault();
                        onCreate({
                            nome: titulo,
                            descricao,
                            data_inicio: dataInicio,
                            prazo,
                            id_projeto: id_projeto,
                            id_gestor: session?.user?.id || 0,
                        });
                        setTitulo(""); setDescricao(""); setDataInicio(""); setPrazo("");
                    }}
                >
                    <input required placeholder="Título da tarefa"
                        maxLength={50}
                        className="p-2 rounded border border-gray-400 text-black" value={titulo} onChange={e => setTitulo(e.target.value)} />
                    <textarea required placeholder="Descrição"
                        maxLength={1000}
                        className="p-2 rounded border border-gray-400 text-black min-h-[100px]" value={descricao} onChange={e => setDescricao(e.target.value)} />
                    <input type="date" required className="p-2 rounded border border-gray-400 text-black" value={dataInicio} onChange={e => setDataInicio(e.target.value)} />
                    <input type="date" required className="p-2 rounded border border-gray-400 text-black" value={prazo} onChange={e => setPrazo(e.target.value)} />
                    <div className="flex justify-end gap-2 mt-2">
                        <button type="button" className="bg-gray-300 text-black px-3 py-1 rounded" onClick={onClose}>Cancelar</button>
                        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded"
                            disabled={!podeGerenciarTarefas}>
                            Criar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

type DetalheTarefaModalProps = {
    open: boolean;
    tarefa: Tarefa | null;
    onClose: () => void;
    onEdit: () => void;
    onDelete: () => void;
    onAddResponsavel: (idUsuario: number) => void;
    responsaveisOpcoes: Usuario[];
    podeGerenciarTarefas: boolean;
    status: string;
};

const DetalheTarefaModal: React.FC<DetalheTarefaModalProps> = ({
    open,
    tarefa,
    onClose,
    onEdit,
    onDelete,
    onAddResponsavel,
    responsaveisOpcoes,
    podeGerenciarTarefas,
    status
}) => {
    const [showResp, setShowResp] = useState(false);
    const { data: session } = useSession();
    const token = useSession().data?.accessToken || session?.accessToken || "";

    if (!open || !tarefa) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-full max-w-lg text-black relative">
                <button className="absolute right-4 top-4 text-lg cursor-pointer" onClick={onClose}>X</button>
                <div className="text-2xl mb-1 font-bold">#{tarefa.idtarefa} {tarefa.nome}</div>
                <div className="text-gray-500 text-sm mb-1">Criado em {new Date(tarefa.data_inicio).toLocaleDateString()} | Prazo até {new Date(tarefa.prazo).toLocaleDateString()}</div>
                <p className="mb-4">{tarefa.descricao}</p>

                <div className="flex gap-5 items-center mb-2">
                    {/* Avatares dos responsáveis */}
                    {tarefa.responsavel_tarefa?.map((resp) => (
                        <div
                            key={resp.usuario.idusuario}
                            className="group relative flex items-center"
                        >
                            <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-xl text-black cursor-pointer select-none">
                                {resp.usuario.nome.charAt(0).toUpperCase()}
                            </div>
                            {/* Tooltip */}
                            <span className="absolute bottom-[-2.2rem] left-1/2 -translate-x-1/2 bg-[#181a23] text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none z-10 whitespace-nowrap transition-all duration-200">
                                {resp.usuario.nome}
                            </span>
                        </div>
                    ))}

                    {status !== "Concluído" && podeGerenciarTarefas && (
                        <button className="border rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-xl" title="Adicionar responsável" onClick={() => setShowResp(s => !s)}>
                            +
                        </button>
                    )}
                </div>
                {showResp && (
                    <div className="bg-[#e9e9f8] p-3 rounded-xl absolute left-28 top-28 shadow">
                        <span className="block mb-1">Atribuir à:</span>
                        {responsaveisOpcoes.map((u: Usuario) => (
                            <div key={u.idusuario} className="cursor-pointer hover:bg-blue-700 p-1 rounded" onClick={() => { onAddResponsavel(u.idusuario); setShowResp(false); }}>{u.nome}</div>
                        ))}
                    </div>
                )}
                <ComentarioSection tarefaId={tarefa.idtarefa} token={token} />
                <div className="flex gap-2 justify-end mt-6">
                    {podeGerenciarTarefas && (
                        <>
                            <button className="bg-yellow-600 px-4 py-1 rounded text-white cursor-pointer" onClick={onEdit}>Editar</button>
                            <button className="bg-red-700 px-4 py-1 rounded text-white cursor-pointer" onClick={onDelete}>Excluir</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

type KanbanTarefasProps = {
    token: string;
    usuarios: Usuario[];
    idProjeto: number;
};

type EditarTarefaModalProps = {
    open: boolean;
    tarefa: Tarefa | null;
    onClose: () => void;
    onEdit: (params: {
        nome: string;
        descricao: string;
        data_inicio: string;
        prazo: string;
    }) => void;
};

const EditarTarefaModal: React.FC<EditarTarefaModalProps> = ({ open, tarefa, onClose, onEdit }) => {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [prazo, setPrazo] = useState("");

    useEffect(() => {
        if (tarefa) {
            setTitulo(tarefa.nome || "");
            setDescricao(tarefa.descricao || "");
            setDataInicio(tarefa.data_inicio ? tarefa.data_inicio.substring(0, 10) : "");
            setPrazo(tarefa.prazo ? tarefa.prazo.substring(0, 10) : "");
        }
    }, [tarefa]);

    if (!open || !tarefa) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-[#fff] rounded-2xl p-8 w-full max-w-md shadow-2xl">
                <h2 className="text-black text-xl mb-4">Editar tarefa</h2>
                <form
                    className="flex flex-col gap-2"
                    onSubmit={e => {
                        e.preventDefault();
                        onEdit({
                            nome: titulo,
                            descricao,
                            data_inicio: dataInicio,
                            prazo,
                        });
                    }}
                >
                    <input required placeholder="Título da tarefa"
                        maxLength={50}
                        className="p-2 rounded border border-gray-400 text-black" value={titulo} onChange={e => setTitulo(e.target.value)} />
                    <textarea required placeholder="Descrição"
                        maxLength={1000}
                        className="p-2 rounded border border-gray-400 text-black min-h-[100px]" value={descricao} onChange={e => setDescricao(e.target.value)} />
                    <input type="date" required className="p-2 rounded border border-gray-400 text-black" value={dataInicio} onChange={e => setDataInicio(e.target.value)} />
                    <input type="date" required className="p-2 rounded border border-gray-400 text-black" value={prazo} onChange={e => setPrazo(e.target.value)} />
                    <div className="flex justify-end gap-2 mt-2">
                        <button type="button" className="bg-gray-300 text-black px-3 py-1 rounded" onClick={onClose}>Cancelar</button>
                        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default function KanbanTarefas({ token, usuarios, idProjeto }: KanbanTarefasProps) {
    const [ordenacao, setOrdenacao] = useState<"data" | "nome">("data");
    const [modalEditar, setModalEditar] = useState(false);
    const [modalNova, setModalNova] = useState(false);
    const [modalDetalhe, setModalDetalhe] = useState(false);
    const [tarefaDetalhe, setTarefaDetalhe] = useState<Tarefa | null>(null);
    const [reload, setReload] = useState(false);
    const [nomeProjeto, setNomeProjeto] = useState("Projeto");
    const [responsavelId, setResponsavelId] = useState<number | null>(null);

    const { tarefas } = useTarefas(token, idProjeto, [reload, modalNova, modalDetalhe]) as { tarefas: Tarefa[] };

    const { data: session } = useSession();
    const isGestor = session?.user?.role?.toLowerCase() === "gestor";
    const isGestorUsuario = session?.user?.role?.toLowerCase() === "usuario/gestor";
    const podeGerenciarTarefas = isGestor || isGestorUsuario;

    const openDetalhe = (t: Tarefa) => { setTarefaDetalhe(t); setModalDetalhe(true); };
    const closeDetalhe = () => { setTarefaDetalhe(null); setModalDetalhe(false); };

    const handleEdit = async (params: {
        nome: string;
        descricao: string;
        data_inicio: string;
        prazo: string;
    }) => {
        if (!tarefaDetalhe) return;
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tarefa/update/${tarefaDetalhe.idtarefa}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params),
            });
            if (!res.ok) throw new Error("Erro ao editar tarefa");
            setModalEditar(false);
            setModalDetalhe(false);
            setReload(x => !x);
        } catch (error) {
            alert("Erro ao editar tarefa");
            console.error(error);
        }
    };


    const handleCreate = async (params: {
        nome: string;
        descricao: string;
        data_inicio: string;
        prazo: string;
        id_projeto: number;
        id_gestor: number;
    }) => {
        await handleCreateTarefa(token, params, () => setReload(x => !x));
        setModalNova(false);
    };

    const handleDelete = async (id: number) => {
        if (confirm("Tem certeza que deseja excluir?")) {
            await handleDeleteTarefa(token, id, () => setReload(x => !x));
            setModalDetalhe(false);
        }
    };

    useEffect(() => {
        const fetchNomeProjeto = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projeto/${idProjeto}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!res.ok) throw new Error("Erro ao buscar projeto");
                const data = await res.json();
                setNomeProjeto(data.nome);
            } catch (error) {
                console.error("Erro ao buscar nome do projeto:", error);
                setNomeProjeto("Projeto");
            }
        };
        fetchNomeProjeto();
    }, [idProjeto, token]);

    function getTarefasFiltradas(status: string) {
        return tarefas
            .filter(t => t.status === status)
            .filter(t =>
                !responsavelId ||
                (t.responsavel_tarefa && t.responsavel_tarefa.some(r => r.usuario.idusuario === responsavelId))
            )
            .sort((a, b) => {
                if (ordenacao === "data") {
                    return new Date(a.data_inicio).getTime() - new Date(b.data_inicio).getTime();
                } else {
                    return a.nome.localeCompare(b.nome);
                }
            });
    }


    const handleAddResponsavel = async (idUsuario: number) => {
        if (!tarefaDetalhe) return;
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tarefa/addResponsavel/${tarefaDetalhe.idtarefa}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ responsavelId: idUsuario })
            });
            if (!res.ok) throw new Error("Erro ao adicionar responsável");
            setReload(x => !x);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Header
                title={`Tarefas do ${nomeProjeto}`}
                className="flex w-full" />
            <div className="min-h-screen w-full bg-[#040215] flex flex-col">
                <div className="flex items-center gap-4 p-4 bg-[#040215] text-white">

                    <div className="p-6 flex items-center justify-between">
                        {podeGerenciarTarefas && (
                            <button
                                className="font-chakra bg-blue-700 px-6 py-2 rounded-xl text-lg text-white cursor-pointer mt-[-10px] mb-[-10px]"
                                onClick={() => setModalNova(true)}
                            >
                                Adicionar tarefa
                            </button>
                        )}

                    </div>
                    <div className="flex items-center gap-4">
                        {/* Filtro por Status */}
                        <select
                            className="p-2 rounded border border-gray-400 text-white"
                            value={responsavelId || ""}
                            onChange={e => setResponsavelId(e.target.value ? Number(e.target.value) : null)}
                        >
                            <option value="">Todos os responsáveis</option>
                            {usuarios.map(u => (
                                <option key={u.idusuario} value={u.idusuario}>{u.nome}</option>
                            ))}
                        </select>

                        {/* Ordenação */}
                        <label className="text-white ml-2">Ordenar por:</label>
                        <select
                            className="p-2 rounded border border-gray-400 text-white"
                            value={ordenacao}
                            onChange={e => setOrdenacao(e.target.value as "data" | "nome")}
                        >
                            <option value="data">Data</option>
                            <option value="nome">Nome</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-1 gap-3 overflow-x-auto px-4">
                    {STATUS_COLUNAS.map((status, idx) => (
                        <div key={status} className={`flex-1 min-w-[260px] ${idx !== 0 ? 'border-l-4 border-blue-700' : ''} px-2`}>
                            <div className="text-xl mb-2 ml-23 font-bold text-white">{status}</div>
                            <div className="flex flex-col gap-6">
                                {getTarefasFiltradas(status).map((t) => (
                                    <div key={t.idtarefa} className="flex flex-col items-center">
                                        <div className="cursor-pointer w-full flex justify-center ml-5">
                                            <TarefaCard tarefa={t} status={status}
                                                onDetalhe={() => openDetalhe(t)}
                                                onReload={() => setReload(x => !x)} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
                <NovaTarefaModal
                    open={modalNova}
                    onClose={() => setModalNova(false)}
                    onCreate={handleCreate}
                    id_projeto={idProjeto}
                    podeGerenciarTarefas={podeGerenciarTarefas}
                />

                <DetalheTarefaModal
                    open={modalDetalhe}
                    tarefa={tarefaDetalhe}
                    onClose={closeDetalhe}
                    onEdit={() => setModalEditar(true)}
                    onDelete={() => tarefaDetalhe && handleDelete(tarefaDetalhe.idtarefa)}
                    onAddResponsavel={handleAddResponsavel}
                    responsaveisOpcoes={usuarios}
                    podeGerenciarTarefas={podeGerenciarTarefas}
                    status={tarefaDetalhe?.status || ""}
                />

                <EditarTarefaModal
                    open={modalEditar}
                    tarefa={tarefaDetalhe}
                    onClose={() => setModalEditar(false)}
                    onEdit={handleEdit}
                />
            </div>
        </>
    );
}
