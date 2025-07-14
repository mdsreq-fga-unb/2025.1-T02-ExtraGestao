"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import ProjetoDetalhesModal from "@/components/ProjetoDetalhesModal";
import EditarProjetoModal from "@/components/EditarProjetoModal";
import { useRouter } from "next/navigation";



type ProjetoDTO = {
    idprojeto: number;
    nome: string;
    valor: number;
    data_inicio: string;
    prazo: string;
    descricao: string;
    nome_gestor: string;
    status: "EM_ANDAMENTO" | "CONCLUIDO";
    foto: string;
};

function NovoProjetoModal({
    open,
    onClose,
    onCreate,
    loading,
}: {
    open: boolean;
    onClose: () => void;
    onCreate: (data: FormData) => void;
    loading: boolean;
}) {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [data_inicio, setDataInicio] = useState("");
    const [prazo, setPrazo] = useState("");
    const [foto, setFoto] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        if (foto) {
            const objectUrl = URL.createObjectURL(foto);
            setPreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        } else {
            setPreview(null);
        }
    }, [foto]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-[#151730] rounded-2xl shadow-2xl p-8 min-w-[320px] max-w-[90vw]">
                <h2 className="text-white text-2xl mb-6 font-bold">Novo projeto</h2>
                <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData();
                        formData.append("nome", nome);
                        formData.append("valor", valor);
                        formData.append("data_inicio", data_inicio);
                        formData.append("prazo", prazo);
                        formData.append("descricao", descricao);
                        if (foto) formData.append("foto", foto);
                        onCreate(formData);
                    }}
                >
                    <input
                        type="text"
                        placeholder="Nome do projeto"
                        className="rounded px-3 py-2 bg-[#0B0B1E] text-white border border-gray-700"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Descrição"
                        className="rounded px-3 py-2 bg-[#0B0B1E] text-white border border-gray-700"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Valor"
                        className="rounded px-3 py-2 bg-[#0B0B1E] text-white border border-gray-700"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        required
                    />
                    <input
                        type="date"
                        placeholder="Data de início"
                        className="rounded px-3 py-2 bg-[#0B0B1E] text-white border border-gray-700"
                        value={data_inicio}
                        onChange={(e) => setDataInicio(e.target.value)}
                        required
                    />
                    <input
                        type="date"
                        placeholder="Prazo"
                        className="rounded px-3 py-2 bg-[#0B0B1E] text-white border border-gray-700"
                        value={prazo}
                        onChange={(e) => setPrazo(e.target.value)}
                        required
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFoto(e.target.files?.[0] || null)}
                        className="rounded px-3 py-2 bg-[#0B0B1E] text-white border border-gray-700"
                    />
                    {preview && (
                        <div className="flex justify-center mt-2">
                            <Image
                                src={preview}
                                alt="Pré-visualização"
                                width={128}
                                height={128}
                                className="max-h-32 rounded-lg object-contain"
                            />
                        </div>
                    )}
                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600 cursor-pointer"
                            disabled={loading}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 cursor-pointer"
                            disabled={loading}
                        >
                            {loading ? "Criando..." : "Criar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function Home() {
    const { data: session } = useSession();
    const token = session?.accessToken;
    const userId = session?.user?.id;
    const [projetos, setProjetos] = useState<ProjetoDTO[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [loadingCreate, setLoadingCreate] = useState(false);
    const [modalDetalhesOpen, setModalDetalhesOpen] = useState(false);
    const [projetoDetalhado, setProjetoDetalhado] = useState<ProjetoDTO | null>(null);
    const [modalEditarOpen, setModalEditarOpen] = useState(false);
    const [projetoParaEditar, setProjetoParaEditar] = useState<ProjetoDTO | null>(null);
    const [loadingUpdate, setLoadingUpdate] = useState(false);

    const router = useRouter();

    const isGestor = session?.user?.role?.toLowerCase() === "gestor";
    const isGestorUsuario = session?.user?.role?.toLowerCase() === "usuario/gestor";
    const podeGerenciarProjetos = isGestor || isGestorUsuario;

    const handleUpdateProjeto = async (id: number, formData: FormData) => {
        setLoadingUpdate(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projeto/update/${id}`, {
                method: "PATCH",
                headers: { Authorization: `Bearer ${token}` },
                body: formData,
            });
            if (!res.ok) throw new Error("Erro ao atualizar projeto");
            setModalEditarOpen(false);
            // Atualiza a listagem
            const listRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projeto/list`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await listRes.json();
            setProjetos(data);
        } catch {
            alert("Erro ao editar projeto");
        } finally {
            setLoadingUpdate(false);
        }
    };

    useEffect(() => {
        async function fetchProjetos() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projeto/list`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!res.ok) throw new Error("Erro ao carregar projetos");
                const data = await res.json();
                setProjetos(data);
            } catch {
                setProjetos([]);
            }
        }
        if (token) fetchProjetos();
    }, [token, modalOpen]);

    const handleDeleteProjeto = async (id: number) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projeto/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!res.ok) throw new Error("Erro ao excluir projeto");
            setProjetos((prev) => prev.filter((p) => p.idprojeto !== id));
        } catch {
            alert("Erro ao excluir projeto");
        }
    };

    const handleCreateProjeto = async (formData: FormData) => {
        setLoadingCreate(true);
        formData.append("id_gestor", String(userId));
        try {
            const nomeForm = (formData.get("nome") as string)?.trim().toLowerCase();
            const nomeJaExiste = projetos.some((p) => p.nome.trim().toLowerCase() === nomeForm);
            if (nomeJaExiste) {
                alert("Já existe um projeto com este nome. Escolha outro nome.");
                return;
            }
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projeto/create`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });
            if (!res.ok) throw new Error("Erro ao criar projeto");
            setModalOpen(false);
            const listRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projeto/list`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await listRes.json();
            setProjetos(data);
        } catch (err) {
            if (err instanceof Response && err.status === 409) {
                alert("Já existe um projeto com esse nome!");
            } else {
                alert("Erro ao criar projeto");
            }
        } finally {
            setLoadingCreate(false);
        }
    };

    return (
        <div className="w-full h-screen bg-[#0B0B1E] p-0">
            <Header title="Projetos" className="bg-[#151730]">
            </Header>
            <div className="max-w-[95vw] mx-auto mt-4 bg-[#120d23] rounded-xl border-2 border-blue-500 p-8">
                <div className="flex justify-between items-center mb-4">
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 place-items-center">
                    {projetos.map((p) => (
                        <div key={p.idprojeto} className="flex flex-col items-center">
                            <div className="w-40 h-40 rounded-2xl shadow-lg overflow-hidden mb-2 bg-white flex items-center justify-center cursor-pointer hover:bg-blue-950 transition"
                                onClick={() => router.push(`/tarefas/${p.idprojeto}`)}
                                title="Ver tarefas do projeto">
                                {p.foto ? (
                                    <Image
                                        src={p.foto || "/logo-extra.svg"}
                                        alt={p.nome}
                                        width={160}
                                        height={160}
                                        className="object-contain w-full h-full"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">Sem imagem</div>
                                )}
                            </div>
                            <span className="text-white text-base text-center">{p.nome}</span>
                            <span className="text-gray-300 text-sm">
                                {p.status} • {new Date(p.data_inicio).toLocaleDateString()}
                            </span>
                            <button
                                className="mt-2 text-blue-400 underline cursor-pointer"
                                onClick={() => {
                                    setProjetoDetalhado(p);
                                    setModalDetalhesOpen(true);
                                }}
                            >
                                Ver detalhes
                            </button>


                        </div>
                    ))}
                    {/* Card Novo Projeto */}
                    {podeGerenciarProjetos && (
                        <button
                            key="novo-projeto-card"
                            className="w-40 h-40 rounded-2xl border-2 border-blue-600 flex flex-col items-center justify-center hover:bg-blue-950 transition cursor-pointer mb-21.5"
                            onClick={() => setModalOpen(true)}
                        >
                            <span className="text-blue-500 text-7xl mb-2">+</span>
                            <span className="text-white">Novo projeto</span>
                        </button>
                    )}

                </div>
            </div>
            <NovoProjetoModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onCreate={handleCreateProjeto}
                loading={loadingCreate}
            />

            <ProjetoDetalhesModal
                open={modalDetalhesOpen}
                projeto={projetoDetalhado}
                onClose={() => setModalDetalhesOpen(false)}
                onEdit={() => {
                    setModalDetalhesOpen(false);
                    setProjetoParaEditar(projetoDetalhado);
                    setModalEditarOpen(true);
                }}
                onDelete={async () => {
                    if (!projetoDetalhado) return;
                    await handleDeleteProjeto(projetoDetalhado.idprojeto);
                    setModalDetalhesOpen(false);
                }}
                isGestor={session?.user?.role.toLowerCase() === "gestor"}
                isGestorUsuario={session?.user?.role.toLowerCase() === "usuario/gestor"}
            />

            <EditarProjetoModal
                open={modalEditarOpen}
                projeto={projetoParaEditar}
                onClose={() => setModalEditarOpen(false)}
                onUpdate={handleUpdateProjeto}
                loading={loadingUpdate}
            />


        </div>
    );
}
