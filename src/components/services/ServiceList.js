import React, { useState, useEffect } from "react";
import Axios from "axios";
import ServiceCreate from "./ServiceCreate";
import ServiceCard from "./ServiceCard";
import "./ServiceList.css";

function ServiceList() {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/servicos")
      .then((response) => {
        // Verifica se os dados são um array válido antes de definir o estado
        if (Array.isArray(response.data)) {
          setServiceList(response.data);
        } else {
          console.error("Formato inesperado de dados", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response?.data || error.message);
      });
  }, []);

  return (
    <div className="service-list-container">
      <ServiceCreate serviceList={serviceList} setServiceList={setServiceList} />
      <h2>Lista de Serviços</h2>
      <div className="service-cards">
        {serviceList.length > 0 ? (
          serviceList.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              titulo={service.titulo}
              descricao={service.descricao}
              serviceList={serviceList}
              setServiceList={setServiceList}
            />
          ))
        ) : (
          <p>Nenhum serviço encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default ServiceList;
