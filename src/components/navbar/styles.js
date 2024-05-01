import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: 'space-between';
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    height: 56px;
`;

export const TitleContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: horizontal;
`;

export const Title = styled.h1`
    font-size: 20px;
    color: #000000;
    margin-left: 8px;
`;
