import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart2, Users, Trophy, DollarSign, ArrowRight, ArrowLeft } from 'lucide-react';

// Dados de simulação para o gráfico
const chartData = [
    { label: 'Mar', value: 70, color: 'purple' }, // Azul mais escuro
    { label: 'Abr', value: 85, color: 'purple' },
    { label: 'Mai', value: 92, color: 'purple' },
    { label: 'Jun', value: 76, color: 'purple' }, // Verde esmeralda
    { label: 'Jul', value: 95, color: 'purple' }, // Rosa forte
    { label: 'Ago', value: 98, color: 'purple' }, // Azul-petróleo
];
const TARGET_GOAL = 90; // Meta de desempenho

// Componente: Gráfico de Performance Simples (Feito com Tailwind/JSX)
const PerformanceChart = () => (
    <div className="w-full h-full p-4 flex flex-col justify-end items-center space-y-2">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Evolução de Desempenho (%)</h3>

        <div className="relative flex items-end justify-around w-full h-48 border-b-2 border-l-2 border-gray-200 pt-2">

            {/* Linha da Meta (Target Goal) */}
            <div
                className="absolute w-full border-t border-dashed border-red-500 transition-all duration-500"
                style={{ bottom: `${TARGET_GOAL}%` }} // Posiciona a linha na altura da meta (ex: 90%)
            >
                <span className="absolute -left-10 -mt-2 text-xs font-semibold text-red-500 bg-white px-1 rounded">META ({TARGET_GOAL}%)</span>
            </div>

            {chartData.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center justify-end h-full mx-1 group">
                    {/* Barra */}
                    <div
                        // Corrigido: Usando cores mais escuras e garantindo contraste
                        className={`w-6 sm:w-8 rounded-t-lg bg-gradient-to-t from-${item.color}-500 to-${item.color}-700 transition-all duration-500 ease-out shadow-md`}
                        style={{ height: `${item.value}%` }}
                    >
                        {/* Tooltip de valor */}
                        <span className="absolute -top-6 opacity-0 group-hover:opacity-100 p-1 text-[10px] font-semibold bg-gray-800 text-white rounded-md transition-opacity duration-300 transform -translate-x-1/2 left-1/2">
                            {item.value}%
                        </span>
                    </div>
                    {/* Rótulo */}
                    <span className="mt-2 text-xs font-medium text-gray-600">{item.label}</span>
                </div>
            ))}
        </div>
    </div>
);


// Componente Card de Métrica
const StatCard = ({ icon: Icon, title, value, color }) => (
    <div className={`bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500 transition duration-300 hover:shadow-xl`}>
        <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-500 uppercase">{title}</h3>
            <Icon className={`w-6 h-6 text-purple-500`} />
        </div>
        <div className="mt-4">
            <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
    </div>
);

// Componente Card de Ação Rápida
const ActionCard = ({ icon: Icon, title, href, color }) => (
    <a href={href} className={`block bg-white p-6 rounded-xl shadow-md border-b-4 border-purple-400 transition duration-300 hover:bg-gray-50`}>
        <div className="flex items-center space-x-4">
            <Icon className={`w-8 h-8 text-purple-600`} />
            <span className="text-lg font-semibold text-gray-800">{title}</span>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400 mt-3 ml-auto" />
    </a>
);


// AJUSTE CRUCIAL: Retornando para a sintaxe FUNCTION (igual ao Regulamento)
function Dashboard() {
    const navigate = useNavigate();
    useEffect(() => {
        // Lógica de autenticação removida para torná-lo público.
    }, [navigate]);


    // Dados simulados para o dashboard
    const statsData = [
        { icon: Users, title: "Total de Jogadoras", value: "1,245", color: "purple" },
        { icon: Trophy, title: "Próximos Jogos", value: "3", color: "purple" },
        { icon: BarChart2, title: "Performance Média", value: "8.7 / 10", color: "green" },
        { icon: DollarSign, title: "Bolsa Atleta", value: "R$ 500,00", color: "yellow" },
    ];

    const quickActions = [
        { icon: Trophy, title: "Ver Chaveamento", href: "/chaveamento", color: "purple" },
        { icon: Users, title: "Editar Perfil", href: "/perfil", color: "blue" },
    ];


    return (
        <div className="min-h-screen bg-gray-50">
            {/* HEADER SIMPLES INTEGRADO (Para garantir a renderização autônoma) */}
            <div className="bg-purple-800 text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-4">
                        <a
                            href="/campeonato"
                            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </a>
                        <h1 className="text-2xl font-black">DASHBOARD PÚBLICO</h1>
                    </div>
                </div>
            </div>
            {/* FIM DO HEADER SIMPLES */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <header className="mb-10">
                    <h1 className="text-4xl font-extrabold text-purple-700 tracking-tight">
                        Painel Público de Estatísticas
                    </h1>
                    <p className="mt-1 text-lg text-gray-600">
                        Visualize as métricas gerais do campeonato e as ações rápidas.
                    </p>
                </header>

                {/* Seção de Estatísticas (Métricas Principais) */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    {statsData.map((stat, index) => (
                        <StatCard
                            key={index}
                            icon={stat.icon}
                            title={stat.title}
                            value={stat.value}
                            color={stat.color}
                        />
                    ))}
                </div>

                {/* Seção de Ações Rápidas */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Ações Rápidas</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-12">
                    {quickActions.map((action, index) => (
                        <ActionCard
                            key={index}
                            icon={action.icon}
                            title={action.title}
                            href={action.href}
                            color={action.color}
                        />
                    ))}
                </div>

                {/* Seção de Visualização de Próximos Eventos/Gráficos */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Gráfico de Evolução</h2>
                        <div className="h-64 flex items-center justify-center text-gray-400 border border-dashed rounded-lg">
                            {/* INCLUINDO O GRÁFICO AQUI */}
                            <PerformanceChart />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Agenda da Semana</h2>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center text-gray-700 border-b pb-2">
                                <span>Treino Tático</span>
                                <span className="text-sm font-medium text-purple-600">Seg, 18:00</span>
                            </li>
                            <li className="flex justify-between items-center text-gray-700 border-b pb-2">
                                <span>Fisioterapia</span>
                                <span className="text-sm font-medium text-purple-600">Ter, 14:00</span>
                            </li>
                            <li className="flex justify-between items-center text-gray-700">
                                <span>Jogo Contra Time A</span>
                                <span className="text-sm font-medium text-purple-600">Sáb, 16:00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;