import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, LogOut, Sun, Moon, Palette } from 'lucide-react';
import { userService } from '../../services/api';

const AvatarMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const menuRef = useRef(null);

  // Fechar menu ao clicar fora
  useEffect(() => {
    // Buscar usuário do backend (tenta admin depois jogadora)
    const fetchUser = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        try {
          const profile = await userService.getProfile();
          setUser({ ...profile, isAdmin: true });
        } catch {
          const jogadora = await userService.getJogadoraProfile();
          setUser({ ...jogadora, isAdmin: false });
        }
      } catch (e) {
        console.error('Falha ao buscar usuário:', e);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Aqui você pode implementar a lógica de troca de tema
    document.documentElement.classList.toggle('dark');
  };

  const handleProfile = () => {
    // Navegar para página de perfil
    navigate('/perfil');
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsOpen(false);
    window.location.href = '/login';
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Botão do Avatar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        <User className="w-5 h-5" />
      </button>

      {/* Menu Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {/* Header do Menu */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white">
                {user?.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt="Avatar" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {loading ? 'Carregando...' : (user?.name || user?.username || 'Usuário')}
                </p>
                <p className="text-xs text-gray-500">
                  {user?.email || 'usuario@email.com'}
                </p>
              </div>
            </div>
          </div>

          {/* Opções do Menu */}
          <div className="py-1">
            {/* Trocar Tema */}
            <button
              onClick={handleThemeToggle}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 mr-3 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 mr-3 text-gray-500" />
              )}
              {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
            </button>

            {/* Ver Perfil */}
            <button
              onClick={handleProfile}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
            >
              <User className="w-4 h-4 mr-3 text-gray-500" />
              Ver Perfil
            </button>

            {/* Configurações */}
            <button
              onClick={() => {
                console.log('Configurações');
                setIsOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
            >
              <Settings className="w-4 h-4 mr-3 text-gray-500" />
              Configurações
            </button>

            {/* Separador */}
            <div className="border-t border-gray-100 my-1"></div>

            {/* Sair da Conta */}
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Sair da Conta
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
