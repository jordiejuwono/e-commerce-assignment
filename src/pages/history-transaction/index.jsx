import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";
import useProductStore from "../../stores/product-store";
import TransactionCard from "../../components/transaction-card";
import { Container, TextMediumBold, TotalPriceText, TextSmallGrey } from "./styles";


const index = () => {
  const location = useLocation();
  const  transactionId = location.state.id;
  var currentTransaction = useProductStore((state) => state.transactionHistories).find(transaction => transaction.id === transactionId);

  return (
    <>
        <Navbar back title={"Transaction Details"}/>
        <TextSmallGrey>Transaction ID: {currentTransaction.id}</TextSmallGrey>
        <TextSmallGrey>Transaction Date: {currentTransaction.createdAt}</TextSmallGrey>
        <TotalPriceText>Total Price: Rp. {currentTransaction.totalPrice},-</TotalPriceText>
        <TextMediumBold style={{margin: "12px 0"}}>Products :</TextMediumBold>
        <Container>
            {currentTransaction.products.map((item, index) => (
              <TransactionCard 
                key={String(index)}
                {...item}
              />
            ))}
        </Container>
    </>
  )
}

export default index;