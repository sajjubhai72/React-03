import styled from "styled-components";


export const Button = styled.button`
    color: #fff;
    padding: 10px 18px;
    background: #000000;
    border: none;
    border-radius: 5px;
    min-width: 220px;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s backgaround ease-in;
    cursor: pointer;

&:hover{
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
    transition: 0.3s backgaround ease-in;
}
`;

export const OutLineButton = styled(Button)`
background-color: #fff;
border: 1px solid #000;
color: #000;
&:hover{
    background-color: #000;
    border: 1px solid transparent;
    color: #fff;
}

`;