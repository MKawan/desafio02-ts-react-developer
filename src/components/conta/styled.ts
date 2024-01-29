import {styled, createGlobalStyle} from "styled-components";

// export default createGlobalStyle`
//     @font-face {
//         font-family: 'Bungee';
//         src: local('Bungee'),
//         url('https://fonts.googleapis.com/css2?family=Bungee&display=swap')
//         format('ttf');
//         font-weight: 400;
//         font-style: normal;
//     }
// `

export const TelaFundo = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    align-items: flex-start;
    height: 100vh;
    justify-items: center;
    justify-content: center;
    background: linear-gradient(to top, #131313, #212121);
    gap: 1rem;

    @media screen and (min-width: 380px){
        
    }
    @media screen and (min-width: 576px){
        
    }

`
export const titleBank = styled.div`
    font-family: 'Bungee', sans-serif;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 98%;

        /* Agora, colocando um degradê */
    /* Primeiro passo: definir um degradê como fundo */
    background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
  
    /* Segundo passo: apagar do fundo tudo que não estiver imediatamente atrás de texto */
    background-clip: text;
    -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */

    /* Terceiro passo: apagar o texto, deixando apenas o fundo atrás dele */
    -webkit-text-fill-color: transparent;

    /* Cor que contraste com o degradê, caso o navegador não suporte background-clip: text */
    color: black;
  
    gap: 1rem;;
    font: 400;
    margin: 1rem;
`
export const AreaUser = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: rgba(58, 58, 58,0.25);
    color: #ffff;
    font-size: 1.8rem;
    
`
export const AreaUserQuestion = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 100%;
    
    
`
export const AreaUserQuestionIcon = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    /* border: 1px solid white; */
    width: auto;
    margin-right: 1rem;
    gap: 1rem;

`

export const ImgUser = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    background-size: cover;
    margin: 0.5rem;
    opacity: none;
    box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
`

export const AreaContaUser = styled.div`
    display: inline-flex;
    flex-direction: row;
    height: auto;
    width: 0 auto;
    gap: 0.5rem;
    margin: 0.5rem;
`
export const AreaIcons = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
    border-radius: 5%;
    color: #fff;
    &:hover{
        width: 7rem;
        height: 7rem;
    }
    
`
export const AreaIcon = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
`

export const logoIcon = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 2rem;
    background-size: cover;

`
/* Card informações bancarias */
export const CardInfor = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    height: 10rem;
    width: 16rem;
    box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
    border-radius: 5%;
`
export const AreaInforCard = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 3rem;
    width: 15rem;
    margin: 1rem;
`
export const AreaInforCardText = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    height: 6rem;
    width: 15rem;
    color: #fff;
    font-size: 1rem;
    margin: 1rem;
`

export const ButtonSair = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    width: 4rem;
    height: 2rem;
    box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
    border-radius: 5%;

`
export const IconsEye = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Balance = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: auto;
    height: 2rem;
    font-size: 1.2rem;
`
export const TopTitle = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
`