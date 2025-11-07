import { useState } from 'react';
import { 
  ArrowLeft, 
  FileText, 
  Trophy, 
  Users, 
  Calendar, 
  MapPin, 
  Clock, 
  Award,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Download
} from 'lucide-react';

function Regulamento() {
  const [activeSection, setActiveSection] = useState('geral');

  const downloadRegulamento = () => {
    const link = document.createElement('a');
    link.href = '/regulamento-copa-passa-bola.pdf';
    link.download = 'Regulamento-Copa-Passa-a-Bola-2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sections = [
    { id: 'geral', title: 'Informações Gerais', icon: FileText },
    { id: 'inscricoes', title: 'Inscrições', icon: Users },
    { id: 'categorias', title: 'Categorias', icon: Trophy },
    { id: 'jogos', title: 'Sistema de Jogos', icon: Calendar },
    { id: 'premiacao', title: 'Premiação', icon: Award },
    { id: 'regras', title: 'Regras e Penalidades', icon: Shield },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <a 
                href="/campeonato" 
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </a>
              <h1 className="text-4xl font-black">REGULAMENTO</h1>
            </div>
            <button
              onClick={downloadRegulamento}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Download className="w-5 h-5" />
              <span className="font-medium">Baixar PDF</span>
            </button>
          </div>
          <p className="text-xl text-purple-100">
            Copa Passa a Bola - Futebol Feminino 2024
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Índice</h3>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                          activeSection === section.id
                            ? 'bg-purple-100 text-purple-700 border-l-4 border-purple-600'
                            : 'hover:bg-gray-100 text-gray-600'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{section.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              
              {/* Informações Gerais */}
              <section id="geral" className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-purple-600" />
                  Informações Gerais
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                    <Calendar className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Período</p>
                      <p className="text-gray-600">15 de Março a 15 de Abril de 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Local</p>
                      <p className="text-gray-600">Complexo Esportivo Municipal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Equipes</p>
                      <p className="text-gray-600">Máximo 32 equipes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                    <Award className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Premiação</p>
                      <p className="text-gray-600">R$ 50.000 em prêmios</p>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Objetivo</h3>
                  <p className="text-gray-600 mb-4">
                    A Copa Passa a Bola tem como objetivo promover o futebol feminino, 
                    incentivando a prática esportiva e proporcionando uma competição 
                    saudável e profissional para atletas de todas as idades.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Organização</h3>
                  <p className="text-gray-600">
                    O campeonato é organizado pela Associação de Futebol Feminino 
                    em parceria com a Prefeitura Municipal e patrocinadores oficiais.
                  </p>
                </div>
              </section>

              {/* Inscrições */}
              <section id="inscricoes" className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-purple-600" />
                  Inscrições
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Período de Inscrições</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Início:</strong> 1º de Fevereiro de 2024
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Encerramento:</strong> 28 de Fevereiro de 2024
                    </p>
                    <p className="text-gray-600">
                      <strong>Taxa de Inscrição:</strong> R$ 150,00 por equipe
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Documentação Necessária</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Ficha de inscrição preenchida</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">RG e CPF de todas as atletas</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Atestado médico de aptidão física</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Comprovante de pagamento da taxa</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Foto 3x4 de cada atleta</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Importante</h4>
                        <p className="text-yellow-700">
                          As inscrições serão aceitas por ordem de chegada. 
                          Após o preenchimento das 32 vagas, será criada uma lista de espera.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Categorias */}
              <section id="categorias" className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-purple-600" />
                  Categorias
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-purple-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">Sub-15</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Nascidas em 2009 ou posterior</li>
                      <li>• Máximo 20 atletas por equipe</li>
                      <li>• Jogos de 40 minutos (2x20)</li>
                      <li>• Premiação: R$ 2.000</li>
                    </ul>
                  </div>

                  <div className="border border-purple-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">Sub-17</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Nascidas em 2007 ou posterior</li>
                      <li>• Máximo 22 atletas por equipe</li>
                      <li>• Jogos de 50 minutos (2x25)</li>
                      <li>• Premiação: R$ 3.000</li>
                    </ul>
                  </div>

                  <div className="border border-purple-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">Sub-20</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Nascidas em 2004 ou posterior</li>
                      <li>• Máximo 25 atletas por equipe</li>
                      <li>• Jogos de 60 minutos (2x30)</li>
                      <li>• Premiação: R$ 5.000</li>
                    </ul>
                  </div>

                  <div className="border border-purple-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">Adulto</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Sem limite de idade</li>
                      <li>• Máximo 30 atletas por equipe</li>
                      <li>• Jogos de 70 minutos (2x35)</li>
                      <li>• Premiação: R$ 10.000</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Sistema de Jogos */}
              <section id="jogos" className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-purple-600" />
                  Sistema de Jogos
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Fase de Grupos</h3>
                    <p className="text-gray-600 mb-4">
                      As equipes serão divididas em grupos de 4 equipes cada. 
                      Cada equipe jogará contra todas as outras do seu grupo.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Critérios de Classificação:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-gray-600">
                        <li>Maior número de pontos (3 por vitória, 1 por empate)</li>
                        <li>Maior saldo de gols</li>
                        <li>Maior número de gols marcados</li>
                        <li>Confronto direto</li>
                        <li>Sorteio</li>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Fase Eliminatória</h3>
                    <p className="text-gray-600 mb-4">
                      Os dois primeiros colocados de cada grupo avançam para as oitavas de final.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="bg-purple-100 rounded-lg p-3">
                        <div className="font-bold text-purple-700">Oitavas</div>
                        <div className="text-sm text-gray-600">16 equipes</div>
                      </div>
                      <div className="bg-purple-100 rounded-lg p-3">
                        <div className="font-bold text-purple-700">Quartas</div>
                        <div className="text-sm text-gray-600">8 equipes</div>
                      </div>
                      <div className="bg-purple-100 rounded-lg p-3">
                        <div className="font-bold text-purple-700">Semifinal</div>
                        <div className="text-sm text-gray-600">4 equipes</div>
                      </div>
                      <div className="bg-purple-100 rounded-lg p-3">
                        <div className="font-bold text-purple-700">Final</div>
                        <div className="text-sm text-gray-600">2 equipes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Premiação */}
              <section id="premiacao" className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-purple-600" />
                  Premiação
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">Por Categoria</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div>
                          <div className="font-bold text-yellow-800">1º Lugar</div>
                          <div className="text-sm text-yellow-600">Troféu + Medalhas</div>
                        </div>
                        <div className="text-2xl font-bold text-yellow-700">🥇</div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div>
                          <div className="font-bold text-gray-800">2º Lugar</div>
                          <div className="text-sm text-gray-600">Medalhas</div>
                        </div>
                        <div className="text-2xl font-bold text-gray-600">🥈</div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <div>
                          <div className="font-bold text-orange-800">3º Lugar</div>
                          <div className="text-sm text-orange-600">Medalhas</div>
                        </div>
                        <div className="text-2xl font-bold text-orange-600">🥉</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">Premiação em Dinheiro</h3>
                    
                    <div className="space-y-3">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="font-bold text-green-800 mb-1">Campeã Geral</div>
                        <div className="text-2xl font-bold text-green-700">R$ 15.000</div>
                        <div className="text-sm text-green-600">Maior pontuação entre todas as categorias</div>
                      </div>
                      
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="font-bold text-blue-800 mb-1">Artilheira Geral</div>
                        <div className="text-xl font-bold text-blue-700">R$ 2.000</div>
                        <div className="text-sm text-blue-600">Maior número de gols</div>
                      </div>
                      
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="font-bold text-purple-800 mb-1">Fair Play</div>
                        <div className="text-xl font-bold text-purple-700">R$ 1.000</div>
                        <div className="text-sm text-purple-600">Equipe com melhor comportamento</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Regras e Penalidades */}
              <section id="regras" className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-purple-600" />
                  Regras e Penalidades
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Regras Gerais</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>As regras seguem o regulamento oficial da FIFA</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>Uso obrigatório de equipamentos de proteção (caneleiras)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>Uniforme completo e numerado</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>Apresentação 30 minutos antes do jogo</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Penalidades</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                        <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                        <div>
                          <div className="font-bold text-red-800">Cartão Amarelo</div>
                          <div className="text-sm text-red-600">Advertência - 3 cartões = suspensão de 1 jogo</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                        <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                        <div>
                          <div className="font-bold text-red-800">Cartão Vermelho</div>
                          <div className="text-sm text-red-600">Expulsão - suspensão de 2 jogos</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                        <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                        <div>
                          <div className="font-bold text-red-800">W.O. (Walk Over)</div>
                          <div className="text-sm text-red-600">Atraso superior a 15 minutos = derrota por 3x0</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-bold text-blue-800 mb-2">Comissão Disciplinar</h4>
                        <p className="text-blue-700">
                          Casos de indisciplina serão analisados pela Comissão Disciplinar, 
                          que poderá aplicar penalidades mais severas conforme a gravidade.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regulamento;
