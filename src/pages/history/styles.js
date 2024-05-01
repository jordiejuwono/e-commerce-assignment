import styled from 'styled-components';

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

export const CardContainer = styled.div`
  margin: 0 1%;
  padding: 8px;
  box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.3);
`;

export const MarginSpace = styled.div`
  margin-top: 8px;
`;

export const TextEmpty = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 100px;
  color: grey;
  font-weight: 500;
`;

export const TextSmallBlack = styled.p`
  color: black;
  font-size: 10px;
  margin: 0;
`;

export const TextMediumBlack = styled.p`
  color: black;
  font-size: 12px;
  margin: 0;
`;

export const TextMediumBlackBold = styled(TextMediumBlack)`
  font-weight: 600;
`;