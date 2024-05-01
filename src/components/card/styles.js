import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 46%;
  margin: 0 2%;
  margin-bottom: 12px;
  overflow: hidden;
  box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.1);
`;

export const Image = styled.img`
    width: 100%;
    height: 130px;
    object-fit: cover;
`;

export const Title = styled.p`
    font-size: 14px;
    margin: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #000000;
    font-weight: 600;
    margin-top: 8px;
`;

export const Price = styled.p`
  font-size: 12px;
  color: #000000;
  font-weight: 500;
  margin: 5px 0;
`;

export const ButtonAdd = styled.button`
  background-color: #FF8C00;
  margin: 12px;
  display: block;
  margin-left: auto;
  margin-right: 12px;
`;