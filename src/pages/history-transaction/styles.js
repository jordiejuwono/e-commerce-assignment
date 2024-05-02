import styled from 'styled-components';
import Card from '../../components/card';

export const Container = styled.div`
  padding: 0 16px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  flex: 1;
  overflow: auto;
`;

export const TotalPriceText = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: black;
    padding: 0 16px;
    text-align: right;
    margin: 0;
`;

export const TextMediumBold = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: black;
    padding: 0 20px;
    margin: 0;
`;

export const TextSmallGrey = styled.p`
    font-size: 10px;
    font-weight: 500;
    color: grey;
    padding: 0 16px;
    margin: 0;
    text-align: right;
`;