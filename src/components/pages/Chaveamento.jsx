import React from 'react';

const ChaveamentoCompleto = () => {
  // Lista de times (embaralhada para simular sorteio)
  const teams = [
    'Time A', 'Time B', 'Time C', 'Time D', 'Time E', 'Time F',
    'Time G', 'Time H', 'Time I', 'Time J', 'Time K', 'Time L',
  ];

  // Lógica de embaralhamento Fisher-Yates (mantida)
  for (let i = teams.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [teams[i], teams[j]] = [teams[j], teams[i]];
  }

  // Componente para a caixa de partida (MatchBox)
  const MatchBox = ({ team1, team2, isSpecial = false, specialText = null }) => (
    <div className={`
      ${isSpecial
        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg border-2 border-purple-400'
        : 'bg-white border-2 border-purple-200 text-gray-800 hover:border-purple-300 transition-colors'
      } 
      rounded-md p-0.5 text-center flex flex-col justify-center items-center 
      w-20 min-h-[40px] md:w-40 md:min-h-[60px] md:p-2 shadow-md hover:shadow-lg transition-shadow duration-200
    `}>
      {specialText ? (
        <>
          <span className="text-[10px] md:text-lg font-bold mb-0.5">{specialText}</span>
          <span className="text-[9px] md:text-sm opacity-90">{team1} vs {team2}</span>
          <span className="text-[7px] md:text-xs opacity-75 mt-0.5">19/07 - 21:00, Maracanã</span>
        </>
      ) : (
        <>
          <span className="font-semibold text-[9px] md:text-sm mb-0.5 truncate w-full">{team1}</span>
          <span className="text-[8px] text-purple-600 font-medium">VS</span>
          <span className="font-semibold text-[9px] md:text-sm mt-0.5 truncate w-full">{team2}</span>
        </>
      )}
    </div>
  );

  // Componente para a rodada (Round)
  const Round = ({ title, children, spaceY, isFinal = false }) => (
    <div className="flex flex-col items-center flex-shrink-0 w-24 md:w-auto md:flex-1">
      <div className={`px-1 py-0.5 rounded-full text-[10px] md:text-md font-semibold mb-4 md:mb-6 shadow-lg 
        ${isFinal
          ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white'
          : 'bg-purple-600 text-white'
        }`}>
        {title}
      </div>
      <div className={`flex flex-col justify-center flex-1 w-full space-y-3 md:space-y-${spaceY}`}>
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-8 font-sans">

      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center mb-6 px-4">
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
            Chaveamento do Campeonato
          </h1>
          <p className="text-xs md:text-lg text-gray-600 max-w-2xl mx-auto">
            Acompanhe a jornada dos 12 times até a grande final!
          </p>
        </div>

        {/* Container principal do chaveamento (Caixa Branca) */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl py-4 px-4 overflow-x-auto md:p-6 border border-purple-100">

          {/* Container interno do Flexbox */}
          <div className="flex justify-center md:justify-between items-center min-h-[500px] gap-1 md:gap-6 min-w-[700px] md:min-w-0">

            {/* Rodadas */}
            <Round title="Oitavas de Final" spaceY={4}>
              <MatchBox team1={teams[0]} team2={teams[1]} />
              <MatchBox team1={teams[2]} team2={teams[3]} />
              <MatchBox team1={teams[4]} team2={teams[5]} />
              <MatchBox team1={teams[6]} team2={teams[7]} />
              <MatchBox team1={teams[8]} team2={teams[9]} />
              <MatchBox team1={teams[10]} team2={teams[11]} />
            </Round>
            <Round title="Quartas de Final" spaceY={12}>
              <MatchBox team1="Vencedor 1" team2="Vencedor 2" />
              <MatchBox team1="Vencedor 3" team2="Vencedor 4" />
              <MatchBox team1="Vencedor 5" team2="Vencedor 6" />
            </Round>
            <Round title="Semifinal" spaceY={24}>
              <MatchBox team1="Vencedor Quartas 1" team2="Vencedor Quartas 2" />
              <MatchBox team1="Vencedor Quartas 3" team2="Classificado Direto" />
            </Round>
            <Round title="Grande Final" isFinal={true} spaceY={0}>
              <MatchBox
                team1="Vencedor Semi 1"
                team2="Vencedor Semi 2"
                isSpecial={true}
                specialText="🏆 FINAL"
              />
            </Round>
          </div>

          {/* SVG para as linhas de conexão (Oculto em mobile) */}
          <svg
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M 22% 21.5% L 27% 21.5% L 27% 31% L 32% 31%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 22% 31.5% L 27% 31.5% L 27% 31% L 32% 31%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 22% 41.5% L 27% 41.5% L 27% 49% L 32% 49%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 22% 51.5% L 27% 51.5% L 27% 49% L 32% 49%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 22% 61.5% L 27% 61.5% L 27% 68% L 32% 68%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 22% 71.5% L 27% 71.5% L 27% 68% L 32% 68%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 47% 31% L 52% 31% L 52% 40.5% L 57% 40.5%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 47% 49% L 52% 49% L 52% 40.5% L 57% 40.5%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 47% 68% L 52% 68% L 52% 70.5% L 57% 70.5%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 47% 85.5% L 52% 85.5% L 52% 70.5% L 57% 70.5%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 72% 40.5% L 77% 40.5% L 77% 50% L 82% 50%" stroke="#8B5CF6" strokeWidth="3" fill="none" filter="url(#glow)" />
            <path d="M 72% 70.5% L 77% 70.5% L 77% 50% L 82% 50%" stroke="#8B5CF6" strokeWidth="3" fill="none" filter="url(#glow)" />
          </svg>
        </div>

        {/* Rodapé informativo */}
        <div className="mt-6 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-1 bg-white/60 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-purple-100">
            <div className="flex items-center space-x-0.5">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span className="text-[10px] text-gray-600">Regulares</span>
            </div>
            <div className="flex items-center space-x-0.5">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full"></div>
              <span className="text-[10px] text-gray-600">Final</span>
            </div>
          </div>
        </div>

        {/* Informações do torneio e DICA para rolagem */}
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>12 Times • 6 Oitavas • 3 Quartas • 2 Semifinais • 1 Final</p>
          <p className="md:hidden mt-2 text-purple-600 font-semibold text-[10px]">
            &lt; Role para ver todas as rodadas &gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChaveamentoCompleto;