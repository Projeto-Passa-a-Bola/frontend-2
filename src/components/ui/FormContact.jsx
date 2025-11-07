import { useState } from "react";

function FormContact() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como eu posso participar do Campeonato?",
      answer:
        "Basta preencher o formulário de inscrição com seus dados e estará apata a participar.",
    },
    {
      question: "Eu tenho que pagar alguma coisa para participar?",
      answer:
        "Não, a participação no Campeonato é totalmente gratuita.",
    },
    {
      question: "Tem que ser maior de idade para participar do campeonato?",
      answer:
        "Sim, é necessário ter 18 anos ou mais para se inscrever no campeonato.",
    },
    {
      question: "Como posso entrar em contato com o suporte se eu tiver dúvidas?",
      answer:
        "Você pode entrar em contato conosco através do botão de envio de email na seção de perguntas frequentes",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <span className="text-sm text-purple-500 font-semibold">
            FAQ
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6">
            Perguntas Frequentes
          </h2>

          <div className="bg-purple-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              Continua com dúvidas?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Não conseguiu encontrar a resposta que procurava? Entre em contato com nossa equipe de suporte.
            </p>
            <a
              href="mailto:support@yourcompany.com"
              className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
            >
              Enviar E-mail
            </a>
          </div>
        </div>

        {/* Right Section (FAQ List) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-50"
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FormContact;
