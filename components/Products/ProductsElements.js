    import styled from 'styled-components';

export const ProductsContainer= styled.div`
    background-image: linear-gradient(to bottom, #f9e6e6, #ebacac);
    height: 700px;
    display: grid;
    grid-template-rows: 1fr 4fr;
    position: relative;
    justify-content: center;
    z-index: 1;
    width: 100%;
    font-family: 'OpenSans-Light';

    @media screen and(max-width: 768px) {
        height: 1100px;
    }

    @media screen and(max-width: 480px) {
        height: 1300px;
    }
`;

export const ProductsTitle = styled.div`
    color: #78246d;
    font-size: 44px;
    font-weight: 300;
    display: flex;
    width: 100%;
    height: 50px;
    align-content: center;
    margin: 70px 25% 0 25%;
`;

export const ProductsContent = styled.div`
    background: url('../../assets/media/bg-familia-vitalinea.png');
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: end;
    justify-items: center;

    @media screen and(max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and(max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProductsCard = styled.div`
    display: grid;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProductsH4_1 = styled.div`
    color: #78246d;
    margin: 20px 60px 40px 60px;
    justify-content: center;
    text-align: center;
`;

export const ProductsH4_2 = styled.div`
    color: #78246d;
    margin: 20px 60px 40px 60px;
    justify-content: center;
    text-align: center;
`;

export const ProductsH4_3 = styled.div`
    color: #78246d;
    margin: 20px 60px 40px 60px;
    justify-content: center;
    text-align: center;
`;


export const ProductsImg = styled.div`
    display: flex;
`;