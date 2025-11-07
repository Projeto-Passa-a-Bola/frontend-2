// src/components/Login.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// NOVO: Ícones para aprimorar a interface
import { LogIn, User, Lock } from 'lucide-react'; 
// A imagem está sendo usada diretamente no JSX com o caminho relativo.
// Removida a importação 'video' pois você já usa o caminho relativo no JSX.

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro(''); // Limpa erro anterior

    try {
      // Seu código de requisição original
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha: password }),
      });

      const data = await response.json();

      console.log('Resposta do backend:', data);

      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        // Seu redirecionamento original
        navigate('/painel'); 
      } else {
        setErro(data.msg || 'E-mail ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setErro('Erro de conexão com o servidor. Tente novamente.');
    }
  };

  return (
    // ESTILIZAÇÃO 1: Fundo com gradiente, layout flex-col (mobile) e flex-row (lg:) e min-h-screen
    <div className='flex flex-col lg:flex-row bg-gradient-to-br from-purple-600 via-purple-400 to-blue-400 min-h-screen'>

      {/* SEÇÃO 1: Formulário de Login */}
      {/* ESTILIZAÇÃO 2: Centraliza, ocupa 100% da largura em mobile e 50% em desktop (lg:w-1/2) */}
      <div className="relative flex items-center justify-center w-full lg:w-1/2 p-4 sm:p-8">
        {/* ESTILIZAÇÃO 3: Card com fundo semi-transparente, sombra e padding responsivo */}
        <div className="relative flex flex-col p-6 sm:p-10 md:p-16 lg:p-20 justify-center items-center bg-zinc-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-900/50 w-full max-w-md">

          <div className="mb-6">
            {/* Ícone de Login */}
            <LogIn className="w-10 h-10 text-purple-600 mx-auto mb-2" />
            <h2 className="text-3xl font-extrabold text-center text-gray-900">Conecte-se</h2>
          </div>

          <form onSubmit={handleLogin} className="w-full">

            <div className="mb-5 relative">
              {/* Ícone e Label */}
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="email">
                <User className="w-4 h-4 mr-2 text-purple-500" /> E-mail
              </label>
              <input
                // ESTILIZAÇÃO 4: Input mais suave (borda-b, bg-white/50, focus ring)
                className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6 relative">
              {/* Ícone e Label */}
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="password">
                <Lock className="w-4 h-4 mr-2 text-purple-500" /> Senha
              </label>
              <input
                // ESTILIZAÇÃO 4: Input mais suave (borda-b, bg-white/50, focus ring)
                className="w-full px-3 py-3 text-gray-700 border-b-2 border-purple-300 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-150 shadow-sm"
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                {/* Removido <Link to="/HomeLogada"></Link> daqui, pois o botão já executa a função handleLogin, que faz o navigate. */}
                Entrar
              </button>
            </div>
          </form>

          {/* ESTILIZAÇÃO 7: Link de Cadastro com cor e hover */}
          <p className="mt-6 text-center text-gray-600 text-sm">
            Não tem uma conta?{' '}
            <Link to="/register" className="text-purple-600 hover:text-purple-800 font-bold transition duration-150">
              Cadastre-se
            </Link>
          </p>

        </div>
      </div>

      {/* SEÇÃO 2: Imagem/Vídeo */}
      {/* ESTILIZAÇÃO 8: Oculta em mobile (hidden) e mostra em desktop (lg:flex lg:w-1/2) */}
      <div id='direita' className='hidden lg:flex lg:w-1/2 items-center justify-center p-8 relative overflow-hidden'>
        <img
          // O caminho original: "../../../public/loginImg.png" é perigoso em JSX. 
          // O caminho "/loginImg.png" (assumindo que está na pasta `public`) é mais robusto.
          src="/loginImg.png" 
          alt="Imagem de fundo da tela de Login"
          // ESTILIZAÇÃO 9: Imagem com capa, cantos arredondados, sombra e um pequeno zoom
          className='w-full h-full object-cover rounded-3xl shadow-2xl shadow-purple-900/50 transform scale-105'
          // Adicionada uma função de erro para um fallback visual caso a imagem não carregue
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/6b21a8/ffffff?text=Login" }}
        />
        {/* Overlay sutil para a imagem */}
        <div className="absolute inset-0 bg-purple-900/20 rounded-3xl"></div>
      </div>

    </div>
  );
}

export default Login;