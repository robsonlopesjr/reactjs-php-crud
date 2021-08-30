import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Content,
    ContainerTitle,
    Titulo,
    ContainerButton,
    ButtonInfo,
    Form,
    Label,
    Input,
    ButtonWarning,
    AlertDanger,
    AlertSuccess
} from './styles.js';

export const Editar = (props) => {

    const [id] = useState(props.match.params.id);

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    useEffect(() => {
        const getProduto = async () => {
            await fetch("http://localhost/api/visualizar.php?id=" + id)
                .then((resp) => resp.json())
                .then((responseJSON) => (
                    setTitulo(responseJSON.produto.titulo),
                    setDescricao(responseJSON.produto.descricao)
                ));
        }
        getProduto();
    }, [id])

    const editProduto = async (e) => {
        e.preventDefault();

        await fetch("http://localhost/api/editar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, titulo, descricao })
        })
            .then((resp) => resp.json())
            .then((respJSON) => {
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
                }
            })
            .catch(() => {
                setStatus({
                    type: 'erro',
                    mensagem: 'Produto não editado com sucesso, tente mais tarde!'
                });
            });
    }

    return (
        <Container>
            <Content>
                <ContainerTitle>
                    <Titulo>Editar</Titulo>
                    <ContainerButton>
                        <Link to="/">
                            <ButtonInfo>
                                Listar
                            </ButtonInfo>
                        </Link>
                    </ContainerButton>
                </ContainerTitle>

                {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ''}
                {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ''}

                <Form onSubmit={editProduto}>
                    <Label>Título: </Label>
                    <Input type="text" name="titulo" placeholder="Título do produto..." value={titulo} onChange={e => setTitulo(e.target.value)} />

                    <Label>Descrição: </Label>
                    <Input type="text" name="descricao" placeholder="Descrição do produto..." value={descricao} onChange={e => setDescricao(e.target.value)} />

                    <ButtonWarning type="submit">Editar</ButtonWarning>
                </Form>

            </Content>
        </Container>
    );
}