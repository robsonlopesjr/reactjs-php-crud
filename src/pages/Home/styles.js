import styled from 'styled-components';

export const Container = styled.section`
  max-width: 960px;
  margin: 20px auto;
  box-shadow: 0 0 1em #6C757D;
  padding: 0 20px 20px;
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
  margin: 25px 0;
`;

export const ButtonSuccess = styled.button`
  background-color: #FFF;
  color: #198754;
  padding: 8px 12px;
  border: 1px solid #198754;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #157347;
    color: #FFF;
  }
`;

export const Table = styled.table`
  width: 100%;

  th {
    background-color: #FFD219;
    color: #3E3E3E;
    padding: 10px;
  }

  td {
    background-color: #F6F6F6;
    color: #3E3E3E;
    padding: 8px;
  }
`;