import Image from "next/image";
import type { ProjetoDTO } from "../types/ProjetoDTO";

export default function ProjetoDetalhesModal({
    open,
    projeto,
    onClose,
    onEdit,
    onDelete,
    isGestor,
    isGestorUsuario
}: {
    open: boolean;
    projeto: ProjetoDTO | null;
    onClose: () => void;
    onEdit: () => void;
    onDelete: () => void;
    isGestor: boolean;
    isGestorUsuario: boolean;
}) {
    if (!open || !projeto) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-[#1e213d] rounded-2xl p-8 w-[95vw] max-w-md shadow-2xl">
                <div className="flex justify-between mb-3">
                    <h2 className="text-2xl font-bold text-white">{projeto.nome}</h2>
                    <button onClick={onClose} className="text-gray-300 text-xl">&times;</button>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-32 rounded-lg overflow-hidden bg-white flex items-center justify-center mb-2">
                        {projeto.foto ? (
                            <Image src={projeto.foto} alt={projeto.nome} width={128} height={128} className="object-contain" />
                        ) : (
                            <div className="text-gray-400">Sem imagem</div>
                        )}
                    </div>
                    <div className="text-white w-full">
                        <div><b>Descrição:</b> {projeto.descricao}</div>
                        <div><b>Status:</b> {projeto.status}</div>
                        <div><b>Data início:</b> {new Date(projeto.data_inicio).toLocaleDateString()}</div>
                        <div><b>Prazo:</b> {new Date(projeto.prazo).toLocaleDateString()}</div>
                        <div><b>Valor:</b> R$ {Number(projeto.valor).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</div>
                        <div><b>Gestor:</b> {projeto.id_gestor}</div>
                    </div>
                </div>
                {isGestor || isGestorUsuario && (
                    <div className="flex gap-3 mt-6 justify-end">
                        {projeto.status !== "CONCLUIDO" && (
                            <button
                                className="px-4 py-2 rounded bg-yellow-500 text-white font-bold hover:bg-yellow-600"
                                onClick={onEdit}
                            >
                                Editar
                            </button>
                        )}
                        <button
                            className="px-4 py-2 rounded bg-red-600 text-white font-bold hover:bg-red-700"
                            onClick={() => {
                                if (window.confirm("Tem certeza que deseja excluir este projeto?")) onDelete();
                            }}
                        >
                            Excluir
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
