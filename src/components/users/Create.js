import React, { useState } from 'react';
import './Create.css';
import Axios from 'axios';

function Create(props) {
  const [values, setValues] = useState({ name: "", email: "", password: "" }); // Estado inicial vazio

  const changeInput = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const clickCreate = async () => {
    if (!values.name || !values.email || !values.password) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const response = await Axios.post("http://localhost:8080/users", {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      // Adiciona o usuário retornado pelo backend à lista
      props.setListDomain([...props.listDomain, response.data]);

      // Limpa os campos do formulário
      setValues({ name: "", email: "", password: "" });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className='create-container'>
      <h1 className='domain-title'>USERS</h1>
      <input
        type='text'
        name='name'
        placeholder='name'
        className='domain-input'
        value={values.name} // Estado controlado
        onChange={changeInput}
      />
      <input
        type='text'
        name='email'
        placeholder='email'
        className='domain-input'
        value={values.email} // Estado controlado
        onChange={changeInput}
      />
      <input
        type='text'
        name='password'
        placeholder='password'
        className='domain-input'
        value={values.password} // Estado controlado
        onChange={changeInput}
      />
      <button className='domain-input-post' onClick={clickCreate}>
        POST
      </button>
    </div>
  );
}

export default Create;
