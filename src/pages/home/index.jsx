import Navbar from '../../components/navbar/index';
import { Container } from './styles';
import useProductStore from '../../stores/product-store';
import Card from '../../components/card';

const index = () => {
    const listProduct = useProductStore(state => state.products);
    const addToCart = useProductStore(state => state.addToCart);

    const handleAdd = (item) => {
        addToCart(item)
    }

    return (
        <div>
        <Navbar title="M/O Shop" />

        <Container>
            {listProduct.map ((item, index) => (
                <Card 
                  buttonAdd
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  key={String(index)}
                  onClickAdd={() => handleAdd(item)}
                />
            ))}
        </Container>
        </div>
    )
}

export default index;