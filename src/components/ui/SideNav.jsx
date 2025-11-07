// src/components/SideNav.jsx

import { useState, useEffect } from "react";

// Componente de ícone de bolinha
const NavDot = ({ isActive }) => (
  <div className="flex items-center justify-center w-6 h-6">
    <div
      className={`transition-all duration-300 rounded-full ${
        isActive ? "w-3 h-3 bg-purple-600" : "w-2 h-2 bg-gray-400 group-hover:bg-purple-500"
      }`}
    ></div>
  </div>
);

const SideNav = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  // Função para scroll suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(id);
    }
  };

  // Efeito para observar qual seção está na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Ativa quando a seção está no meio da tela
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  return (
    <nav className="fixed top-1/2 -translate-y-1/2 left-4 z-50 hidden lg:block animate-fade-in-up">
      <ul className="space-y-2 bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-purple-100 shadow-lg">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className="flex items-center space-x-3 group"
              aria-label={`Ir para a seção ${section.label}`}
            >
              <NavDot isActive={activeSection === section.id} />
              <span
                className={`transition-all duration-300 text-sm font-medium ${
                  activeSection === section.id
                    ? "text-purple-700 font-bold"
                    : "text-gray-500 group-hover:text-purple-600"
                }`}
              >
                {section.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
