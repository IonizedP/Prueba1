import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #000;
    background: #fff;

    @media screen and(max-width: 768px) {
        padding: 100px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 500px;
    width: 100%;
    justify-content: center;
`;

export const Column1 = styled.div`
    display: flex;;
    flex-direction: column;
    align-items: flex-end;
`;

export const TopLine = styled.div`
    color: #78246d;
    font-size: 32px;
    text-align: left;
    font-weight: 300;
    display: table-cell;
    margin-top: 90px;
    margin-right: 50px;
`;


export const Heading = styled.div`
    color: #000;
    display: table-cell;
    font-size: 14px;
    font-weight: bold;
    margin-top: 15px;
    margin-left: 60px;
    padding: 0 8rem;

    @media screen and(max-width: 768px) {
        font-size: 12px;
    }
`;

export const Subtitle  = styled.div`
    color: #000;
    font-size: 14px;
    font-weight: 300;
    display: table-cell;
    margin-top: 20px;
    margin-left: 90px;
    padding: 0 6rem;
`;


export const Column2 = styled.div`
    background: #fafafa;
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    list-style: none;
    color: #78246d;
    font-weight: 300;
    font-size: 14px;
    margin-top: 100px;
    margin-right: 180px;
    line-height: 1.9;
`;

export const InfoTablaSubt = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
`;

export const InfoTablaData = styled.div`
    text-align: left;
    margin-left: 30px;
`;