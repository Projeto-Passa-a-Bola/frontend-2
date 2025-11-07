// src/components/Register.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPlayer() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState(""); // Novo estado para a seleção de tipo
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (senha !== confirmaSenha) {
      setErro('As senhas não coincidem!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name + ' ' + lastName,
          email: email,
          senha: senha,
          confirmasenha: confirmaSenha,
          tipo: tipoUsuario, // Adiciona o tipo de usuário ao corpo da requisição
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registro bem-sucedido! Redirecionando para o login...");
        navigate("/login");
      } else {
        setErro(data.message || "Erro ao registrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setErro("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className='flex flex-row bg-gradient-to-br from-purple-600 via-purple-400 to-blue-400 h-screen'>
    <div className="relative flex items-center justify-center flex-2 p-10">
      <div className="relative flex flex-col p-15 px-20 gap-20 bg-zinc-100 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-black">
          Cadastro Jogadora
        </h2>
        <form onSubmit={handleRegister}>
          {/* O problema está aqui, e foi corrigido abaixo */}
          <div className="mb-4 flex flex-row justify-between">
            <div id="escolha" className="flex flex-col items-center">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="treinadora"
              >
                Treinadora
              </label>
              <input
                className="px-3 py-2 text-black border focus:outline-none focus:ring-2 focus:ring-purple-500 border-t-0 border-l-0 border-r-0 border-b-1 border-purple-800"
                id="treinadora"
                type="radio"
                name="tipoUsuario" // MESMO nome para agrupar
                value="treinadora"
                checked={tipoUsuario === "treinadora"}
                onChange={(e) => setTipoUsuario(e.target.value)}
                required
              />
            </div>
            <div id="escolha" className="flex flex-col items-center">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="jogadora"
              >
                Jogadora
              </label>
              <input
                className="px-3 py-2 text-black border focus:outline-none focus:ring-2 focus:ring-purple-500 border-t-0 border-l-0 border-r-0 border-b-1 border-purple-800"
                id="jogadora"
                type="radio"
                name="tipoUsuario" // MESMO nome para agrupar
                value="jogadora"
                checked={tipoUsuario === "jogadora"}
                onChange={(e) => setTipoUsuario(e.target.value)}
                required
              />
            </div>
            <div id="escolha" className="flex flex-col items-center">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="ambas"
              >
                Ambas
              </label>
              <input
                className="px-3 py-2 text-black border focus:outline-none focus:ring-2 focus:ring-purple-500 border-t-0 border-l-0 border-r-0 border-b-1 border-purple-800"
                id="ambas"
                type="radio"
                name="tipoUsuario" // MESMO nome para agrupar
                value="ambas"
                checked={tipoUsuario === "ambas"}
                onChange={(e) => setTipoUsuario(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="posicao"
            >
              Posição
            </label>
            <input
              className="w-100 px-3 py-2 text-black border focus:outline-none focus:ring-2 focus:ring-purple-500 border-t-0 border-l-0 border-r-0 border-b-1 border-purple-800"
              id="posicao"
              type="text"
              placeholder="Ex: Goleira"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="camiseta"
            >
              Numero da camiseta
            </label>
            <input
              className="w-100 px-3 py-2 text-black border focus:outline-none focus:ring-2 focus:ring-purple-500 border-t-0 border-l-0 border-r-0 border-b-1 border-purple-800"
              id="camiseta"
              type="number"
              placeholder="Ex: 10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div> 
          <div className="flex flex-col">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="uploadrg"
            >
              Foto do rosto
            </label>
            <div className="flex justify-center items-center mb-5">
              <input
                type="file"
                name="ImgRG"
                id="uploadrg"
                className="hidden"
              />
              <label
                htmlFor="uploadrg"
                className="flex items-center text-zinc-500 border-1 justify-center gap-2 w-full py-2 rounded-lg shadow-md bg-zinc-200 cursor-pointer transition hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-purple-500 to-purple-400 hover:text-white"
              >
                <span className="font-bold">UPLOAD</span>
              </label>
            </div>
          </div> 
          {erro && <p className="text-red-500 text-sm mb-4">{erro}</p>}
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-gradient-to-r from-purple-500 to-purple-400 cursor-pointer text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
              type="submit"
            >
              Finalizar
            </button>
          </div>
        </form>
      </div>
    </div>
    <div id='direita' className='flex flex-2 justify-end'>
        <img src="../../../public/copaTaca.png" alt="" className=''/>
    </div>
    </div>
  );
}

export default RegisterPlayer;