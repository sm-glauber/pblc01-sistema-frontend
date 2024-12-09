import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ServiceCard from './ServiceCard';
import CreateService from './CreateService';
import './ServiceList.css';

function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8080/servicos')
      .then((response) => setServices(response.data))
      .catch((error) => console.error(error.response?.data || error.message));
  }, []);

  return (
    <div className="service-list-container">
      <h1>Serviços</h1>
      <CreateService services={services} setServices={setServices} />
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          services={services}
          setServices={setServices}
        />
      ))}
    </div>
  );
}

export default ServiceList;
