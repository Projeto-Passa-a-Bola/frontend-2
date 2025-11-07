import { useState } from 'react';
import { authService } from '../../services/api';

const LoginTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (type) => {
    setLoading(true);
    setMessage('');

    try {
      let credentials;
      
      if (type === 'admin') {
        credentials = {
          email: "admin@passabola.com",
          senha: "admin123"
        };
      } else {
        credentials = {
          cpf: "12345678901",
          senhaJogadora: "jogadora123"
        };
      }

      const response = await authService.login(credentials);
      
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        setMessage(`Login ${type} realizado com sucesso! Recarregue a página.`);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      setMessage(`Erro no login ${type}: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setMessage('Logout realizado! Recarregue a página.');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition-colors z-50"
      >
        🧪 Test Login
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-xl p-4 z-50 w-64">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-800">Teste de Login</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2">
        <button
          onClick={() => handleLogin('admin')}
          disabled={loading}
          className="w-full bg-purple-600 text-white px-3 py-2 rounded text-sm hover:bg-purple-700 disabled:opacity-50"
        >
          {loading ? 'Carregando...' : 'Login Admin'}
        </button>
        
        <button
          onClick={() => handleLogin('jogadora')}
          disabled={loading}
          className="w-full bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? 'Carregando...' : 'Login Jogadora'}
        </button>
        
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      
      {message && (
        <div className="mt-3 p-2 bg-gray-100 rounded text-xs text-gray-700">
          {message}
        </div>
      )}
    </div>
  );
};

export default LoginTest;
