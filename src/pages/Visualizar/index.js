import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    ContainerTitle,
    Titulo,
    ContainerButton,
    ButtonInfo,
    ConteudoProd
} from './styles.js';

export const Visualizar = (props) => {

    const [id] = useState(props.match.params.id);

    const [data, setData] = useState([]);

    useEffect(() => {
        const getProduto = async () => {
            await fetch("http://localhost/api/visualizar.php?id=" + id)
                .then((resp) => resp.json())
                .then((responseJSON) => (
                    setData(responseJSON.produto)
                ));
        }
        getProduto();
    }, [id])

    return (
        <Container>
            <ContainerTitle>
                <Titulo>Visualizar</Titulo>
                <ContainerButton>
                    <Link to="/">
                        <ButtonInfo>
                            Listar
                        </ButtonInfo>
                    </Link>
                </ContainerButton>
            </ContainerTitle>

            <ConteudoProd>ID: {data.id}</ConteudoProd>
            <ConteudoProd>Título: {data.titulo}</ConteudoProd>
            <ConteudoProd>Descrição: {data.descricao}</ConteudoProd>
        </Container>
    );
}