// Configuração base da API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Função para fazer requisições autenticadas
const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('authToken');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (!response.ok) {
      if (response.status === 401) {
        // Token inválido, remover e redirecionar para login
        localStorage.removeItem('authToken');
        window.location.href = '/login';
        throw new Error('Token inválido');
      }
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
  }
};

// Serviços da API
export const userService = {
  // Buscar perfil do usuário (admin)
  getProfile: () => apiRequest('/auth/profile'),
  
  // Buscar perfil da jogadora
  getJogadoraProfile: () => apiRequest('/jogadoras/profile'),
  
  // Atualizar perfil do usuário
  updateProfile: (data) => apiRequest('/auth/profile', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  // Upload de avatar
  uploadAvatar: (file) => {
    const formData = new FormData();
    formData.append('avatar', file);
    
    return apiRequest('/auth/avatar', {
      method: 'POST',
      headers: {
        // Não definir Content-Type para FormData
      },
      body: formData,
    });
  },
};

export const authService = {
  // Login
  login: (credentials) => apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  
  // Registro
  register: (userData) => apiRequest('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  
  // Logout
  logout: () => apiRequest('/auth/logout', {
    method: 'POST',
  }),
};

export default apiRequest;
