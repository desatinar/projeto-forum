import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40vw;
    /* align-items: center; */
    justify-content: center;
`

export const CardStyle = styled.div`
    border: 1px solid black;
    
    display: grid;
    grid-template-columns: 10% 50% 40%;
    grid-template-rows: 15% 15% 20% 20% 30% ;
    gap: 5px;
    padding: 10px;
`

export const ImgCard = styled.img`
    border: 1px solid black;
    border-radius: 50%;
    width: 80%;
    height: 100%;
    grid-column: 1/1;
    grid-row: 1/3;
    background-color: red;
    `
export const NomeCard = styled.h3`
    font-weight: 400;
    height: 100%;
    margin: 0;
    grid-column: 2/3;
    grid-row: 1/2;
    border: 1px solid black;
    `
export const MensagemCard = styled.p`
    height: 100%;
    margin: 0;
    grid-column:2/3;
    border: 1px solid black;
    grid-row: 2/3;
    `

export const ButtonCard = styled.button`
border: 1px solid black;
grid-column: 3/4;
grid-row: 1/3;
`

export const TituloCard = styled.h3`
border: 1px solid black;
grid-column: 1/4;
grid-row: 3/4;
height: 100%;
    margin: 0;
`

export const ConteudoCard = styled.p`
border: 1px solid black;
grid-column: 1/4;
grid-row: 4/5;
height: 100%;
    margin: 0;

`

export const ContainerTag = styled.div`
   display: flex;
   grid-column: 1/3;
   grid-row: 5/5;
   height: 100%;
   gap: 15px;

`

export const EditPost = styled.div`
    justify-self: end;
    height: 100%;
    margin: 0;
`
