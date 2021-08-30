import styled from 'styled-components';

export const Container = styled.section`
  max-width: 960px;
  margin: 20px auto;
  box-shadow: 0 0 1em #6C757D;
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
  margin: 25px 0;
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

export const AlertSuccess = styled.p`
  background-color: #D1E7DD;
  color: #0F5132;

  margin: 20px 0;
  border: 1px solid #BADBCC;
  border-radius: 4px;
  padding: 7px;
`;

export const AlertDanger = styled.p`
  background-color: #F8D7DA;
  color: #842029;

  margin: 20px 0;
  border: 1px solid #F5C2C7;
  border-radius: 4px;
  padding: 7px;
`;

export const Form = styled.form`
  margin: 0px auto;
`;

export const Label = styled.label`
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
`;

export const ButtonWarning = styled.button`
  background-color: #FFF;
  color: #FFC107;
  padding: 8px 12px;
  border: 1px solid #FFC107;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #FFC107;
    color: #FFF;
  }
`;