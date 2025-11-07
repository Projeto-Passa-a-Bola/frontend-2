import React, { useEffect, useState } from 'react';

// --- DEPENDÊNCIAS MOCK / DUMMY COMPONENTS (para o ambiente de arquivo único) ---

// Mock do useNavigate para simular a navegação sem react-router-dom
const useNavigate = () => (path) => console.log('Navigating to:', path);

// Componente Dummy para FormContact
const FormContact = () => {
  return (
    <div className="p-8 md:p-16 lg:p-24 bg-white shadow-inner">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-8">Dúvidas? Fale Conosco!</h2>
      <div className="max-w-xl mx-auto p-6 rounded-xl bg-gray-50 shadow-lg">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
            <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500" placeholder="Seu nome completo"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500" placeholder="seu.email@exemplo.com"/>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
            <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500" placeholder="Sua pergunta ou sugestão..."></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full px-8 py-3 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-purple-500 to-violet-500 shadow-lg hover:scale-[1.01] transition-transform duration-300"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---

function HomeLogada() {
  const navigate = useNavigate();
  // Usando um estado mock para simular o token
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  // Simula o redirecionamento (ou login forçado, dependendo da necessidade)
  useEffect(() => {
    if (!token) {
      // Como estamos em um ambiente de arquivo único, apenas logamos a navegação
      console.log("Token não encontrado. Redirecionando para /login.");
      // Se fosse o app real: navigate('/login');
    }
  }, [token, navigate]);

  // Dados estáticos de exemplo para os jogos
  const proximosJogos = [
    {
      id: 1,
      timeA: "Time 1",
      timeB: "Time 2",
      horario: "15:00",
      data: "25/09",
      local: "Estádio Municipal"
    },
    {
      id: 2,
      timeA: "Time 3",
      timeB: "Time 4",
      horario: "17:30",
      data: "25/09",
      local: "Arena Litorânea"
    },
    {
      id: 3,
      timeA: "Time 5",
      timeB: "Time 6",
      horario: "19:00",
      data: "26/09",
      local: "Complexo Esportivo Central"
    }
  ];

  // A lista de seções não é mais necessária para o SideNav, mas mantida como exemplo
  const pageSections = [
    { id: "hero", label: "Início" },
    { id: "jogos", label: "Jogos" },
    { id: "forms", label: "Perguntas" },
  ];

  // Se o token não existir, o componente não renderiza o conteúdo principal (apenas o log)
  if (!token) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-red-500">Redirecionando...</p>
      </div>
    ); 
  }

  return (
    <>
      <div className="overflow-x-hidden">
        {/* SIDE NAV REMOVIDO */}
        
        {/* Seção de Boas-vindas (Hero) */}
        {/* Removidas as classes de padding esquerdo para compensar o SideNav */}
        <section id="hero" className="relative flex flex-col justify-center items-center p-8 md:p-16 min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100" >
          {/* Conteúdo por cima do vídeo e do overlay */}
          <div className="relative z-10 flex flex-col items-center text-center gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              Passa a <span className="text-purple-500">Bola</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-black max-w-3xl">
              A plataforma profissional que conecta atletas, técnicos e organizações do futebol feminino. Transformando carreiras e elevando o esporte a um novo patamar.
            </p>
            <button 
              onClick={() => navigate('/campeonato')}
              className="px-8 py-3 w-fit text-lg font-bold rounded-xl cursor-pointer text-white bg-gradient-to-r from-purple-500 to-violet-500 shadow-lg hover:scale-105 transition-transform duration-300">
              Comece Agora →
            </button>
        
            <div id="Pesquisa" className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8 w-full">
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-3xl md:text-4xl text-purple-500 font-bold">1.2K+</h1>
                <p className="text-sm md:text-base text-black font-semibold">Atletas Profissionais</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-3xl md:text-4xl text-purple-500 font-bold">150+</h1>
                <p className="text-sm md:text-base text-black font-semibold">Clubes Parceiros</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-3xl md:text-4xl text-purple-500 font-bold">50+</h1>
                <p className="text-sm md:text-base text-black font-semibold">Competições</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Próximos Jogos */}
        {/* Removidas as classes de padding esquerdo para compensar o SideNav */}
        <section id="jogos" className="bg-gradient-to-bl from-purple-100 via-white to-purple-50 py-16 md:py-24">
          <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row gap-12 md:gap-8 items-center md:items-start'> 
              
              {/* Coluna de Título e Promoção */}
              <div className='w-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-left'>
                <div>
                  <h2 className="text-4xl md:text-5xl text-purple-600 uppercase font-black">
                    Próximos Jogos
                  </h2>
                </div>
                <p className='text-purple-600 text-lg md:text-2xl mt-2'>
                  Acompanhe e conheça o nosso campeonato
                </p>
                <a href='/chaveamento' className="px-8 py-3 w-fit text-lg font-bold rounded-xl cursor-pointer text-white bg-gradient-to-r from-purple-500 to-violet-500 shadow-lg hover:scale-105 transition-transform duration-300">
                  Ver jogos
                </a>
              </div>
            
              {/* Coluna da Lista de Jogos */}
              <div className="w-full md:w-3/5 flex flex-col gap-6 p-4">
                {proximosJogos.map((jogo) => (
                  <div key={jogo.id} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-purple-200 hover:shadow-2xl transition-shadow duration-300 transform hover:translate-y-[-2px]">
                    <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                      <span className="text-xl font-extrabold text-gray-800 flex-1 text-left truncate">{jogo.timeA}</span>
                      <span className="text-xl font-bold text-purple-500 mx-4">vs</span>
                      <span className="text-xl font-extrabold text-gray-800 flex-1 text-right truncate">{jogo.timeB}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
                      <p className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span className="font-semibold text-purple-600">Data:</span> {jogo.data}
                      </p>
                      <p className="flex items-center justify-end gap-2 text-right">
                        <span className="font-semibold text-purple-600">Horário:</span> {jogo.horario}
                        <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </p>
                      <p className="col-span-2 text-center mt-2 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span className="font-semibold text-purple-600">Local:</span> {jogo.local}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Seção de Formulário */}
        {/* Removidas as classes de padding esquerdo para compensar o SideNav */}
        <section id='forms'>
          <FormContact />
        </section>
      </div>
    </>
  );
}

// O componente principal exportado deve ser 'App' no ambiente de arquivo único
export default function App() {
  // Configura um token mock para permitir a renderização do conteúdo principal
  useEffect(() => {
      if (!localStorage.getItem('authToken')) {
          localStorage.setItem('authToken', 'mock-token-for-preview');
      }
  }, []);
  
  return <HomeLogada />;
}