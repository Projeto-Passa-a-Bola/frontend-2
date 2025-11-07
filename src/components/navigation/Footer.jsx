import { useState } from 'react';
// Importando os ícones que vamos usar da biblioteca react-icons
import { FaTwitter, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !message) {
      setFeedback('Por favor, preencha todos os campos.');
      return;
    }
    console.log('Enviando para o email:', { email, message });
    setFeedback('Obrigado! Sua mensagem foi enviada.');
    setEmail('');
    setMessage('');
    setTimeout(() => setFeedback(''), 5000);
  };

  return (
    <>
      {/* 
        COR ALTERADA: 
        - Fundo principal: de bg-purple-300 para bg-purple-800
        - Texto principal: de text-gray-700 para text-gray-200 para melhor contraste
        - Títulos: de text-purple-600 para text-white
      */}
      <div id="footer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 md:p-12 lg:p-16 bg-purple-800 text-gray-200 gap-8 lg:gap-10">
        
        {/* Coluna 1: Passa a Bola e Redes Sociais */}
        <div id="p1" className="flex flex-col gap-4">
          <h1 className="font-bold text-white uppercase text-2xl">Passa a Bola</h1>
          <p className="text-xl">Ferramentas profissionais de qualidade superior para todos os seus projetos.</p>
          
          {/* 
            LINKS SOCIAIS ATUALIZADOS:
            - Usando flex-col para empilhar os links verticalmente.
            - Adicionado ícone ao lado de cada texto.
            - 'items-start' alinha os itens à esquerda.
            - 'gap-3' para espaçamento vertical.
          */}
          <div id="links" className="flex flex-col items-start gap-3 mt-2">
            <a href="https://x.com/passaabola" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <FaTwitter /> <span className='text-lg'>Twitter</span>
            </a>
            <a href="https://www.youtube.com/@passabola" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <FaYoutube /> <span className='text-lg'>Youtube</span>
            </a>
            <a href="https://www.instagram.com/passaabola" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <FaInstagram /> <span className='text-lg'>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@passabola" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <FaTiktok /> <span className='text-lg'>Tiktok</span>
            </a>
          </div>
        </div>

         {/* Coluna 2: Suporte */}
         <div id="p3" className="flex flex-col gap-5 ">
          <h1 className="font-bold text-white text-2xl uppercase mb-4">Suporte</h1>
          <a href="/contato" className="hover:underline  text-lg  " >Fale Conosco</a>
          <a href="/faq" className="hover:underline text-lg ">Perguntas Frequentes</a>
          <a href="#" className="hover:underline text-lg ">Política de Privacidade</a> 
      
        </div>
        
        {/* Coluna 3: Formulário de Contato Rápido */}
        <div id="p2" className="flex flex-col gap-6">
          <h1 className="font-bold text-white text-2xl uppercase">Mande uma Mensagem</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e ) => setEmail(e.target.value)}
              className="p-2 rounded border border-purple-500 bg-purple-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <textarea
              placeholder="Sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 rounded border border-purple-500 bg-purple-700 text-white placeholder-gray-400 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-white"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-white text-purple-800 font-bold py-2 px-4 rounded hover:bg-gray-200 transition-colors"
            >
              Enviar
            </button>
          </form>
          {feedback && <p className="text-sm text-gray-300">{feedback}</p>}
        </div>
        
       
        
        {/* Coluna 4: Patrocinadores */}
        <div id="p4" className="flex flex-col gap-4">
          <h1 className="font-bold text-white text-2xl h-12 ml-17 uppercase"  >Nossos Patrocinadores</h1>
          {/* Adicionado um fundo branco e padding para destacar os logos no fundo escuro */}
          <div className="flex items-center justify-around gap-2 bg-white p-3 rounded-lg h-30">
            <a href="https://www.adidas.com" target="_blank" rel="noopener noreferrer" title="Adidas">
              <img src="/Adidas-Logo.webp" alt="Adidas" className="h-8 w-auto" />
            </a>
            <a href="https://www.gatorade.com" target="_blank" rel="noopener noreferrer" title="Gatorade">
              <img src="/gatorade-logo.png" alt="Gatorade" className="h-8 w-auto" />
            </a>
            <a href="https://www.redbull.com" target="_blank" rel="noopener noreferrer" title="Red Bull">
              <img src="/redbull-logo.png" alt="Red Bull" className="h-18 w-auto" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Rodapé inferior com informações de direitos autorais */}
      <div className="flex flex-col justify-center items-center bg-purple-800 text-gray-300 p-5">
        <hr className="w-full border-t border-purple-600 mb-4 max-w-screen-lg" />
        <h2 className="text-center text-sm">
          © 2025 Passa a Bola. Todos os direitos reservados. | <a href="/privacidade" className="underline">Política de Privacidade</a> | <a href="/termos" className="underline">Termos de Uso</a>
        </h2>
      </div>
    </>
   );
}

export default Footer;
