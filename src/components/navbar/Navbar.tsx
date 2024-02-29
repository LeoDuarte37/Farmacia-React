import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { FirstAidKit } from '@phosphor-icons/react';

function Navbar() {
    return (
        <>
           <div className='w-full bg-gradient-to-l from-cyan-500 to-blue-500 text-white flex justify-center py-4'>
                <div className="container flex justify-around text-lg">
                    <Link to='/home' className='text-2xl font-bold uppercase flex gap-2'>Farmácia <FirstAidKit size={32} weight="bold"/></Link>
                    
                    <div className='flex gap-4'>
                        <Link to='/form-produto' className='hover:underline'>Cadastro Produto</Link>
                        <Link to='/form-categoria' className='hover:underline'>Cadastro Categoria</Link>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Navbar;