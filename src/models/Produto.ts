import Categoria from "./Categoria";

export default interface Produto {
	id: number;
	nome: string;
	valor: number;
	categoria: Categoria | null;
	disponivel: boolean;
}