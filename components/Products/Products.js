import React from 'react';
import Icon1 from '../../assets/media/img-vitalinea-griego.png';
import Icon2 from '../../assets/media/img-vitalinea-sin-azucar.png';
import Icon3 from '../../assets/media/img-vitalinea-bebible.png';
import {
    ProductsContainer,
    ProductsTitle,
    ProductsContent,
    ProductsCard,
    ProductsImg,
    ProductsH4_1,
    ProductsH4_2,
    ProductsH4_3
} from './ProductsElements.js';



const Products = () => {
  return (
    <>
        <ProductsContainer>
            <ProductsTitle>LA FAMILIA VITALÍNEA</ProductsTitle>
            <ProductsContent>
                <ProductsCard>
                    <ProductsImg>
                        <img src={Icon1} alt='griego' />
                    </ProductsImg>
                    <ProductsH4_1>Vitalínea Griego</ProductsH4_1>
                </ProductsCard>
                <ProductsCard>
                    <ProductsImg>
                        <img src={Icon2} alt='sin-azucar' />
                    </ProductsImg>
                    <ProductsH4_2>Vitalínea Sin Azucar</ProductsH4_2>
                </ProductsCard>
                <ProductsCard>
                    <ProductsImg>
                        <img src={Icon3} alt='bebible' />
                    </ProductsImg>
                    <ProductsH4_3>Vitalínea Bebible</ProductsH4_3>
                </ProductsCard>
            </ProductsContent>
        </ProductsContainer>
    </>
  )
}

export default Products;