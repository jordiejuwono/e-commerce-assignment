import { Image, Title, Price, Container, ButtonAdd } from './styles';

const index = ({ image, title, price, className, onClickAdd, buttonAdd }) => (
  <Container className={className}>
    <Image src={image} />

    <Title>{title}</Title>
    <Price>Rp. {price},-</Price>
    {buttonAdd && (
        <ButtonAdd onClick={onClickAdd}>Add to Cart</ButtonAdd>
    )}
  </Container>
);

export default index;