import useProductStore from "../../stores/product-store"
import { ButtonBuy, CardStyled, Container, Contents, PriceFooter, TextEmpty, TotalPriceText } from "./styles";
import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";

const index = () => {
    const cartList = useProductStore(state => state.cart);
    const buyProducts = useProductStore(state => state.addToTransaction);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        var price = 0;
        cartList.forEach(element => {
            price += element.price;
        });
        setTotalPrice(price);
    });

    const handleBuyProducts = (items, totalPrice) => {
        var productItems = [];
        items.forEach(element => {
            productItems.push(element.title);
        });
        const products = {
          productsName: productItems,
          totalPrice: totalPrice,
        };
        console.log(products);
        buyProducts(products)
    }

    return (
        <>
            <Container>
                <Navbar back title={"Test"}/>
                <Contents>
                    {cartList.length === 0 ? <TextEmpty>Belum ada product<br></br>yang ditambahkan</TextEmpty> :
                    cartList.map((item, index) => (
                        <CardStyled 
                        key={String(index)}
                        {...item}
                        />
                    ))}
                </Contents>
                <PriceFooter>
                    <TotalPriceText>Total Price: Rp. {totalPrice},-</TotalPriceText>
                    <ButtonBuy onClick={() => handleBuyProducts(cartList, totalPrice)}>Buy</ButtonBuy>
                </PriceFooter>
            </Container>
        </>
    )
}

export default index;