import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  AddressForm,
  BoxCityUF,
  BoxNumberComplement,
  ButtonConfirmOrder,
  Cart,
  Container,
  ContentAddress,
  ContentCart,
  ContentFrame,
  ContentHeader,
  ContentHeaderInfo,
  ContentOrder,
  ContentPayment,
  ContentSpanDescription,
  ContentSpanTotal,
  ContentSpanValue,
  ContentValues,
  Description,
  Icon,
  Payment,
  TextPayment,
  Title,
} from "./styles";
import { theme } from "../../styles/theme/theme";
import { ItemCart } from "../../components/ItemCart";
import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCart } from "../../hooks/useCart";
import { coffees } from "../../../data.json";
import { TextInput } from "../../components/TextInput";
import { RadioInput } from "../../components/RadioInput";

type FormInputsData = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
};

const newOrder = z.object({
  cep: z.number({ invalid_type_error: "Informe o CEP" }),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z.string().min(1, "Informe a UF"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type OrderInfo = z.infer<typeof newOrder>;

const shippingPrice = 3.5;

export function Checkout() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputsData>({
    resolver: zodResolver(newOrder),
  });

  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  } = useCart();

  const selectedPaymentMethod = watch('paymentMethod')

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error("Invalid coffee.");
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  const handleOrderCheckout: SubmitHandler<FormInputsData> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkout(data)
  }
  return (
    <>
      <Container>
        <ContentOrder>
          <h3>Complete seu pedido</h3>
          <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
            <ContentAddress>
              <ContentHeader>
                <Icon>
                  <MapPinLine size={22} color={theme.color["yellow-dark"]} />
                </Icon>
                <ContentHeaderInfo>
                  <Title>Endereço de Entrega</Title>
                  <Description>
                    Informe o endereço onde deseja receber seu pedido
                  </Description>
                </ContentHeaderInfo>
              </ContentHeader>

              <AddressForm>
                <TextInput
                  placeholder="CEP"
                  type="number"
                  error={errors.cep}
                  {...register("cep", { valueAsNumber: true })}
                />
                <TextInput
                  placeholder="Rua"
                  error={errors.street}
                  {...register("street")}
                />
                <BoxNumberComplement>
                  <TextInput
                    placeholder="Número"
                    error={errors.number}
                    {...register("number")}
                  />
                  <TextInput
                    placeholder="Complemento"
                    optional
                    containerProps={{ style: { gridArea: "fullAddress" } }}
                    error={errors.fullAddress}
                    {...register("fullAddress")}
                  />
                </BoxNumberComplement>
                <BoxCityUF>
                  <TextInput
                    placeholder="Bairro"
                    error={errors.neighborhood}
                    {...register("neighborhood")}
                  />
                  <TextInput
                    placeholder="Cidade"
                    error={errors.city}
                    {...register("city")}
                  />
                  <TextInput
                    placeholder="Uf"
                    error={errors.state}
                    {...register("state")}
                  />
                </BoxCityUF>
              </AddressForm>
            </ContentAddress>

            <ContentPayment>
              <ContentHeader>
                <Icon>
                  <CurrencyDollar
                    size={22}
                    color={theme.color["purple-dark"]}
                  />
                </Icon>
                <ContentHeaderInfo>
                  <Title>Pagamento</Title>
                  <Description>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </Description>
                </ContentHeaderInfo>
              </ContentHeader>
              <Payment>
                <RadioInput
                  isSelected={selectedPaymentMethod === "credit"}
                  {...register("paymentMethod")}
                  value="credit"
                >
                  <CreditCard size={22} color={theme.color["purple"]} />
                  <TextPayment>CARTÃO DE CRÉDITO</TextPayment>
                </RadioInput>
                <RadioInput
                  isSelected={selectedPaymentMethod === "debit"}
                  {...register("paymentMethod")}
                  value="debit"
                >
                  <Bank size={22} color={theme.color["purple"]} />
                  <TextPayment>CARTÃO DE DEBITO</TextPayment>
                </RadioInput>
                <RadioInput
                  isSelected={selectedPaymentMethod === "cash"}
                  {...register("paymentMethod")}
                  value="cash"
                >
                  <Money size={22} color={theme.color["purple"]} />
                  <TextPayment>DINHEIRO</TextPayment>
                </RadioInput>
              </Payment>
            </ContentPayment>
          </form>
        </ContentOrder>
        <ContentCart>
          <h3>Cafés Selecionados</h3>
          <Cart>
            {coffeesInCart.map((coffee) => (
              <ItemCart key={coffee.id} coffee={coffee} />
            ))}

            <ContentFrame>
              <ContentValues>
                <ContentSpanDescription>Total Itens</ContentSpanDescription>
                <ContentSpanValue>R$ {totalItemsPrice}</ContentSpanValue>
              </ContentValues>
              <ContentValues>
                <ContentSpanDescription>Entrega</ContentSpanDescription>
                <ContentSpanValue>R$ {shippingPrice}</ContentSpanValue>
              </ContentValues>
              <ContentValues>
                <ContentSpanTotal>Total</ContentSpanTotal>
                <ContentSpanTotal>
                  R$ {totalItemsPrice + shippingPrice}
                </ContentSpanTotal>
              </ContentValues>
            </ContentFrame>
            <ButtonConfirmOrder type="submit" form="order">CONFIRMAR PEDIDO</ButtonConfirmOrder>
          </Cart>
        </ContentCart>
      </Container>
    </>
  );
}
