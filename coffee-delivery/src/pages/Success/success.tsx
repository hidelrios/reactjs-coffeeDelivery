import { IconItem } from "../../components/IconItem";
import { Container, Info } from "./styles";
import imgSuccess from "../../../public/static/images/success.svg";
import { useParams } from 'react-router-dom'
import { useCart } from "../../hooks/useCart";
export function Success() {
  const { orders } = useCart();
  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === Number(orderId));
  const paymentMethod = {
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    cash: "Dinheiro",
  };

  if (!orderInfo?.id) {
    return null
  }


  return (
    <>
      <Container>
        <section>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <div>
            <Info>
              <IconItem icon="map_pin" color="purple" />
              <p>
                Entrega em{" "}
                <span>
                  {orderInfo.street} , {orderInfo.number}
                </span>
                {" "}{orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
              </p>
            </Info>
            <Info>
              <IconItem icon="timer" color="yellow" />
              <p>
                Previsão de entrega <span>20 min - 30 min</span>
              </p>
            </Info>
            <Info>
              <IconItem icon="dollar" color="yellow-dark" />
              <p>
                Pagamento na entrega <br />
                <span>{paymentMethod[orderInfo.paymentMethod]}</span>
              </p>
            </Info>
          </div>
        </section>
        <section>
          <img src={imgSuccess} alt="" />
        </section>
      </Container>
    </>
  );
}
