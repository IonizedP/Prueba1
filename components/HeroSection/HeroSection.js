import React from 'react';
import ImageBackg from '../../assets/media/bg-familia-vitalinea.png';
import ImageBebibleFresa from '../../assets/media/img-bote-fresa.png';
import ImageSelloAval from '../../assets/media/img-sello-avalado.png';
import Image100kcal from '../../assets/media/img-100-kcal.png';
import ImageFlecha from '../../assets/media/flecha.png';
import {
  HeroContainer,
  HeroContent,
  HeroImgBeb,
  HeroImgBbb,
  HeroBtnWrapper,
  HeroSectBut,
  HeroH1,
  HeroH4,
  HeroP,
  HeroLogos,
  HeroLogo,
  Button,
  Button1,
  ButtonFlecha,
  BFlecha
} from './HeroElements.js';



const HeroSection = () => {

  return (
    <HeroContainer>
      <HeroContent>
        <HeroImgBeb>
          <HeroImgBbb>
            <img src={ImageBebibleFresa} alt='bebible fresa' />
          </HeroImgBbb>
        </HeroImgBeb>
        <HeroBtnWrapper>
          <HeroSectBut>
            <HeroH4>Sabor: </HeroH4>
            <Button to='/'>Fresa</Button>
            <Button to='/'>Guayaba</Button>
            <Button to='/'>Toronja</Button>
          </HeroSectBut>
          <HeroH1>Vitalinea  Bebible Fresa 217gr.</HeroH1>
          <HeroP>¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción
            si eres de las personas que siempre están activas y quiere probar algo              sano, rico y práctico.</HeroP>
          <Button1 to='/https://super.walmart.com.mx/Yogurt/Yoghurt-bebible-Danone-Vitalinea-fresa-sin-azucar-217-g/00750103239864'>
            Comprar en Walmart
          </Button1>
          <HeroLogos>
            <HeroLogo>
              <img src={ImageSelloAval} alt='selloa' />
            </HeroLogo>
            <HeroLogo>
              <img src={Image100kcal} alt='kcal' />
            </HeroLogo>
          </HeroLogos>
          <BFlecha>
            <ButtonFlecha>
              <img src={ImageFlecha} alt='flecha' />
            </ButtonFlecha>
          </BFlecha>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;