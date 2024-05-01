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

export const TextEmpty = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 100px;
  color: grey;
  font-weight: 500;
`;