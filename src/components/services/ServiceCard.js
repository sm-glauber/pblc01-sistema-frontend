import React from "react";
import Axios from "axios";
import "./ServiceCard.css";

function ServiceCard(props) {
  const clickDelete = async () => {
    try {
      await Axios.delete(`http://localhost:8080/servicos/${props.id}`);
      props.setServiceList(props.serviceList.filter((service) => service.id !== props.id));
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div className="service-card-container">
      <h3>{props.titulo}</h3>
      <p>Descrição: {props.descricao}</p>
      <button onClick={clickDelete}>DELETE</button>
    </div>
  );
}

export default ServiceCard;
