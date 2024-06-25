import { ShoppingCart } from "@phosphor-icons/react";
import {
  Cart,
  Coin,
  Container,
  ContentCart,
  ContentCoffee,
  ContentInfo,
  Description,
  Price,
  Title,
} from "./styles";
import { theme } from "../../styles/theme/theme";
import { QuantityInput } from "../QuantityInput";
import { useEffect, useState } from "react";
import {useCart}  from "../../hooks/useCart";

type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export function CardCoffee({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const { addItem } = useCart();

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function handleAddItem(): void {
    addItem({ id: coffee.id, quantity });
    setIsItemAdded(true);
    setQuantity(1);
    console.log("added");
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <Container>
      <ContentCoffee>
        <img src={coffee.image} alt="" />
      </ContentCoffee>
      <ContentInfo>
        <Title>{coffee.title}</Title>
        <Description>{coffee.description}</Description>
      </ContentInfo>
      <ContentCart>
        <Price>
          <Coin>R$</Coin> {coffee.price}{" "}
        </Price>
        <QuantityInput
          quantity={quantity}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
        <Cart onClick={handleAddItem}>
          <ShoppingCart size={22} color={theme.color.white} />
        </Cart>
      </ContentCart>
    </Container>
  );
}
