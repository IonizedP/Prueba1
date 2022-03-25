import React from 'react';
import ImgLogoDanFt from '../../assets/media/img-logo-danone.png';
import ImgLogFoot from '../../assets/media/img-logo-footer.png';
import {
    FooterContainer,
    FooterWrap,
    FooterLinks,
    FooterLinkItems,
    FooterLogo1,
    FooterLogo2,
    FooterLink,
    WebSiteRights
} from './FooterElements.js';

const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterWrap>
                <FooterLogo1 to='/http://www.grupodanone.com.mx/'>
                    <img src={ImgLogoDanFt} alt ='Danone' />
                </FooterLogo1>
                <FooterLinks>
                    <FooterLinkItems>
                        <FooterLink to='/http://www.vitalinea.com.mx/terminos-y-condiciones/'>Terminos y Condiciones | </FooterLink>                                
                        <FooterLink to='/http://www.vitalinea.com.mx/politicas-de-privacidad/'> Politicas de Privacidad | </FooterLink>
                        <FooterLink to='/http://www.vitalinea.com.mx/aviso-de-provacidad/'> Aviso de Privacidad</FooterLink>
                    </FooterLinkItems>
                    <WebSiteRights>Danone de México ® {new Date().getFullYear()}  
                        Todos los derechos reservados {new Date().getFullYear()} 
                    </WebSiteRights>
                </FooterLinks>
                <FooterLogo2 to='/'>
                    <img src={ImgLogFoot} alt ='logofooter' />
                </FooterLogo2>
            </FooterWrap>
        </FooterContainer>
    </>
  )
}

export default Footer;