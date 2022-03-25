import React from 'react';
import {
    InfoContainer,
    InfoWrapper,
    Column1,
    Column2,
    InfoTablaSubt,
    InfoTablaData,
    TopLine,
    Heading,
    Subtitle
} from './InfoElements.js';

const InfoSection = () => {
  return (
    <div>
        <InfoContainer>
            <InfoWrapper>
                <Column1>
                    <TopLine>Información Nutrimental</TopLine>
                    <Heading>Vitalínea® Bebible Guayaba 217gr 
                        Valor promedio por porción de 217gr 
                        Porciones por envase: 1
                    </Heading>
                    <Subtitle>Ingredientes:
                        Leche descremada pasteurizada y/o 
                        reconstituida pasteurizada de vaca. 
                        3.5% preparado de fruta guayaba 
                        (acesulfame K y sucralosa (27.2mg/
                        100g)), crema, almidón modificado, 
                        maltodextrina y cultivos lácticos.
                    </Subtitle>
                </Column1>
                <Column2>
                        <InfoTablaSubt>
                            <li>Contenido energético kj/kcal</li>
                            <li>Proteínas(g)</li>
                            <li>Grasas (Lipidos) (g)</li>
                            <li>Grasas Saturadas (g)</li>
                            <li>Carbohidratos (Hidratos de carbono) (g)</li>
                            <li>Azúcares (g)</li>
                            <li>Azúcares añadidos (g)</li>
                            <li>Fibra dietética (g)</li>
                            <li>Sodio (mg)</li>
                            <li>Calcio (mg)</li>
                            <li>%VNR*</li>
                        </InfoTablaSubt>
                        <InfoTablaData>
                            <li>413,2/97.9</li>
                            <li>5.3</li>
                            <li>2.1</li>
                            <li>1.4</li>
                            <li>12.4</li>
                            <li>7.7</li>
                            <li>0.1</li>
                            <li>0.0</li>
                            <li>92.7</li>
                            <li>199.6</li>
                            <li>22</li>
                        </InfoTablaData>
                </Column2>
            </InfoWrapper>
        </InfoContainer>
    </div>
  )
}

export default InfoSection;