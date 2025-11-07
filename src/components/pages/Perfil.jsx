// src/components/Perfil/Perfil.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '../../services/api'; // Importe o serviço de API

function Perfil() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    bio: '',
    posicao: '',
    idade: '',
    altura: '',
    peso: '',
  });

  // Função para carregar os dados do perfil do backend
  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Agora fazemos apenas UMA chamada para a rota unificada de perfil
      const profile = await userService.getProfile();
      
      setUserProfile(profile);
      // Preenche o formulário com os dados recebidos
      setFormData({
        nome: profile.nome || profile.name || '',
        email: profile.email || '',
        telefone: profile.telefone || profile.phone || '',
        posicao: profile.posicao || profile.position || '',
        idade: profile.idade || profile.age || '',
        
      });

    } catch (err) {
      console.error('Erro ao buscar perfil:', err);
      setError('Não foi possível carregar o perfil. Verifique sua conexão ou tente novamente.');
      // Se o erro for de autenticação (401), redireciona para o login
      if (err.response && err.response.status === 401) {
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  // useEffect para buscar os dados quando o componente é montado
  useEffect(() => {
    fetchUserProfile();
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setError(null);
      // Chama a função de atualização do nosso serviço
      await userService.updateProfile(formData);
      await fetchUserProfile(); // Recarrega os dados para garantir que tudo está atualizado
      setIsEditing(false);
    } catch (err) {
      console.error('Erro ao atualizar perfil:', err);
      setError('Erro ao salvar as alterações. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    // Restaura o formulário para os dados originais do perfil
    setFormData({
      nome: userProfile?.nome || userProfile?.name || '',
      email: userProfile?.email || '',
      telefone: userProfile?.telefone || userProfile?.phone || '',
      bio: userProfile?.bio || '',
      posicao: userProfile?.posicao || userProfile?.position || '',
      idade: userProfile?.idade || userProfile?.age || '',
      altura: userProfile?.altura || userProfile?.height || '',
      peso: userProfile?.peso || userProfile?.weight || ''
    });
    setIsEditing(false);
  };

  // ---- RENDERIZAÇÃO DO COMPONENTE (JSX) ----
  // O JSX permanece praticamente o mesmo, pois a lógica de exibição não muda.
  // Apenas ajustei para ser mais robusto caso o userProfile ainda seja nulo.

  if (loading && !userProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-purple-600 text-lg">Carregando perfil...</p>
        </div>
      </div>
    );
  }

  if (error && !userProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
          <button 
            onClick={fetchUserProfile}
            className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  // Se não há perfil, mas não está carregando e nem deu erro, algo está errado.
  if (!userProfile) {
    return <div>Nenhum perfil encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="mb-4 px-4 py-2 text-purple-600 hover:text-purple-800 transition-colors"
          >
            ← Voltar
          </button>
          <h1 className="text-4xl font-bold text-purple-600 mb-2">Meu Perfil</h1>
          <p className="text-gray-600">Gerencie suas informações pessoais</p>
        </div>

        {/* Avatar e Informações Básicas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                {(userProfile.nome || userProfile.name || 'U').charAt(0)}
              </div>
            </div>

            {/* Informações */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  {isEditing ? (
                    <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                  ) : (
                    <p className="text-lg font-semibold text-gray-900">{userProfile.nome || userProfile.name || 'Não informado'}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  {isEditing ? (
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                  ) : (
                    <p className="text-lg text-gray-900">{userProfile.email || 'Não informado'}</p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  {isEditing ? (
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                  ) : (
                    <p className="text-lg text-gray-900">{userProfile.telefone || userProfile.phone || 'Não informado'}</p>
                  )}
                </div>

                {/* Posição (só mostra se existir) */}
                {(userProfile.posicao || userProfile.position) && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Posição</label>
                    {isEditing ? (
                      <input type="text" name="posicao" value={formData.posicao} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                    ) : (
                      <p className="text-lg text-gray-900">{userProfile.posicao || userProfile.position}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Bio */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Biografia</label>
                {isEditing ? (
                  <textarea name="bio" value={formData.bio} onChange={handleInputChange} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Conte um pouco sobre você..." />
                ) : (
                  <p className="text-gray-900">{userProfile.bio || 'Nenhuma biografia adicionada ainda.'}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Informações Esportivas (só renderiza o bloco se houver algum dado) */}
        {(userProfile.idade || userProfile.age || userProfile.altura || userProfile.height || userProfile.peso || userProfile.weight) && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Informações Esportivas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Idade */}
              {(userProfile.idade || userProfile.age) && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Idade</label>
                  {isEditing ? (
                    <input type="number" name="idade" value={formData.idade} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                  ) : (
                    <p className="text-lg text-gray-900">{userProfile.idade || userProfile.age} anos</p>
                  )}
                </div>
              )}

              {/* Altura */}
              {(userProfile.altura || userProfile.height) && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Altura</label>
                  {isEditing ? (
                    <input type="text" name="altura" value={formData.altura} onChange={handleInputChange} placeholder="Ex: 1.70m" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                  ) : (
                    <p className="text-lg text-gray-900">{userProfile.altura || userProfile.height}</p>
                  )}
                </div>
              )}

              {/* Peso */}
              {(userProfile.peso || userProfile.weight) && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Peso</label>
                  {isEditing ? (
                    <input type="text" name="peso" value={formData.peso} onChange={handleInputChange} placeholder="Ex: 65kg" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                  ) : (
                    <p className="text-lg text-gray-900">{userProfile.peso || userProfile.weight}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Botões de Ação */}
        <div className="flex justify-end gap-4">
          {isEditing ? (
            <>
              <button onClick={handleCancel} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">Cancelar</button>
              <button onClick={handleSave} disabled={loading} className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50">
                {loading ? 'Salvando...' : 'Salvar Alterações'}
              </button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)} className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">Editar Perfil</button>
          )}
        </div>

        {/* Mensagem de erro flutuante */}
        {error && !loading && (
          <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default Perfil;
