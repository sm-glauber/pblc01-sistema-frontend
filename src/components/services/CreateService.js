import React, { useState } from 'react';
import Axios from 'axios';

function CreateService({ services, setServices }) {
    const [values, setValues] = useState({ userId: '', titulo: '', descricao: '' });

    const changeInput = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const clickCreate = () => {
        Axios.post('http://localhost:8080/servicos', {
            userId: values.userId,
            servico: {
                titulo: values.titulo,
                descricao: values.descricao,
            },
        })
            .then((response) => {
                // Atualize a lista com o serviço recém-criado retornado pelo servidor
                setServices((prevServices) => [...prevServices, response.data]);
                // Limpe os campos após a criação
                setValues({ userId: '', titulo: '', descricao: '' });
            })
            .catch((error) => console.error(error.response?.data || error.message));
    };


    return (
        <div className="create-service-container">
            <input
                type="text"
                name="userId"
                placeholder="User ID"
                value={values?.userId || ''} // Valor controlado pelo estado
                onChange={changeInput}
            />
            <input
                type="text"
                name="titulo"
                placeholder="Título"
                value={values?.titulo || ''} // Valor controlado pelo estado
                onChange={changeInput}
            />
            <input
                type="text"
                name="descricao"
                placeholder="Descrição"
                value={values?.descricao || ''} // Valor controlado pelo estado
                onChange={changeInput}
            />
            <button onClick={clickCreate}>Adicionar Serviço</button>
        </div>
    );
}

export default CreateService;
