import { Image, Title, Price, Container, ButtonAdd } from './styles';

const index = ({ image, title, price, className, onClickAdd }) => (
  <Container className={className}>
    <Image src={image} />

    <Title>{title}</Title>
    <Price>Rp. {price},-</Price>
    <ButtonAdd onClick={onClickAdd}>Add to Cart</ButtonAdd>
  </Container>
);

export default index;