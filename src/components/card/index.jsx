import { Image, Title, Price, Container, ButtonAdd } from './styles';

const index = ({ image, title, price, className, onClickAdd, buttonAdd, quantity, showMinusButton, onMinusToggled, onPlusToggled, showRemoveButton, onRemoveToggled }) => (
  <Container className={className}>
    <Image src={image} />

    <Title>{title}</Title>
    <Price>Rp. {price},-</Price>
    {buttonAdd && (
        <ButtonAdd onClick={onClickAdd}>Add to Cart</ButtonAdd>
    )}
    {!buttonAdd && (
        <div style={{display: "flex", flexDirection: "horizontal", alignItems: "center", justifyContent: "right", margin: "12px"}}>
            {showRemoveButton && (
                <button onClick={onRemoveToggled} style={{height: "24px", display: "flex", justifyContent: "center", textAlign: "center", padding: "0", backgroundColor: "red", color: "white", padding: "0 8px"}}>Remove</button>
            )}
            {showMinusButton && (
                <button onClick={onMinusToggled} style={{width: "24px", height: "24px", display: "flex", justifyContent: "center", textAlign: "center", padding: "0"}}>-</button>
            )}
            <p style={{fontSize: "12px", color: "black", margin: "0 8px"}}>{quantity}</p>
            <button onClick={onPlusToggled} style={{width: "24px", height: "24px", display: "flex", justifyContent: "center", textAlign: "center", padding: "0"}}>+</button>
        </div>
    )}
  </Container>
);

export default index;