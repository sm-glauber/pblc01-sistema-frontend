import React, {useState, useEffect} from 'react'
import './List.css'
import Axios from 'axios'
import Card from './Card'
import Create from './Create'


function List() {
  const [listDomain, setListDomain] = useState()
  useEffect(()=>{
    Axios.get('http://localhost:8080/users')
    .then(function (response) {setListDomain(response.data)})
    .catch(function (error) {console.log(error.response.data)})  
  },[])
  console.log(listDomain)
 return (
  <div className='list-container'>
    <Create 
      listDomain={listDomain}
      setListDomain={setListDomain}/>
    { typeof listDomain !== "undefined" && 
      listDomain.map((value)=>{
        return (
          <Card 
           key={value.id}
           id={value.id}
           name={value.name}
           email={value.email}
           avaliacao={value.avaliacao}
           servicosId={value.servicosId}
           listDomain={listDomain}
           setListDomain={setListDomain}          
          />)        
    })}
  </div>
 )
}
export default List