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
    ButtonDanger,
    AlertDanger,
    AlertSuccess,
    Table,
} from './styles.js';

export const Home = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

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

    const apagarProduto = async (idProduto) => {
        await fetch("http://localhost/api/apagar.php?id=" + idProduto)
            .then(resp => resp.json())
            .then(respJSON => {
                if (respJSON.erro) {
                    setStatus({
                        type: 'erro',
                        mensagem: respJSON.mensagem
                    });
                } else {
                    setStatus({
                        type: 'success',
                        mensagem: respJSON.mensagem
                    });
                    getProdutos()
                }
            })
            .catch(respJSON => {
                setStatus({
                    type: 'erro',
                    mensagem: 'Erro: Produto não apagado com sucesso, tente novamente mais tarde!'
                });
            })
    }

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

            {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ''}
            {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ''}

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
                                {" "}
                                <ButtonDanger onClick={() => apagarProduto(produto.id)}>Apagar</ButtonDanger>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}