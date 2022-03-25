import styled from "styled-components";
import { Link as LinkS } from 'react-scroll';

export const Footer = styled.div`
    width: 100%;
    max-width: 1080px;
    background-color: #fff;
    display: flex;
`

export const FooterContainer = styled.div`
    display: flex;
    max-width: 1080px;
    max-height: 1920px;
    justify-content: flex-start;
`

export const FooterWrap = styled.div`
    max-width: 1100px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin: 0 auto 0 auto;
    
    @media screen and(max-width: 820px) {
        grid-template-columns: 1fr;
    }
`

export const FooterLogo1 = styled.div`
    margin: 40px 50px 0 60px;
    padding-top: 15px;
`

export const FooterLinks = styled(LinkS)`
    margin: 40px 80px 40px 30px;
    text-align: left;
    display: grid;
    grid-template-rows: 1fr 1fr;
`

export const FooterLinkItems = styled.div`
    max-width: 100%;
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

export const FooterLink = styled.div`
    color: #000;
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        transition: 200ms ease-in;
    }
`

export const WebSiteRights = styled.div`
    font-weight: bold;
    font-size: 12px;
`

export const FooterLogo2 = styled.div`
    margin: 20px 50px 0 200px;
    padding-top: 30px;
    display: flex;
    height: 60px;

    @media screen and(max-width: 768px) {
        flex-direction: column;
    }
`