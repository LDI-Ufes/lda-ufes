import { FiSearch, FiSettings } from "react-icons/fi";
import { AiOutlineBook } from "react-icons/ai";

interface CabecalhoProps {
  titulo: string;
  subtitulo: string;
}

export const Cabecalho = ({ titulo, subtitulo }: CabecalhoProps) => {
  return (
    <header className="flex w-full items-center justify-between bg-white p-4 shadow-md">
      {/* Grupo 1: Título e Subtítulo */}
      <div className="flex flex-col">
        <p className="text-sm text-gray-600">{subtitulo}</p>

        <div className="flex items-center gap-2">
          <AiOutlineBook className="text-2xl text-blue-600" />
          <h1 className="text-xl font-bold">{titulo}</h1>
        </div>
      </div>

      {/* Grupo 2: Barra de Pesquisa */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar"
          className="rounded-lg border py-2 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
      </div>

      {/* Grupo 3: Botão de Ajustes */}
      <button
        className="rounded-full p-2 transition-colors hover:bg-gray-100"
        aria-label="Ajustes de leitura"
      >
        <FiSettings className="text-2xl text-gray-600" />
      </button>
    </header>
  );
};
