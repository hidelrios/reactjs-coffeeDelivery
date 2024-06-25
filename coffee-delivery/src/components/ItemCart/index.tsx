import {
  Actions,
  Container,
  Content,
  ContentPrice,
  Price,
  Title,
} from "./styles";
import { QuantityInput } from "../QuantityInput";
import { ItemRemove } from "../ItemRemove";
import { useCart } from "../../hooks/useCart";

type Props = {
  coffee: {
    quantity: number;
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};



export function ItemCart({coffee}: Props) {

  const { incrementItemQuantity, decrementItemQuantity, removeItem  } = useCart();
  //const [quantity, setQuantity] = useState(1);

  function incrementQuantity(itemId: string) {
    console.log("clicou");
    incrementItemQuantity(itemId);
  }

  function decrementQuantity(itemId: string) {
    console.log("clicou");
    decrementItemQuantity(itemId);
  }

  function handleRemoveItemCart(itemId: string) {
    console.log("clicou para remover");
    removeItem(itemId);
  }
  return (
    <Container>
      <img src={coffee.image} alt="" width={64} height={64} />
      <Content>
        <Title>{coffee.title}</Title>
        <Actions>
          <QuantityInput quantity={coffee.quantity} incrementQuantity={()=>incrementQuantity(coffee.id)} decrementQuantity={()=>decrementQuantity(coffee.id)}/>
          <ItemRemove removeItem={()=> handleRemoveItemCart(coffee.id)}/>
        </Actions>
      </Content>
      <ContentPrice>
        <Price> R$ {coffee.price}</Price>
      </ContentPrice>
    </Container>
  );
}
