import React, { useState } from "react";
import Axios from "axios";
import "./ServiceCreate.css";

function ServiceCreate({ serviceList, setServiceList }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [userId, setUserId] = useState("");  // Assumindo que você tenha um campo userId

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !descricao || !userId) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await Axios.post("http://localhost:8080/servicos", {
        userId,
        servico: {
          titulo,
          descricao,
        },
      });

      // Adiciona o novo serviço à lista de serviços
      setServiceList([...serviceList, response.data]);

      // Limpa os campos do formulário
      setTitulo("");
      setDescricao("");
      setUserId("");
    } catch (error) {
      console.error("Erro ao criar o serviço:", error);
    }
  };

  return (
    <div className="service-create-container">
      <h2>Criar Novo Serviço</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">Postar</button>
      </form>
    </div>
  );
}

export default ServiceCreate;
