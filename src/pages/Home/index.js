import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    ContainerTitle,
    Titulo,
    ContainerButton,
    ButtonSuccess,
    ButtonPrimary,
    ButtonWarning,
    Table,
} from './styles.js';

export const Home = () => {

    const [data, setData] = useState([]);

    const getProdutos = async () => {
        fetch("http://localhost/api/index.php")
            .then((resp) => resp.json())
            .then((responseJSON) => (
                setData(responseJSON.records)
            ));
    }

    useEffect(() => {
        getProdutos()
    }, []);

    return (
        <Container>
            <ContainerTitle>
                <Titulo>Listar</Titulo>
                <ContainerButton>
                    <Link to="/cadastrar">
                        <ButtonSuccess>
                            Cadastrar
                        </ButtonSuccess>
                    </Link>
                </ContainerButton>
            </ContainerTitle>

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
                            <td>
                                <Link to={"/visualizar/" + produto.id}>
                                    <ButtonPrimary>Visualizar</ButtonPrimary>
                                </Link>
                                {" "}
                                <Link to={"/editar/" + produto.id}>
                                    <ButtonWarning>Editar</ButtonWarning>
                                </Link>
                                Apagar
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}