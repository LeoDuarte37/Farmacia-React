import React from 'react';
import './Home.css';
import medical from '../../assets/medical.jpg';

function Home() {
    return (
    
        <div className="bg-white">
          <div className="p-10 scroll-px-10 lg:px-8">
            <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Bem vindo(a)!
                  <br />
                  Veio a farmácia certa.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-500">
                  Precisa economizar e manter a saúde e cuidados em dia? Temos uma variedades de produtos e serviços, veja abaixo!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                    href="#"
                    className="rounded-md bg-gray-600 shadow-lg shadow-gray-700/50 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Ver produtos
                  </a>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  className="absolute left-0 top-0 w-[50rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src={medical}
                  alt="App screenshot"
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      
    );
}

export default Home;