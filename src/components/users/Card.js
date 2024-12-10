import React from 'react'
import './Card.css'
import './List.css'
import './List'
import Axios from 'axios'


function Card(props) {
  const clickRemove = async () => {
    try {
      await Axios.delete(`http://localhost:8080/users/${props.id}`);
      props.setListDomain(
        props.listDomain.filter((value) => value.id !== props.id)
      );
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const clickUpdate = async () => {
    // Lógica do PUT - você pode abrir um modal ou realizar um update direto
    try {
      await Axios.put(`http://localhost:8080/users/${props.id}`, {
        name: "Novo Nome",
        email: "novo@email.com",
      });
      console.log("Usuário atualizado!");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="card-container">
      <button className="card-domain-del" onClick={clickRemove}>
        DEL
      </button>
      <button className="card-domain-put" onClick={clickUpdate}>
        PUT
      </button>
      <p className="card-domain">{props.id}</p>
      <p className="card-domain">{props.name}</p>
      <p className="card-domain">{props.email}</p>
      <p className="card-domain">{props.avaliacao}</p>
      <div className="card-service">
        Serviços:
        <p className="list-container">{props.servicosId}</p>
      </div>
    </div>
  );
}

export default Card