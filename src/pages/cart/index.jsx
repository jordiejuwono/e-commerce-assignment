import useProductStore from "../../stores/product-store"
import { CardStyled, Container } from "./styles";

const index = () => {
    const cartList = useProductStore(state => state.cart);

    return (
        <>
            <Container>
                {cartList.map((item, index) => (
                    <CardStyled 
                      key={String(index)}
                      {...item}
                    />
                ))}
            </Container>
        </>
    )
}

export default index;