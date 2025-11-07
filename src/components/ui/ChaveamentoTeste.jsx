import React from 'react';

const ChaveamentoTeste = () => {
  const teams = [
    'Time A', 'Time B', 'Time C', 'Time D', 'Time E', 'Time F',
    'Time G', 'Time H', 'Time I', 'Time J', 'Time K', 'Time L'
  ];

  // Componente para renderizar uma partida
  const MatchBox = ({ team1, team2, isSpecial = false, specialText = null }) => (
    <div className={`
      ${isSpecial
        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg border-2 border-purple-400'
        : 'bg-white border-2 border-purple-200 text-gray-800 hover:border-purple-300 transition-colors'
      } 
      rounded-xl p-2 text-center flex flex-col justify-center items-center 
      min-h-[60px] w-40 shadow-md hover:shadow-lg transition-shadow duration-200
    `}>
      {specialText ? (
        <>
          <span className="text-lg font-bold mb-1">{specialText}</span>
          <span className="text-sm opacity-90">{team1} vs {team2}</span>
          <span className="text-xs opacity-75 mt-1">19/07 - 21:00, Maracanã</span>
        </>
      ) : (
        <>
          <span className="font-semibold text-sm mb-1">{team1}</span>
          <span className="text-xs text-purple-600 font-medium">VS</span>
          <span className="font-semibold text-sm mt-1">{team2}</span>
        </>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
            Chaveamento do Campeonato
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acompanhe a jornada dos 12 times até a grande final!
          </p>
        </div>

        {/* Container principal do chaveamento */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-purple-100">
          <div className="flex justify-between items-center min-h-[500px] gap-6">

            {/* Oitavas de Final - 6 partidas (12 times) */}
            <div className="flex flex-col items-center flex-1">
              <div className="bg-purple-600 text-white px-5 py-2 rounded-full text-md font-semibold mb-6 shadow-lg">
                Oitavas de Final
              </div>
              <div className="flex flex-col justify-center space-y-4 flex-1 w-full">
                <MatchBox team1={teams[0]} team2={teams[1]} />
                <MatchBox team1={teams[2]} team2={teams[3]} />
                <MatchBox team1={teams[4]} team2={teams[5]} />
                <MatchBox team1={teams[6]} team2={teams[7]} />
                <MatchBox team1={teams[8]} team2={teams[9]} />
                <MatchBox team1={teams[10]} team2={teams[11]} />
              </div>
            </div>

            {/* Quartas de Final - 3 partidas (6 vencedores) */}
            <div className="flex flex-col items-center flex-1">
              <div className="bg-purple-600 text-white px-5 py-2 rounded-full text-md font-semibold mb-6 shadow-lg">
                Quartas de Final
              </div>
              <div className="flex flex-col justify-center space-y-12 flex-1 w-full">
                <MatchBox team1="Vencedor 1" team2="Vencedor 2" />
                <MatchBox team1="Vencedor 3" team2="Vencedor 4" />
                <MatchBox team1="Vencedor 5" team2="Vencedor 6" />
              </div>
            </div>

            {/* Semifinal - 2 partidas */}
            <div className="flex flex-col items-center flex-1">
              <div className="bg-purple-600 text-white px-5 py-2 rounded-full text-md font-semibold mb-6 shadow-lg">
                Semifinal
              </div>
              <div className="flex flex-col justify-center space-y-24 flex-1 w-full">
                <MatchBox team1="Vencedor Quartas 1" team2="Vencedor Quartas 2" />
                <MatchBox team1="Vencedor Quartas 3" team2="Classificado Direto" />
              </div>
            </div>

            {/* Final */}
            <div className="flex flex-col items-center flex-1">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-2 rounded-full text-md font-semibold mb-6 shadow-lg">
                Grande Final
              </div>
              <div className="flex flex-col justify-center flex-1 w-full">
                <MatchBox
                  team1="Vencedor Semi 1"
                  team2="Vencedor Semi 2"
                  isSpecial={true}
                  specialText="🏆 FINAL"
                />
              </div>
            </div>
          </div>

          {/* SVG para as linhas de conexão - Coordenadas ajustadas */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Conexões das Oitavas para Quartas */}
            <path d="M 22% 21.5% L 27% 21.5% L 27% 31% L 32% 31%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 22% 31.5% L 27% 31.5% L 27% 31% L 32% 31%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 22% 41.5% L 27% 41.5% L 27% 49% L 32% 49%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 22% 51.5% L 27% 51.5% L 27% 49% L 32% 49%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 22% 61.5% L 27% 61.5% L 27% 68% L 32% 68%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 22% 71.5% L 27% 71.5% L 27% 68% L 32% 68%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />

            {/* Conexões das Quartas para Semifinal */}
            <path d="M 47% 31% L 52% 31% L 52% 40.5% L 57% 40.5%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 47% 49% L 52% 49% L 52% 40.5% L 57% 40.5%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 47% 68% L 52% 68% L 52% 70.5% L 57% 70.5%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 47% 85.5% L 52% 85.5% L 52% 70.5% L 57% 70.5%" stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" />

            {/* Conexões da Semifinal para Final */}
            <path d="M 72% 40.5% L 77% 40.5% L 77% 50% L 82% 50%" stroke="#8B5CF6" strokeWidth="3" fill="none" filter="url(#glow)" />
            <path d="M 72% 70.5% L 77% 70.5% L 77% 50% L 82% 50%" stroke="#8B5CF6" strokeWidth="3" fill="none" filter="url(#glow)" />
          </svg>
        </div>

        {/* Rodapé informativo */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-purple-100">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Partidas Regulares</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full"></div>
              <span className="text-sm text-gray-600">Grande Final</span>
            </div>
          </div>
        </div>

        {/* Informações do torneio */}
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>12 Times • 6 Oitavas • 3 Quartas • 2 Semifinais • 1 Final</p>
        </div>
      </div>
    </div>
  );
};

export default ChaveamentoTeste;