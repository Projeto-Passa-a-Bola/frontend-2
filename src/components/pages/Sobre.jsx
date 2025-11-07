// src/pages/Sobre.jsx

import { useState, useEffect } from "react";
import { Heart, Users, Trophy, Target, Star } from "lucide-react";
import SideNav from "../ui/SideNav"; // Verifique se este caminho está correto para sua estrutura

// Declaração ÚNICA do componente Sobre
const Sobre = () => {
  // Definição das seções para a navegação lateral
  const pageSections = [
    { id: "hero", label: "Início" },
    { id: "crescimento", label: "Crescimento" },
    { id: "valorizacao", label: "Valorização" },
    { id: "historia", label: "Nossa História" },
    { id: "valores", "label": "Valores" },
    { id: "jornada", label: "Jornada" },
    { id: "contato", label: "Contato" },
  ];

  const stats = [
    { number: "5+", label: "Anos Promovendo o Futebol Feminino" },
    { number: "200+", label: "Jogadoras Apoiadas" },
    { number: "4+", label: "Eventos Realizados" },
    { number: "250K+", label: "Seguidoras Inspiradas" },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-purple-500" />,
      title: "Paixão",
      description: "Vivemos e respiramos futebol feminino, celebrando cada conquista.",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Sororidade",
      description: "Acreditamos na força da união entre mulheres para transformar o esporte.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-purple-600" />,
      title: "Excelência",
      description: "Buscamos sempre elevar o padrão do futebol feminino brasileiro.",
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Propósito",
      description: "Nossa missão é dar visibilidade e oportunidades para as mulheres no futebol.",
    },
  ];

  const timeline = [
    {
      year: "2019",
      event: "Nascimento do Passa Bola",
      description: "Iniciamos nossa jornada de apoio ao futebol feminino.",
    },
    { year: "2020", event: "Primeira Copa Passa a Bola", description: "Realizamos nosso primeiro torneio oficial." },
    { year: "2022", event: "Expansão Nacional", description: "Levamos nossos eventos para todo o Brasil." },
    {
      year: "2024",
      event: "Referência no Futebol Feminino",
      description: "Reconhecidas como maior plataforma de apoio às atletas.",
    },
  ];

  // O return com todo o JSX da página
  return (
    // CORREÇÃO 1: Adicionar overflow-x-hidden ao container principal para cortar vazamentos laterais.
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 overflow-x-hidden">
      <SideNav sections={pageSections} />
       <section id="hero" className="relative flex items-center justify-center min-h-[75vh] bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden py-12">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/soccer-ball-pattern.svg')",
            backgroundSize: "300px 300px",
          }}
        ></div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <div className="mb-6 flex justify-center animate-fade-in-down">
            <div className="p-2 bg-white/50 rounded-3xl shadow-2xl shadow-purple-200/50 backdrop-blur-sm">
              <img
                src="/logo.png" // Caminho ajustado para a pasta public
                alt="Logo Passa Bola"
                className="rounded-2xl w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent mb-4 animate-fade-in-up [animation-delay:0.2s]">
            Passa Bola
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.4s] px-2">
            Celebramos, apoiamos e promovemos o futebol feminino brasileiro com{" "}
            <span className="font-semibold text-purple-600">paixão</span>,{" "}
            <span className="font-semibold text-purple-600">dedicação</span> e muito{" "}
            <span className="font-semibold text-purple-600">amor</span> pelo esporte que une corações.
          </p>
        </div>
      </section>

     
      {/* Seção Crescimento */}
      <section id="crescimento" className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 md:mb-6">Crescimento Exponencial</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-lg sm:text-xl">
                <p>
                  O futebol feminino brasileiro vive seu melhor momento! Nos últimos 5 anos, houve um crescimento de
                  <strong className="text-purple-600"> 340% na audiência</strong> e
                  <strong className="text-purple-600"> 280% no número de atletas</strong>.
                </p>
                <p>
                  Com mais de <strong className="text-purple-600">200 mil jogadoras</strong> e investimentos que ultrapassam <strong className="text-purple-600">R$ 50 milhões</strong> anuais, o reconhecimento é uma realidade.
                </p>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img src="/loginImg.png" className="rounded-2xl shadow-2xl w-full max-h-[400px] md:max-h-[500px] object-cover" alt="Jogadoras em campo" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção Valorização */}
      <section id="valorizacao" className="py-16 md:py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-last lg:order-first mt-8 lg:mt-0"> 
              <img src="/imgCopa.png" className="rounded-2xl shadow-2xl w-full max-h-[400px] md:max-h-[500px] object-cover" alt="Troféu da Copa Passa a Bola" />
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 bg-purple-600 text-white p-2 sm:p-3 md:p-4 rounded-xl shadow-lg border-2 border-white max-w-[150px] sm:max-w-none text-right">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 mb-1 ml-auto" />
                <div className="font-bold text-xs sm:text-sm leading-tight">Copa Passa a Bola</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 md:mb-6">Valorização Merecida</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-lg sm:text-xl">
                <p>
                  A Copa do Mundo Feminina de 2023 foi assistida por mais de <strong className="text-purple-600">2 bilhões de pessoas</strong>, provando o interesse global.
                </p>
                <p>
                  No Brasil, os salários aumentaram <strong className="text-purple-600">150%</strong> nos últimos 3 anos, e grandes marcas reconhecem o potencial comercial e social do esporte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="historia" className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 md:mb-12">Nossa História</h2>
              <div className="space-y-4 sm:space-y-8 text-gray-700 leading-relaxed text-lg sm:text-xl">
                <p>
                  O Passa Bola nasceu do sonho de dar mais visibilidade ao futebol feminino. Começamos pequenas, mas com um coração gigante.
                </p>
                <p>
                  Ao longo dos anos, crescemos junto com nossas atletas, criando uma comunidade onde mulheres se apoiam e se inspiram mutuamente.
                </p>
                <p>
                  Hoje, somos uma família que acredita no poder transformador do esporte e no potencial infinito das nossas jogadoras.
                </p>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img src="/imgCopaDoMundo.png" alt="Torcida apaixonada no estádio" className="rounded-2xl shadow-2xl w-full max-h-[400px] md:max-h-[500px] object-cover" />
               <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 bg-purple-600 text-white p-2 sm:p-3 md:p-4 rounded-xl shadow-lg border-2 border-white max-w-[150px] sm:max-w-none text-right">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 mb-1 ml-auto" />
                <div className="font-bold text-xs sm:text-sm leading-tight">Reconhecimento Nacional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="valores" className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">Nossos Valores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-purple-100 hover:border-purple-200">
                <div className="mb-3 sm:mb-4 flex justify-center">{value.icon}</div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jornada */}
      <section id="jornada" className="py-16 md:py-20 px-4"> {/* Removi bg-purple-50/50 do section, caso causasse vazamento */}
        <div className="container mx-auto bg-purple-50/50"> {/* Movi o background para o container, se desejar */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">Nossa Jornada</h2>
          <div className="relative max-w-6xl mx-auto">
            {/* Linha vertical da timeline - Alinhada à esquerda por padrão, centralizada a partir de LG */}
            <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-1 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 h-full rounded-full"></div>
            {timeline.map((item, index) => (
              // Ajuste: O justify-start é o padrão. Para o layout de duas colunas a partir de LG, a alternância é mantida com ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}
              <div key={index} className={`relative flex items-center mb-12 sm:mb-16 w-full justify-start ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}>
                
                {/* Ponto na linha - Alinhado com a linha vertical. Centralizado apenas em LG */}
                <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center font-bold text-sm sm:text-lg shadow-xl border-4 border-white z-10">
                  {item.year}
                </div>
                
                {/* Conteúdo do Evento */}
                {/* CORREÇÃO 3: ml-24 é a margem fixa em mobile/tablet. A alternância só entra em LG. */}
                <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl w-full max-w-full sm:max-w-md ml-24 ${index % 2 === 0 ? "lg:ml-0 lg:mr-auto" : "lg:mr-0 lg:ml-auto"}`}>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full mr-2 sm:mr-3"></div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800">{item.event}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-16 md:py-20 px-4 bg-purple-600 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">Faça Parte da Nossa História</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty">
            Junte-se a nós nessa jornada de transformação. Juntas, somos mais fortes!
          </p>
          <button className="bg-white hover:bg-purple-700 hover:text-white text-black cursor-pointer font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-3xl transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl">
            Entre em Contato
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sobre;