import React from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutoProps {
  produto: Produto
}

function CardProduto({produto}: CardProdutoProps) {
  return (
    <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={produto.imagem} alt="Imagem do produto" className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {produto.nome}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{produto.categoria}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${produto.valor}</p>
        </div>

        <div className="flex">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Adicionar ao carrinho
            </span>
          </button>
        </div>

    </div>
  );
}

export default CardProduto;