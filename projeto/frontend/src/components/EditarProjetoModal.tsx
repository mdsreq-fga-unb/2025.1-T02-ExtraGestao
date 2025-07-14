'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { ProjetoDTO } from "@/types/ProjetoDTO";

export default function EditarProjetoModal({
    open,
    projeto,
    onClose,
    onUpdate,
    loading
}: {
    open: boolean;
    projeto: ProjetoDTO | null;
    onClose: () => void;
    onUpdate: (id: number, data: FormData) => void;
    loading: boolean;
}) {
    // Inicialize sempre vazio
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [data_inicio, setDataInicio] = useState("");
    const [prazo, setPrazo] = useState("");
    const [foto, setFoto] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [status, setStatus] = useState(projeto?.status || "EM_ANDAMENTO");

    useEffect(() => {
        if (open && projeto) {
            setNome(projeto.nome);
            setDescricao(projeto.descricao);
            setValor(projeto.valor.toString());
            setDataInicio(projeto.data_inicio.slice(0, 10));
            setPrazo(projeto.prazo.slice(0, 10));
            setFoto(null);
            setPreview(projeto.foto || null);
            setStatus(projeto.status);   // <-- aqui
        }
    }, [open, projeto]);

    useEffect(() => {
        if (open && projeto) {
            setNome(projeto.nome);
            setDescricao(projeto.descricao);
            setValor(projeto.valor.toString());
            setDataInicio(projeto.data_inicio.slice(0, 10));
            setPrazo(projeto.prazo.slice(0, 10));
            setFoto(null);
            setPreview(projeto.foto || null);
        }
    }, [open, projeto]);

    useEffect(() => {
        if (foto) {
            const objectUrl = URL.createObjectURL(foto);
            setPreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        } else if (projeto?.foto) {
            setPreview(projeto.foto);
        } else {
            setPreview(null);
        }
    }, [foto, projeto]);

    if (!open || !projeto) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-[#151730] rounded-2xl shadow-2xl p-8 min-w-[320px] max-w-[90vw]">
                <h2 className="text-white text-2xl mb-6 font-bold">Editar projeto</h2>
                <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData();
                        formData.append("status", status);
                        formData.append("nome", nome);
                        formData.append("valor", valor);
                        formData.append("data_inicio", data_inicio);
                        formData.append("prazo", prazo);
                        formData.append("descricao", descricao);
                        if (foto) formData.append("foto", foto);
                        onUpdate(projeto.idprojeto, formData);
                    }}
                >
                    <input
                        type="text"
                        placeholder="Nome do projeto"
                        maxLength={50}
                        className="rounded px-3 py-2 bg-[#0B0B1E] text-white border border-gray-700"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Descrição"
                        maxLength={1000}
                        className="rounded px-3 py-2 bg-[#0B0B1E] text-white border border-gray-700"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Valor"
                        min="0"
                        step="0.01"
                        max={99999999}
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

                    <select
                        className="rounded px-3 py-2 bg-[#0B0B1E] text-white border border-gray-700"
                        value={status}
                        onChange={e => setStatus(e.target.value as "EM_ANDAMENTO" | "CONCLUIDO")}
                        required
                    >
                        <option value="EM_ANDAMENTO">Em andamento</option>
                        <option value="CONCLUIDO">Concluído</option>
                    </select>


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
                                style={{ objectFit: "contain" }}
                                unoptimized
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
                            className="px-4 py-2 rounded bg-yellow-500 text-white font-bold hover:bg-yellow-600 cursor-pointer"
                            disabled={loading}
                        >
                            {loading ? "Salvando..." : "Salvar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
