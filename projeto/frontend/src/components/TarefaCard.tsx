// components/TarefaCard.tsx

import Image from "next/image";
import { Tarefa } from "./KanbanTarefas";
import { handleChangeStatusTarefa } from "@/hooks/tarefas";
import { useSession } from "next-auth/react";


interface TarefaCardProps {
    tarefa: Tarefa;
    status: string;
    onDetalhe?: () => void;
    onReload?: () => void;
}

const bordaPorStatus: Record<string, string> = {
    "A fazer": "border-yellow-500",
    "Em andamento": "border-blue-400",
    "Em validação": "border-purple-600",
    "Concluído": "border-green-500",
    "Recusados": "border-red-500"
};

export default function TarefaCard({ tarefa, status, onDetalhe, onReload }: TarefaCardProps) {
    const { data: session } = useSession();

    const token = typeof session?.accessToken === "string"
        ? session.accessToken
        : typeof session?.user?.id === "string"
            ? session.user.id
            : "";

    const handleChangeStatus = async (id: number, novoStatus: string, token: string) => {
        await handleChangeStatusTarefa(token, id, novoStatus, onReload);
    };

    const handleAprovar = (token: string) => {
        if (tarefa.idtarefa) {
            handleChangeStatus(tarefa.idtarefa, "Em andamento", token);

        }
    };
    const handleRecusar = (token: string) => {
        if (tarefa.idtarefa) {
            handleChangeStatus(tarefa.idtarefa, "Recusados", token);
        }
    };

    const handleValidar = (token: string) => {
        if (tarefa.idtarefa) {
            handleChangeStatus(tarefa.idtarefa, "Em validação", token);
        }
    };

    const handleConcluir = (token: string) => {
        if (tarefa.idtarefa) {
            handleChangeStatus(tarefa.idtarefa, "Concluído", token);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div
                className={`relative bg-white text-black rounded-2xl shadow-lg px-8 py-6 border-4 ${bordaPorStatus[status]} w-full min-w-[260px] max-w-[300px] cursor-pointer hover:shadow-xl transition-all`}
                style={{ minHeight: 230 }}
                onClick={onDetalhe}
            >
                <div className="absolute right-2 top-2 text-sm font-medium">{tarefa.idtarefa}</div>
                <div className="text-2xl font-medium mb-1 ml-[-20px]">{tarefa.nome}</div>
                <div className="text-sm mb-2 ml-[-20px]">
                    Criado em {new Date(tarefa.data_inicio).toLocaleDateString()}<br />
                    Prazo até {new Date(tarefa.prazo).toLocaleDateString()}
                </div>
                <div className="text-base mb-4 ml-[-20px]">
                    {tarefa.descricao.length > 80
                        ? tarefa.descricao.substring(0, 80) + "..."
                        : tarefa.descricao}
                </div>
                <div className="text-xs absolute right-2 bottom-2">
                    Criado por: {tarefa.gestor?.nome || "Desconhecido"}
                </div>
            </div>
            {/* Botões embaixo do card */}
            {status === "A fazer" && (
                <div className="flex justify-center z-10">
                    <button
                        className="w-14 h-14 bg-blue-600 rounded-b-full hover:bg-blue-800 shadow border-4 border-black flex items-center justify-center cursor-pointer"
                        title="Mover para Em andamento"
                        onClick={() => {
                            handleAprovar(token);
                        }}
                        style={{ fontSize: 0 }}
                    >
                        <Image src="/develop-svgrepo-com.svg" alt="Mover para Em andamento" width={32} height={32} />
                    </button>
                    <button
                        className="w-14 h-14 rounded-b-full bg-red-600 hover:bg-red-800 shadow border-4 border-black ml-4 cursor-pointer"
                        title="Recusar"
                        onClick={() => {
                            handleRecusar(token);
                        }}
                        style={{ fontSize: 0 }}
                    >
                        <Image className="ml-2" src="/cancel-svgrepo-com.svg" alt="Recusar" width={32} height={32} />
                    </button>
                </div>
            )
            }
            {status === "Em andamento" && (
                <div className="flex justify-center z-10">
                    <button
                        className="w-14 h-14 bg-purple-600 rounded-b-full hover:bg-purple-800 shadow border-4 border-black flex items-center justify-center cursor-pointer"
                        title="Mover para Em validação"
                        onClick={() => {
                            handleValidar(token);
                        }}
                        style={{ fontSize: 0 }}
                    >
                        <Image src="/validation-svgrepo-com.svg" alt="Mover para Em andamento" width={32} height={32} />
                    </button>
                    <button
                        className="w-14 h-14 rounded-b-full bg-red-600 hover:bg-red-800 shadow border-4 border-black ml-4 cursor-pointer"
                        title="Recusar"
                        onClick={() => {
                            handleRecusar(token);
                        }}
                        style={{ fontSize: 0 }}
                    >
                        <Image className="ml-2" src="/cancel-svgrepo-com.svg" alt="Recusar" width={32} height={32} />
                    </button>
                </div>
            )
            }
            {status === "Em validação" && (
                <div className="flex justify-center z-10">
                    <button
                        className="w-14 h-14 bg-green-500 rounded-b-full hover:bg-green-800 shadow border-4 border-black flex items-center justify-center cursor-pointer"
                        title="Mover para Concluído"
                        onClick={() => {
                            handleConcluir(token);
                        }}
                        style={{ fontSize: 0 }}
                    >
                        <Image src="/validation-svgrepo-com.svg" alt="Mover para Em andamento" width={32} height={32} />
                    </button>
                    <button
                        className="w-14 h-14 rounded-b-full bg-red-600 hover:bg-red-800 shadow border-4 border-black ml-4 cursor-pointer"
                        title="Recusar"
                        onClick={() => {
                            handleRecusar(token);
                        }}
                        style={{ fontSize: 0 }}
                    >
                        <Image className="ml-2" src="/cancel-svgrepo-com.svg" alt="Recusar" width={32} height={32} />
                    </button>
                </div>
            )
            }

            {status === "Recusados" && (
                <div className="flex justify-center z-10">
                    <button
                        className="w-14 h-14 bg-purple-600 rounded-b-full hover:bg-purple-800 shadow border-4 border-black flex items-center justify-center cursor-pointer"
                        title="Mover para Em Validação"
                        onClick={() => {
                            handleValidar(token);
                        }}
                        style={{ fontSize: 0 }}
                    >
                        <Image src="/validation-svgrepo-com.svg" alt="Mover para Em andamento" width={32} height={32} />
                    </button>
                    <button
                        className="w-14 h-14 rounded-b-full bg-blue-600 hover:bg-blue-800 shadow border-4 border-black ml-4 cursor-pointer"
                        title="Mover para Em andamento"
                        onClick={() => {
                            handleAprovar(token);
                        }}
                        style={{ fontSize: 0 }}
                    >
                        <Image className="ml-2" src="/develop-svgrepo-com.svg" alt="Recusar" width={32} height={32} />
                    </button>
                </div>
            )}
        </div >
    );
}