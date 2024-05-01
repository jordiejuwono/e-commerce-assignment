import useProductStore from "../../stores/product-store"
import { ButtonBuy, CardStyled, Container, Contents, PriceFooter, TextEmpty, TotalPriceText } from "./styles";
import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";

const index = () => {
    const cartList = useProductStore(state => state.cart);
    const buyProducts = useProductStore(state => state.addToTransaction);
    const addQuantity = useProductStore(state => state.addCartQuantity);
    const removeQuantity = useProductStore(state => state.removeCartQuantity);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        var price = 0;
        cartList.forEach(element => {
            price += (element.price * element.quantity);
        });
        setTotalPrice(price);
    }, [cartList, totalPrice]);

    const handleAddQuantity = (index) => {
        addQuantity(index);
        setTotalPrice(totalPrice + cartList[index].price);
    };

    const handleRemoveQuantity = (index) => {
        removeQuantity(index);
        setTotalPrice(totalPrice - cartList[index].price);
    };

    const handleBuyProducts = (items, totalPrice) => {
        var productItems = [];
        items.forEach(element => {
            productItems.push(element.title);
        });
        const products = {
          id: uuidv4(),
          productsName: productItems,
          totalPrice: totalPrice,
          createdAt: moment().format("DD-MM-YYYY hh:mm:ss")
        };
        buyProducts(products)
        alert("Pembelian Berhasil!")
        navigate(-1)
    }

    return (
        <>
            <Container>
                <Navbar back title={"Cart"}/>
                <Contents>
                    {cartList.length === 0 ? <TextEmpty>Belum ada product<br></br>yang ditambahkan</TextEmpty> :
                    cartList.map((item, index) => (
                        <CardStyled 
                        key={String(index)}
                        showMinusButton={item.quantity > 1}
                        onPlusToggled={() => handleAddQuantity(index)}
                        onMinusToggled={() => handleRemoveQuantity(index)}
                        quantity={String(item.quantity)}
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