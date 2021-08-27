import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Content,
    ContainerTitle,
    Titulo,
    ContainerButton,
    ButtonInfo,
    AlertSuccess,
    AlertDanger,
    Form,
    Label,
    Input,
    ButtonSuccess
} from './styles.js';

export const Cadastrar = () => {

    const [produto, setProduto] = useState({
        titulo: '',
        descricao: ''
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const valorInput = e => setProduto({ ...produto, [e.target.name]: e.target.value });

    const cadProduto = async e => {
        e.preventDefault();

        await fetch("http://localhost/api/cadastrar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ produto })
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
                    mensagem: 'Produto não cadastrado com sucesso, tente mais tarde!'
                });
            });
    }

    return (
        <Container>
            <Content>
                <ContainerTitle>
                    <Titulo>Cadastrar</Titulo>
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


                <Form onSubmit={cadProduto}>
                    <Label>Título: </Label>
                    <Input type="text" name="titulo" placeholder="Título do produto..." onChange={valorInput} /><br /><br />

                    <Label>Descrição: </Label>
                    <Input type="text" name="descricao" placeholder="Descrição do produto..." onChange={valorInput} /><br /><br />

                    <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>
                </Form>
            </Content>
        </Container>
    );
}