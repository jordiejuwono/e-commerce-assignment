import { Container, Title, TitleContainer } from "./styles";
import cartButton from "../../assets/icons/ic_cart.svg";
import backButton from "../../assets/icons/ic_back.svg";
import historyButton from "../../assets/icons/ic_history.svg";
import { useNavigate } from "react-router-dom";

const index = ({ title, back }) => {
    const navigate = useNavigate();

    return (
        <Container>
            <TitleContainer>
              {back && (
                <img src={backButton} onClick={() => navigate(-1)} />
              )}
              <Title>{title}</Title>
            </TitleContainer>
        
            {!back && (
                <img src={historyButton} onClick={() => navigate("/history")} style={{width: "18px", height: "18px", marginRight: "16px"}} />
            )}

            {!back && (
                <img src={cartButton} onClick={() => navigate("/cart")} />
            )}
        </Container>
    )
};

export default index;