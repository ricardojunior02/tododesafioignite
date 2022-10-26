import styled from 'styled-components'

export const WithTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => props.theme['gray-500']};
  padding: 16px;
  border-radius: 8px;
  margin-top: 20px; 
  width: 46rem;

  input{
    cursor: pointer;
    appearance: none;
    width: 17.45px;
    height: 17.45px;
    border: 2px solid ${(props) => props.theme['blue']};
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input::before{
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    background-color: black;
    border-radius: 50%;
    opacity: 0;
  }

  input:checked:before{
    opacity: 1;
  }

  p{
    color: ${(props) => props.theme['gray-100']};
    flex: 1;
    padding-left: 15px;
  }

  button{
    background: transparent;
    border: none;
    cursor: pointer;
  }

`