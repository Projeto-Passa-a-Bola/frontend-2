import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, User, FileText, Trophy, BarChart3, Calendar } from 'lucide-react';
import MapComponent from './MapComponent'; // Importação do novo componente de mapa

// Usa imagem do diretório public
const heroPlayer = '/chute.png';

function StatItem({ number, label, suffix = '', delay = 0 }) {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    setTimeout(() => {
                        const target = parseInt(String(number).replace(/[^\d]/g, ''));
                        const steps = 50;
                        const increment = target / steps;
                        let current = 0;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                setCurrentNumber(target);
                                clearInterval(timer);
                            } else {
                                setCurrentNumber(Math.floor(current));
                            }
                        }, 50);
                    }, delay);
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }
        return () => observer.disconnect();
    }, [number, isVisible, delay]);

    return (
        <div
            ref={elementRef}
            className="text-center p-8 glass-effect rounded-2xl border border-purple-100/20 card-hover"
        >
            <span className="block text-5xl font-black gradient-text mb-2">
                {currentNumber}{suffix}
            </span>
            <div className="text-gray-600 text-lg font-medium">{label}</div>
        </div>
    );
}

function InfoCard({ icon, title, description, details, delay = 0 }) {
    return (
        <div
            className="glass-effect rounded-2xl p-6 border border-purple-200/20"
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="text-3xl mb-3">{icon}</div>
            <h3 className="text-xl font-bold mb-2 text-purple-700">{title}</h3>
            <p className="text-gray-600 mb-1">{description}</p>
            <p className="text-gray-500 text-sm">{details}</p>
        </div>
    );
}

function Campeonato() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    const downloadRegulamento = () => {
        try {
            // Método 1: Download direto
            const link = document.createElement('a');
            link.href = '/regulamento-copa-passa-bola.pdf';
            link.download = 'Regulamento-Copa-Passa-a-Bola-2024.pdf';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            // Método 2: Fallback - abrir em nova aba
            console.log('Erro no download direto, abrindo em nova aba:', error);
            window.open('/regulamento-copa-passa-bola.pdf', '_blank');
        }
    };

    const menuItems = [
        { label: 'Início', href: '#inicio', icon: User },
        { label: 'Regulamento', href: '/regulamento', icon: FileText },
        { label: 'Jogos', href: 'Colocar rota de jogos', icon: Calendar },
        { label: 'Estatísticas', href: '#inscricoes', icon: BarChart3 },
        { label: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    ];

    return (
        <main className="relative">
            {/* Hamburger Menu Button */}
            <button
                onClick={toggleSidebar}
                // POSIÇÃO AJUSTADA: top-[85px]
                className="fixed top-[85px] left-4 z-[1000] p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors border border-purple-100/20"
            >
                {isSidebarOpen ? (
                    <X className="w-6 h-6 text-purple-600" />
                ) : (
                    <Menu className="w-6 h-6 text-purple-600" />
                )}
            </button>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[999] transition-opacity"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-[1000] transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="p-6 border-b border-purple-100/20">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-purple-600">⚽ COPA PASSA A BOLA</h2>
                        <button
                            onClick={toggleSidebar}
                            className="p-2 hover:bg-purple-50 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                </div>

                <nav className="p-6 space-y-4">
                    {menuItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={toggleSidebar}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                            >
                                <IconComponent className="w-5 h-5 text-gray-500 group-hover:text-purple-600" />
                                <span className="text-gray-700 group-hover:text-purple-600 font-medium">
                                    {item.label}
                                </span>
                            </a>
                        );
                    })}
                </nav>

                <div className="absolute bottom-6 left-6 right-6">
                    <a href="jogadora">
                        <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-bold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg">
                            Participar do Evento
                        </button>
                    </a>
                </div>
            </div>

            {/* Hero Section */}
            <section id="inicio" className="min-h-screen relative overflow-hidden">
                {/* Hero background gradient */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-3/5 opacity-80 z-0 bg-gradient-to-br from-purple-700 via-purple-600 to-blue-400"
                    style={{
                        clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    }}
                />

                <div className="container mx-auto px-6 pt-32 pb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                        {/* Hero Content */}
                        <div className="z-10 relative">
                            <h1 className="text-6xl lg:text-7xl font-black mb-4 leading-none uppercase tracking-tight">
                                COPA<br />
                                <span className="gradient-text">PASSA A BOLA</span>
                            </h1>

                            <h2 className="text-2xl lg:text-3xl font-bold text-purple-600 mb-6">
                                FUTEBOL FEMININO
                            </h2>

                            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                                O maior campeonato de futebol feminino da região. Uma competição que celebra o talento,
                                a paixão e a determinação das mulheres no esporte mais amado do Brasil.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-14">
                                <a href="/jogadora">
                                    <button className="px-8 py-3 w-fit text-lg font-bold rounded-xl cursor-pointer text-white bg-gradient-to-r from-purple-500 to-violet-500 shadow-lg hover:scale-105 transition-transform duration-300">
                                        Inscrever Equipe
                                    </button>
                                </a>
                                <a href="/regulamento">
                                    <button className="px-8 py-3 w-fit text-lg font-bold rounded-xl cursor-pointer text-white bg-gradient-to-r from-purple-500 to-violet-500 shadow-lg hover:scale-105 transition-transform duration-300">
                                        Ver Regulamento
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative z-10 flex justify-center items-center">
                            <div className="relative">
                                <img
                                    src={heroPlayer}
                                    alt="Jogadora Copa Passa A Bola"
                                    className="max-w-full h-auto animate-float"
                                    style={{
                                        filter: 'drop-shadow(0 20px 40px rgba(139, 92, 246, 0.2))',
                                        maxHeight: '600px',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <StatItem number="32" label="Equipes Participantes" delay={0} />
                        <StatItem number="50" label="Mil Reais em Premiação" suffix="k" delay={200} />
                        <StatItem number="4" label="Categorias" delay={400} />
                        <StatItem number="30" label="Dias de Competição" delay={600} />
                    </div>
                </div>
            </section>

            {/* Localização Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl lg:text-5xl font-black text-center mb-10 text-purple-700">
                        Localização do Evento
                    </h2>
                    <p className="text-center text-gray-700 mb-4">
                        Av. Engenheiro Roberto Zuccolo, 214 - Vila Leopoldina, São Paulo - SP, 05307-190
                    </p>
                    <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                        <MapComponent
                            position={[-23.5358, -46.7324]} // Coordenadas do endereço solicitado
                            zoom={17}
                            popupText="<b>Local do Campeonato!</b><br>Av. Engenheiro Roberto Zuccolo, 214"
                        />
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <section
                className="py-20 text-center text-white relative overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-blue-400"
            >
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 animate-pulse-slow" />
                    <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/20 rotate-45" />
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/20 animate-float" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">PRONTA PARA FAZER HISTÓRIA?</h2>

                    <p className="text-xl lg:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed">
                        Inscreva sua equipe agora e participe do maior campeonato de futebol feminino da região!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button className="bg-white text-purple-700 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl">
                            INSCREVER AGORA
                        </button>
                        <button
                            onClick={downloadRegulamento}
                            className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-700 transition-all duration-300"
                        >
                            BAIXAR REGULAMENTO
                        </button>
                    </div>

                    {/* Registration benefits */}
                    <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl mb-3">⚡</div>
                            <h3 className="font-bold text-lg mb-2">Inscrição Rápida</h3>
                            <p className="text-white/80">Processo simplificado online</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">🏅</div>
                            <h3 className="font-bold text-lg mb-2">Premiação Garantida</h3>
                            <p className="text-white/80">R$ 50.000 em prêmios</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">🎯</div>
                            <h3 className="font-bold text-lg mb-2">Experiência Única</h3>
                            <p className="text-white/80">Evento profissional completo</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Campeonato;