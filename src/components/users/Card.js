import React from 'react'
import './Card.css'
import './List.css'
import './List'
import Axios from 'axios'


function Card(props){
  const clickRemove = async (value) => {
    Axios.delete("http://localhost:8080/users/" + props.id)
    .then(() => {
      props.setListDomain(
        props.listDomain.filter((value) => {
          Axios.delete(`http://localhost:8080/users/${props.id}`);
          return value.id !== props.id
        })
      )
    })
   .catch(function (error) {console.log(error.response.data)})
  }  
  return (
      <div className='card-container'>
        <button className='card-domain-del'
          onClick={clickRemove}>DEL</button>      
        <button className='card-domain-put'
          onClick={clickRemove}>PUT</button>      
        <p className='card-domain'>{props.id}</p>
        <p className='card-domain'>{props.name}</p>
        <p className='card-domain'>{props.email}</p>
        <p className='card-domain'>{props.avaliacao}</p>
        <div className='card-service'>Serviços:
          <p className='list-container'>{props.servicosId}</p></div>
      </div>
  )
}

export default Card