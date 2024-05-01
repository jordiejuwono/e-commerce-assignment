import styled from 'styled-components';
import Card from '../../components/card';

export const Container = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Contents = styled.div`
  flex: 1;
  overflow: auto;
`;

export const CardStyled = styled(Card)`
  margin: 0;
  margin-bottom: 16px;
  width: 100%;
`;

export const TextEmpty = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 100px;
  color: grey;
  font-weight: 500;
`;

export const PriceFooter = styled.footer`
  margin: 0;
  color: black;
  display: flex;
  flex-direction: horizontal;
  justify-content: space-between;
  align-items: center;
`;

export const TotalPriceText = styled.p`
    font-size: 16px;
    font-weight: 600;
`;

export const ButtonBuy = styled.button`
    background-color: orange;
    height: 40px;
`;