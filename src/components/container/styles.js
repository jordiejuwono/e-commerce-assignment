import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    min-height: 100vh;
    background-color: #FFA500;
`;

export const Content = styled.div`
    background-color: #FDFDFD;
    width: 45%;

    @media screen and (max-width: 450px) {
      width: 100%;
    }
`;