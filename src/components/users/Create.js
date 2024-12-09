import React, {useState} from 'react'
import './Create.css'
import Axios from 'axios'


function Create(props) {
  const [values, setValues] = useState()
  const changeInput = (value) =>{
    setValues(prevValue => ({
     ...prevValue,
     [value.target.name]: value.target.value,
    }))
  }
  const clickCreate = async (value) => {
   Axios.post('http://localhost:8080/users', {
     name: values.name,
     email: values.email,
     password: values.password,
   })
   .then(function (response) {
    props.setListDomain([
        ...props.listDomain,
        {
            name: values.name,
            email: values.email,
            password: values.password,
        }
    ])
   })
   .catch(function (error) {console.log(error.response.data)})
  }
      
 return (
   <div className='create-container'>
    <h1 className='domain-title'>USERS</h1>
    <input type='text' name='name'
     placeholder='name'
     className='domain-input'
     onChange={changeInput}/>
    <input type='text' name='email'
     placeholder='email'
     className='domain-input'
     onChange={changeInput}/>
    <input type='text' name='password'
     placeholder='password'
     className='domain-input'
     onChange={changeInput}/>
   <button className='domain-input-post'
   onClick={clickCreate}>POST</button>
  </div>
 )
}
export default Create