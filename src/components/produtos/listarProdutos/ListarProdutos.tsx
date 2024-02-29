import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service';
import Produto from '../../../models/Produto';
import CardProduto from '../cardProduto/CardProduto';

function ListarProdutos() {
  	const [produtos, setProdutos] = useState<Produto[]>([]);

	let navigate = useNavigate();

	async function buscarProdutos() {
	    try {
	      await buscar('/produtos', setProdutos);
	    } catch (error: any) {
	      alert("Erro ao listar os produtos. Por favor, reinicie a página.")
	    }
	}

	useEffect(() => {
   		buscarProdutos();
  	}, [produtos.length]);

	return (
	    <>
	    	<div className="bg-white">
			  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Produtos</h2>

			    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			    	{produtos.map((produto) => (
	          			<CardProduto key={produto.id} produto={produto} />
	        		))}
			    </div>
			  </div>
			</div>
	    </>
	);
}

export default ListarProdutos;

