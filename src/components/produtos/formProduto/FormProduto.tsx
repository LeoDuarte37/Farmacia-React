import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';

function FormProduto() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    valor: 0,
    categoria: null,
    imagem: '',
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/id/${id}`, setProduto);
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/id/${id}`, setCategoria);
  }

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarCategoriaPorId(id);
      console.log(categoria);

    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  function retornar() {
    navigate('/home');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ produto });

    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto);
        alert('Produto atualizado com sucesso');
        retornar();
      } catch (error: any) {
        alert('Erro ao atualizar o Produto');
      }

    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto);
        alert('Produto cadastrado com sucesso');
        retornar();
      } catch (error: any) {
        alert('Erro ao cadastrar o Produto');
      }
    }
  }

  const carregandoCategoria = categoria.nome === '';

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="Nome">Nome do produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="valor">Valor do produto</label>
          <input
            value={produto.valor}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Valor"
            name="valor"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Categoria do produto</p>
          <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarTemaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id} >{categoria.nome}</option>
              </>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="imagem">Imagem do produto</label>
          <input
            value={produto.imagem}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Imagem"
            name="imagem"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
          {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default FormProduto;