import React from 'react';
import Axios from 'axios';

function ServiceCard({ service, services, setServices }) {
  const clickRemove = () => {
    Axios.delete(`http://localhost:8080/servicos/${service.id}`)
      .then(() => {
        setServices(services.filter((s) => s.id !== service.id));
      })
      .catch((error) => console.error(error.response?.data || error.message));
  };

  return (
    <div className="service-card">
      <h3>{service.titulo}</h3>
      <p>{service.descricao}</p>
      <button onClick={clickRemove}>Excluir</button>
    </div>
  );
}

export default ServiceCard;
