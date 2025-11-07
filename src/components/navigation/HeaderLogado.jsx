import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AvatarMenu } from "../ui"; 

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

const NavLinkLogado = ({ to, children, isMobile = false }) => {
    const baseClasses = "hover:text-purple-600 ease-out duration-100 p-1";

    return (
        <a
            href={to}
            className={`${baseClasses} ${isMobile ? 'block w-full text-center hover:bg-slate-50' : 'hover:border-b-4'}`}
        >
            {children}
        </a>
    );
};


function HeaderLogado() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função para fechar o menu após o clique em um link móvel
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    }

    return (
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
                                <NavLinkLogado to="/painel">Home</NavLinkLogado>
                            </li>
                            <li>
                                <NavLinkLogado to="/campeonato">Campeonato</NavLinkLogado>
                            </li>
                            <li>
                                <NavLinkLogado to="/sobre">Sobre</NavLinkLogado>
                            </li>
                            <li>
                                <NavLinkLogado to="#footer">Contato</NavLinkLogado>
                            </li>
                        </ul>
                    </div>

                    {/* Avatar Menu (Restaurado para o Desktop) */}
                    <div id="botoes" className="flex ml-[60px] font-medium"> 
                        {/* Usando o componente AvatarMenu placeholder */}
                        <AvatarMenu />
                    </div>
                </div>

                {/* Elemento fantasma para balancear o layout (Desktop) */}
                <div className="hidden md:flex flex-row items-center w-10">
                    {/* Usado para balancear o espaço da logo no layout centralizado */}
                </div>
            </div>
            
            {/* Menu Móvel (visível apenas quando aberto em telas pequenas) */}
            {isMenuOpen && (
                <div className="md:hidden w-full bg-white shadow-lg p-4 border-t border-gray-100">
                    <div id="nav-bar-mobile" className="pb-4 border-b border-gray-100 mb-4">
                        <ul className="flex flex-col gap-3 font-medium text-text-secondary text-lg">
                            <li className="w-full" onClick={handleLinkClick}>
                                <NavLinkLogado to="/painel" isMobile>Home</NavLinkLogado>
                            </li>
                            <li className="w-full" onClick={handleLinkClick}>
                                <NavLinkLogado to="/campeonato" isMobile>Campeonato</NavLinkLogado>
                            </li>
                            <li className="w-full" onClick={handleLinkClick}>
                                <NavLinkLogado to="/sobre" isMobile>Sobre</NavLinkLogado>
                            </li>
                            <li className="w-full" onClick={handleLinkClick}>
                                <NavLinkLogado to="#footer" isMobile>Contato</NavLinkLogado>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Avatar Menu (Restaurado para o Mobile) */}
                    <div id="avatar-mobile" className="flex justify-center">
                         <AvatarMenu />
                    </div>
                </div>
            )}
        </header>
    );
}

export default HeaderLogado;