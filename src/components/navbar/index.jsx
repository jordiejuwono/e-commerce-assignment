import { Container, Title } from "./styles";
import cartButton from "../../assets/icons/ic_cart.svg";
import { useNavigate } from "react-router-dom";

const index = ({ title }) => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title>{title}</Title>
            
            <img src={cartButton} onClick={() => navigate("/cart")} />
        </Container>
    )
};

export default index;