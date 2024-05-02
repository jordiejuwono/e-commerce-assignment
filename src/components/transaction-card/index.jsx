import { Image, Title, Price, Container, ButtonAdd, Quantity } from './styles';

const index = ({ image, title, price, className, quantity }) => (
  <Container className={className}>
    <Image src={image} />

    <Title>{title}</Title>
    <Quantity>Total Quantity: {quantity}</Quantity>
    <Price>Rp. {price * quantity},-</Price>
  </Container>
);

export default index;