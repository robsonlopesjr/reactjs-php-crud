import styled from 'styled-components';

export const Container = styled.section`
  max-width: 960px;
  margin: 20px auto;
  box-shadow: 0 0 1em #6C757D;
  padding: 20px;
`;

export const Content = styled.section`
  max-width: 960px;
  padding: 10px 30px 30px;
`;

export const ContainerTitle = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Titulo = styled.h1`
  color: #3E3E3E;
  font-size: 23px;
`;

export const ContainerButton = styled.section`
  margin: 20px 0;
`;

export const ButtonInfo = styled.button`
  background-color: #FFF;
  color: #0DCAF0;
  padding: 6px 9px;
  border: 1px solid #0DCAF0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #31D2D2;
    color: #FFF;
  }
`;

export const ConteudoProd = styled.p`
  color: #3E3E3E;
  font-size: 16px;
`;