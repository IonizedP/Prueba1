import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const HeroContainer = styled.div`
    background-image: linear-gradient(to bottom, #f9e6e6, #ebacac);
    display: grid;
    height: 100%;
    position: relative;
    justify-content: center;
    z-index: 1;
    width: 100%;
    height: 700px;

    @media screen and (max-width: 960px) {
        background-image: linear-gradient(to bottom, #f9e6e6, #ebacac);
        display: inline-flex;
        width: 100%;
    }


    @media screen and (max-width: 820px) {
        display: inline-flex;
        width: 100%;
    }

    @media screen and (max-width: 620px) {
        display: inline-flex;
        width: 100%;
    }   
`;

export const HeroContent = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 4fr 6fr;
    align-items: center;
`;

export const HeroImgBeb = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    z-index: 10;
`;

export const HeroImgBbb = styled.div`
    margin-left: 130px;
`;

export const HeroBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HeroSectBut = styled.div`
    display: flex;
    margin-top: 80px;
    margin-left: 50px;
`;

export const HeroH1 = styled.h1`
    color: #78246d;
    font-size: 44px;
    font-weight: 300;
    margin-top: 15px;
    margin-left: 50px;

    @media screen and(max-width: 768px) {
        font-size: 44px
    }

    @media screen and(max-width: 480px) {
        font-size: 36px;
    }
`;

export const HeroP = styled.p`
    color: #000;
    font-size: 18px;
    font-weight: 300;
    width: 66%;
    margin: 25px 15px 25px 50px;

    @media screen and(max-width: 768px){
        font-size: 18px
    }

    @media screen and(max-width: 480px){
        font-size: 14px;
    }
`;

export const HeroH4 = styled.h4`
    color: #000;
    font-weight: bold;
`;


export const Button = styled.button`
    font-size: 15px;
    width: 70px;
    padding: 4px;
    margin-left: 20px;
    border-radius: 11px;
    border: 1px solid #f0aeae;
    background: transparent;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        background: #ee9595;
        border: none;
    }
`;

export const Button1 = styled(LinkR)`
    background-color: #78246d;
    color: #fff;
    margin: 5px;
    width: 35%;
    padding: 10px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    margin-left: 50px;
`;

export const HeroLogos = styled.div`
    display: flex; 
    margin-left: 50px;
`;

export const HeroLogo = styled.div`
    margin: 20px 25px;
`;

export const BFlecha = styled.div`
    display: flex;
    margin-left: 100px;
    margin-top: 100px;
`;

export const ButtonFlecha = styled.button`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: none;
    background: #78246d;
`;