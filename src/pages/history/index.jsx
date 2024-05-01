import { useEffect } from "react";
import useProductStore from "../../stores/product-store";
import { Container, Contents, TextEmpty } from "./styles";


const index = () => {
  const historyList = useProductStore((state) => state.transactionHistories);
  
useEffect(() => {
    console.log(historyList.length);
})

  return (
    <>
    <Container>
        <Contents>
            {historyList.length === 0 ? <TextEmpty>Belum ada pembelian</TextEmpty> :
                historyList.map((item, index) => (
                    <p key={String(index)} style={{color: "black"}}>{item.totalPrice}</p>
            ))}
        </Contents>
    </Container>
    </>
  )
}

export default index;