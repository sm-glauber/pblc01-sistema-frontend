import React, { useState } from 'react';
import './Card.css';
import './List.css';
import Axios from 'axios';

function Card(props) {
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    name: props.name,
    email: props.email,
  });

  const clickRemove = async () => {
    try {
      await Axios.delete(`http://localhost:8080/users/${props.id}`);
      props.setListDomain(
        props.listDomain.filter((value) => value.id !== props.id)
      );
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const clickUpdate = async () => {
    try {
      const response = await Axios.put(`http://localhost:8080/users/${props.id}`, updatedUser);
      console.log('Usuário atualizado!', response.data);

      // Atualizar a lista no estado principal
      props.setListDomain((prevList) =>
        prevList.map((user) => (user.id === props.id ? response.data : user))
      );

      // Sair do modo de edição
      setEditMode(false);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="card-container">
      <button className="card-domain-del" onClick={clickRemove}>
        DEL
      </button>
      <button className="card-domain-put" onClick={() => setEditMode(!editMode)}>
        {editMode ? 'Save' : 'Edit'}
      </button>

      {editMode ? (
        <div className="edit-fields">
          <input
            type="text"
            name="name"
            value={updatedUser.name}
            onChange={handleInputChange}
            placeholder="Atualizar Nome"
          />
          <input
            type="email"
            name="email"
            value={updatedUser.email}
            onChange={handleInputChange}
            placeholder="Atualizar Email"
          />
          <button onClick={clickUpdate}>Salvar</button>
        </div>
      ) : (
        <>
          <p className="card-domain">ID: {props.id}</p>
          <p className="card-domain">Nome: {props.name}</p>
          <p className="card-domain">Email: {props.email}</p>
          <p className="list-container">Servicos: {props.servicosId + " "}</p>
        </>
      )}
    </div>
  );
}

export default Card;
