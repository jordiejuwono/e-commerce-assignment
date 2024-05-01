import Navbar from "../../components/navbar";
import useProductStore from "../../stores/product-store";
import { CardContainer, Container, Contents, MarginSpace, TextEmpty, TextMediumBlack, TextMediumBlackBold, TextSmallBlack } from "./styles";


const index = () => {
  const historyList = useProductStore((state) => state.transactionHistories);

  return (
    <>
    <Container>
        <Navbar back title={"Transactions"}/>
        <Contents>
            {historyList.length === 0 ? <TextEmpty>Belum ada pembelian</TextEmpty> :
                historyList.map((item, index) => (
                    <CardContainer key={String(index)}>
                        <TextSmallBlack>Transaction ID: {item.id}</TextSmallBlack>
                        <MarginSpace></MarginSpace>
                        <TextMediumBlackBold>Product List:</TextMediumBlackBold>
                        {item.products.map((item, index) => (
                            <TextMediumBlack key={String(index)}>{index + 1}. {item.title} x {item.quantity}</TextMediumBlack>
                        ))}
                        <MarginSpace></MarginSpace>
                        <TextMediumBlackBold style={{textAlign: "right"}}>Total Payment: Rp. {item.totalPrice},-</TextMediumBlackBold>
                        <TextSmallBlack style={{textAlign: "right"}}>Transaction Date: {item.createdAt}</TextSmallBlack>
                    </CardContainer>
                ))}
        </Contents>
    </Container>
    </>
  )
}

export default index;