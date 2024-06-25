import { IconItem } from "../../components/IconItem";
import imgBanner from "../../assets/coffee-banner.svg";
import imgBackground from "../../assets/hero-bg.svg";


import {
  Banner,
  BannerContent,
  BannerImg,
  Container,
  Content,
  ContentCoffee,
  Description,
  Item,
  ItemDescription,
  Items,
  SubTitle,
  Title,
} from "./styles";
import { CardCoffee } from "../../components/CardCoffee";
import { coffees } from '../../../data.json'


export function Home() {
  return (
    <>
      <Container>
        <Banner>
          <BannerContent>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Description>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Description>
            <Items>
              <Item>
                <IconItem icon="cart" color="yellow-dark" />
                <ItemDescription>Compra simples e segura</ItemDescription>
              </Item>
              <Item>
                <IconItem icon="package" color="base-subtitle" />
                <ItemDescription>
                  Embalagem mantém o café intacto
                </ItemDescription>
              </Item>
              <Item>
                <IconItem icon="timer" color="yellow" />
                <ItemDescription>Entrega rápida e rastreada</ItemDescription>
              </Item>
              <Item>
                <IconItem icon="coffee" color="purple" />
                <ItemDescription>
                  O café chega fresquinho até você
                </ItemDescription>
              </Item>
            </Items>
          </BannerContent>
          <BannerImg>
            <img src={imgBanner} alt="" />
          </BannerImg>
          <img src={imgBackground} id="hero-bg" />

        </Banner>
        <Content>
          <SubTitle>Nossos Cafés</SubTitle>
          <ContentCoffee>
          {coffees.map((coffee) => (
            <CardCoffee
              key={coffee.id}
              coffee={coffee}
            />
          ))}
          </ContentCoffee>


        </Content>
      </Container>
    </>
  );
}
