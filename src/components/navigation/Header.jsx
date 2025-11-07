import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

// Componentes de Ícone (Hamburger e X)
const MenuIcon = ({ onClick }) => (
    <button onClick={onClick} className="text-gray-800 focus:outline-none md:hidden p-1">
        <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    </button>
);

const CloseIcon = ({ onClick }) => (
    <button onClick={onClick} className="text-gray-800 focus:outline-none md:hidden p-1">
        <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    </button>
);


function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isPanelPage = location.pathname === '/';

  const NavLink = ({ to, children, isMobile = false }) => {
    const handleClick = () => {
      if (isMobile) {
        setIsMenuOpen(false);
      }
    }

    const baseClasses = "hover:text-purple-600 ease-out duration-100 p-1";

    const linkContent = isPanelPage ? (
      <a
        href={to}
        className={`${baseClasses} ${isMobile ? 'block w-full text-center hover:bg-slate-50' : 'hover:border-b-4'}`}
        onClick={handleClick}
      >
        {children}
      </a>
    ) : (
      <Link
        to={`/${to}`}
        className={`${baseClasses} ${isMobile ? 'block w-full text-center hover:bg-slate-50' : 'hover:border-b-4'}`}
        onClick={handleClick}
      >
        {children}
      </Link>
    );
    
    return linkContent;
  };

  return (
    // Z-INDEX AJUSTADO: z-[999] (valor arbitrário para garantir que fique acima de tudo)
    <header className="bg-white sticky top-0 z-[999] shadow-md">
      {/* Container Principal do Header */}
      <div 
        className="flex flex-row items-center justify-between p-5 md:px-[85px] md:justify-start" 
      >
        
        {/* Logo */}
        <Link to="/"> 
          <img src="/logoRoxa.png" alt="logo" className="w-10 h-10" />
        </Link>
        
        {/* Ícone do Menu Hamburger (Mobile) */}
        {isMenuOpen ? (
          <CloseIcon onClick={() => setIsMenuOpen(false)} />
        ) : (
          <MenuIcon onClick={() => setIsMenuOpen(true)} />
        )}

        {/* Conteúdo de Navegação (Desktop: Centralizado / Mobile: Escondido) */}
        <div 
            className="hidden md:flex flex-row items-center justify-center mx-auto" 
        >
          {/* Nav Links */}
          <div id="nav-bar" className="flex justify-center items-center">
            <ul className="flex flex-row gap-[60px] font-medium text-text-secondary text-lg">
              <li>
                <NavLink to="#resumo">Resumo</NavLink>
              </li>
              <li>
                <NavLink to="#copa">Copa</NavLink>
              </li>
              <li>
                <NavLink to="#footer">Contato</NavLink>
              </li>
            </ul>
          </div>

          {/* Botões */}
          <div id="botoes" className="flex ml-[60px] gap-[80px]"> 
            <Link
              to="/login"
              className="p-5 h-10 items-center justify-center flex bg-slate-200 cursor-pointer rounded-lg shadow-lg hover:scale-105 transition"
            >
              Entrar
            </Link>
            <Link
              to="/register"
              className="p-5 h-10 items-center justify-center flex bg-gradient-to-r from-purple-500 to-violet-500 cursor-pointer rounded-lg shadow-lg text-white hover:scale-105 transition"
            >
              Cadastro
            </Link>
          </div>
        </div>

        {/* Elemento fantasma para balancear o layout (Desktop) */}
        <div className="hidden md:flex flex-row items-center">
        </div>
      </div>
      
      {/* Menu Móvel (visível apenas quando aberto em telas pequenas) */}
      {/* Ele também herda o z-index alto do <header> pai */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white shadow-lg p-4 border-t border-gray-100">
          <div id="nav-bar-mobile" className="pb-4">
            <ul className="flex flex-col gap-3 font-medium text-text-secondary text-lg">
              <li className="w-full">
                <NavLink to="#resumo" isMobile>Resumo</NavLink>
              </li>
              <li className="w-full">
                <NavLink to="#copa" isMobile>Copa</NavLink>
              </li>
              <li className="w-full">
                <NavLink to="#footer" isMobile>Contato</NavLink>
              </li>
            </ul>
          </div>
          
          <div id="botoes-mobile" className="flex flex-col gap-3 font-medium pt-4 border-t border-gray-100">
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="p-3 w-full text-center bg-slate-200 cursor-pointer rounded-lg shadow-md transition"
            >
              Entrar
            </Link>
            <Link
              to="/register"
              onClick={() => setIsMenuOpen(false)}
              className="p-3 w-full text-center bg-gradient-to-r from-purple-500 to-violet-500 cursor-pointer rounded-lg shadow-md text-white transition"
            >
              Cadastro
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;