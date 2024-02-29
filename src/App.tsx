import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import FormCategoria from './components/categorias/formCategoria/FormCategoria';
import ListarCategorias from './components/categorias/listarCategorias/ListarCategorias';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import FormProduto from './components/produtos/formProduto/FormProduto';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/form-produto" element={<FormProduto />} />
              <Route path="/form-categoria" element={<FormCategoria />} />

              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/editarProduto/:id" element={<FormProduto />} />
              <Route path="/cadastrarProduto" element={<FormProduto />} />

              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormCategoria />} />
              <Route path="/cadastrarCategoria" element={<FormCategoria />} />
              <Route path="/listarCategorias" element={<ListarCategorias />} />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
