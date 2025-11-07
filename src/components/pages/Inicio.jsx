// Componentes de Página: Inicio.jsx
import React from 'react';
import ChaveamentoTeste from "../ui/ChaveamentoTeste";
import FormContact from "../ui/FormContact";
import ChaveamentoCompleto from "./Chaveamento";
import video from "/videoInicio.mp4";

function Inicio() {
    return (
        <div className="overflow-x-hidden">
            {/* Seção Hero */}
            <section id="Hero" className="relative flex flex-col justify-center items-center p-8 md:p-16 lg:px-24 xl:px-40 min-h-screen">
                {/* Contêiner do Vídeo de Fundo */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        className="w-full h-full object-cover"
                        src={video}
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>

                {/* Camada de Escurecimento (Overlay) */}
                <div className="absolute inset-0 z-0 bg-black opacity-50"></div>

                {/* Conteúdo por cima do vídeo e do overlay */}
                <div className="relative z-10 flex flex-col items-center text-center gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        Passa a <span className="text-purple-500">Bola</span>
                    </h1>
                    <p className="text-base md:text-lg lg:text-2xl text-white">
                        A plataforma profissional que conecta atletas, técnicos e organizações do futebol feminino. Transformando carreiras e elevando o esporte a um novo patamar.
                    </p>
                    <button className="px-8 py-3 w-fit text-lg font-bold rounded-full text-white bg-gradient-to-r from-purple-500 to-violet-500 shadow-lg hover:scale-105 transition-transform duration-300">
                        Comece Agora →
                    </button>

                    <div id="Pesquisa" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="text-3xl md:text-4xl text-purple-500 font-bold">1.2K+</h1>
                            <p className="text-sm md:text-base text-white font-semibold">Atletas Profissionais</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="text-3xl md:text-4xl text-purple-500 font-bold">150+</h1>
                            <p className="text-sm md:text-base text-white font-semibold">Clubes Parceiros</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="text-3xl md:text-4xl text-purple-500 font-bold">50+</h1>
                            <p className="text-sm md:text-base text-white font-semibold">Competições</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Resumo - GRID */}
            <section id="resumo" className="bg-purple-500 py-10 px-4 md:px-8">
                {/* CONTAINER GRID PRINCIPAL */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Esquerda do Resumo (Ocupa 2/3 no desktop) */}
                    <div id="esquerdaResumo" className="flex flex-col gap-8 md:gap-16 lg:col-span-2">
                        {/* Título */}
                        <div className="py-6 pl-8 pr-16 bg-amber-50 rounded-r-xl w-fit">
                            <h1 className="text-purple-500 uppercase font-bold text-2xl md:text-4xl">Resumo</h1>
                        </div>

                        {/* Conteúdo de Texto e Imagem */}
                        <div className="bg-amber-50 rounded-2xl flex flex-col md:flex-row p-6 items-center gap-6">
                            <img
                                src="/resumoImg.png"
                                alt="imagemExemplo"
                                className="rounded-xl w-full md:w-1/2 lg:w-1/3 h-auto object-cover"
                            />
                            <p className="text-zinc-700 text-sm md:text-base">
                                A iniciativa "Passa a Bola" nasceu da paixão de Ale Xavier e Luana Maluf pelo futebol e da necessidade de criar um espaço onde as mulheres pudessem ser protagonistas. Antes mesmo do sucesso no YouTube, Luana já organizava encontros semanais em São Paulo que reuniam cerca de 300 meninas para jogar bola, um projeto que já carregava o nome Passa a Bola.

                                Em 2021, Luana uniu-se a Ale, que vinha de uma experiência no canal Desimpedidos e sentia falta de um conteúdo esportivo com um olhar feminino, para transformar o projeto em algo maior. Juntas, elas criaram o canal Passa a Bola, que rapidamente se tornou o maior canal sobre futebol produzido por mulheres no Brasil. O objetivo da dupla vai além das quatro linhas: elas buscam gerar debates importantes sobre o universo do futebol, abrir cada vez mais portas para meninas e mulheres no esporte e construir uma comunidade forte e engajada.                        </p>
                        </div>
                    </div>

                    {/* Direita do Resumo - Copa (Ocupa 1/3 no desktop) */}
                    <div id="direitaResumo" className="lg:col-span-1">
                        <div id="copa" className="flex flex-col bg-amber-50 justify-center items-center rounded-2xl p-6">
                            <div className="flex flex-col items-center gap-4 text-center">
                                <h1 className="text-purple-500 text-2xl md:text-3xl font-bold uppercase">Copa Passa a Bola</h1>
                                <img
                                    src="/copaTaca.png"
                                    alt="foto"
                                    className="w-full h-auto max-w-xs rounded-xl"
                                />
                                <p className="text-zinc-700 text-sm md:text-base">
                                    A Copa Passa a Bola é um dos projetos mais importantes criados por Ale Xavier e Luana Maluf, sendo a materialização do propósito de fortalecer o futebol feminino na prática. O torneio de futebol society foi idealizado para dar a mais meninas e mulheres a oportunidade de competir, se divertir e, principalmente, de encontrar um ambiente seguro e acolhedor para jogar.

                                    A competição busca resolver uma dificuldade comum para as mulheres que amam o esporte: a falta de campeonatos e a dificuldade de conectar times e jogadoras. A Copa Passa a Bola não é apenas sobre o jogo, mas sobre celebrar o talento feminino, promover novas amizades e inspirar uma nova geração de atletas, mostrando que toda mulher que sonha em jogar futebol pode e deve ter seu espaço garantido.                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ChaveamentoCompleto />
            <FormContact />
        </div>
    );
}

export default Inicio;