'use client';
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#07061A] flex flex-col relative">
      {/* Logo no topo esquerdo */}
      <div className="absolute left-16 top-16 flex flex-col items-start">
        <Image
          src="/logo-extra.png"
          alt="Logo Extra Software"
          width={100}
          height={100}
          className="mb-2"
        />
      </div>
      {/* Conteúdo central */}
      <section className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-mono font-normal text-center mb-6 tracking-widest">
          SISTEMA DE GESTÃO DE PROJETOS
        </h1>
        <h2 className="text-white text-4xl md:text-5xl font-extrabold font-mono mb-16 text-center tracking-widest">
          EXTRASOFTWARE
        </h2>
        <button
          className="
            bg-[#1976FF] hover:bg-blue-600 text-black font-mono font-bold 
            text-3xl rounded-lg px-16 py-4 shadow-lg
            transition-colors cursor-pointer
          "
          onClick={() => {
            window.location.href = "auth/login";
          }}
        >
          ENTRAR
        </button>
        <button
          className="
            bg-[#1976FF] hover:bg-blue-600 text-black font-mono font-bold 
            text-3xl rounded-lg px-16 py-4 shadow-lg
            transition-colors cursor-pointer mt-4
          "
          onClick={() => {
            window.location.href = "auth/register";
          }}
        >
          CADASTRAR
        </button>
      </section>
      {/* Sombra no rodapé */}
      <div className="w-full h-8 absolute bottom-0 left-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
    </main>
  );
}
