// src/components/Register.jsx

import React, { useState } from "react";
// Importações necessárias para funcionalidade e ícones
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, ClipboardCheck } from 'lucide-react'; 

function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate(); // Hook para redirecionamento

  const handleRegister = async (e) => {
    e.preventDefault();
    setErro(''); // Limpa erro anterior

    if (senha !== confirmaSenha) {
      setErro('As senhas não coincidem!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // CORREÇÃO: Usando name e lastName das variáveis de estado
        body: JSON.stringify({
          name: name + ' ' + lastName, // Concatena nome e sobrenome
          email: email,
          senha: senha,
          confirmasenha: confirmaSenha 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registro bem-sucedido! Redirecionando para o login...");
        navigate("/login"); // Redireciona para a página de login
      } else {
        setErro(data.message || "Erro ao registrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setErro("Erro de conexão com o servidor.");
    }
  };
  
  return (
    // ESTILIZAÇÃO 1: Fundo com gradiente, layout flex-col (mobile) e flex-row (lg:) e min-h-screen
    <div className='flex flex-col lg:flex-row bg-gradient-to-br from-purple-600 via-purple-400 to-blue-400 min-h-screen'>
      
      {/* SEÇÃO 1: Formulário de Cadastro */}
      {/* ESTILIZAÇÃO 2: Centraliza, ocupa 100% da largura em mobile e 50% em desktop (lg:w-1/2) */}
      <div className="relative flex items-center justify-center w-full lg:w-1/2 p-4 sm:p-8">
        {/* ESTILIZAÇÃO 3: Card com fundo semi-transparente, sombra e padding responsivo (maior que o login por ter mais campos) */}
        <div className="relative flex flex-col p-6 sm:p-10 md:p-16 lg:p-16 justify-center items-center bg-zinc-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-900/50 w-full max-w-lg">

          <div className="mb-6">
            {/* Ícone de Cadastro */}
            <ClipboardCheck className="w-10 h-10 text-purple-600 mx-auto mb-2" />
            <h2 className="text-3xl font-extrabold text-center text-gray-900">
              Cadastre-se
            </h2>
          </div>

          <form onSubmit={handleRegister} className="w-full">
            
            {/* Container para Nome e Sobrenome lado a lado (em desktop) */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                
                {/* Nome */}
                <div className="relative flex-1">
                    <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="nome">
                        <User className="w-4 h-4 mr-2 text-purple-500" /> Nome
                    </label>
                    <input
                        // ESTILIZAÇÃO 4: Input mais suave
                        className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                        id="nome"
                        type="text"
                        placeholder="Seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                
                {/* Sobrenome */}
                <div className="relative flex-1">
                    <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="sobrenome">
                        <User className="w-4 h-4 mr-2 text-purple-500" /> Sobrenome
                    </label>
                    <input
                        // ESTILIZAÇÃO 4: Input mais suave
                        className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                        id="sobrenome"
                        type="text"
                        placeholder="Seu sobrenome"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
            </div>

            {/* E-mail */}
            <div className="mb-5 relative">
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="email">
                <Mail className="w-4 h-4 mr-2 text-purple-500" /> E-mail
              </label>
              <input
                // ESTILIZAÇÃO 4: Input mais suave
                className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Senha */}
            <div className="mb-5 relative">
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="senha">
                <Lock className="w-4 h-4 mr-2 text-purple-500" /> Senha
              </label>
              <input
                // ESTILIZAÇÃO 4: Input mais suave
                className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                id="senha"
                type="password"
                placeholder="********"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            {/* Confirma Senha */}
            <div className="mb-6 relative">
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="confirmaSenha">
                <Lock className="w-4 h-4 mr-2 text-purple-500" /> Confirme a Senha
              </label>
              <input
                // ESTILIZAÇÃO 4: Input mais suave
                className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                id="confirmaSenha"
                type="password"
                placeholder="********"
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
                required
              />
            </div>

            {/* ESTILIZAÇÃO 5: Mensagem de erro mais visível e estilizada */}
            {erro && <p className="text-red-600 font-medium text-sm mb-4 bg-red-100 p-2 rounded-lg border border-red-300">{erro}</p>}

            <div className="flex items-center justify-between">
              <button
                // ESTILIZAÇÃO 6: Botão com gradiente, hover, sombra e foco aprimorados.
                className="w-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
                type="submit"
              >
                Registrar
              </button>
            </div>
          </form>

          {/* ESTILIZAÇÃO 7: Link de Login com cor e hover */}
          <p className="mt-6 text-center text-gray-600 text-sm">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-purple-600 hover:text-purple-800 font-bold transition duration-150">
              Conecte-se
            </Link>
          </p>

        </div>
      </div>

      {/* SEÇÃO 2: Imagem/Vídeo */}
      {/* ESTILIZAÇÃO 8: Oculta em mobile (hidden) e mostra em desktop (lg:flex lg:w-1/2) */}
      <div id='direita' className='hidden lg:flex lg:w-1/2 items-center justify-center p-8 relative overflow-hidden'>
        <img
          // Ajustado o caminho para assumir a pasta public: "/cadastroImg.png"
          src="/cadastroImg.png" 
          alt="Imagem de fundo da tela de Cadastro"
          // ESTILIZAÇÃO 9: Imagem com capa, cantos arredondados, sombra e um pequeno zoom
          className='w-full h-full object-cover rounded-3xl shadow-2xl shadow-purple-900/50 transform scale-105'
          // Fallback visual caso a imagem não carregue
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/6b21a8/ffffff?text=Cadastro" }}
        />
        {/* Overlay sutil para a imagem */}
        <div className="absolute inset-0 bg-purple-900/20 rounded-3xl"></div>
      </div>

    </div>
  );
}

export default Register;