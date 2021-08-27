import React, { useEffect, useState } from 'react';

import { Table, Titulo } from './styles.js';

export const Home = () => {

    const [data, setData] = useState([]);

    const getProdutos = async () => {
        fetch("http://localhost/celke/index.php")
            .then((resp) => resp.json())
            .then((responseJSON) => (
                setData(responseJSON.records)
            ));
    }

    useEffect(() => {
        getProdutos()
    }, []);

    return (
        <div>
            <Titulo>Listar</Titulo>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(data).map(produto => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.titulo}</td>
                            <td>{produto.descricao}</td>
                            <td>Visualizar Editar Apagar</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}