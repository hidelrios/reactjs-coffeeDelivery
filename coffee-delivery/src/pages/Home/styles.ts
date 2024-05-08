import styled from "styled-components";

export const Container = styled.div`
  padding: 92px 20px;
  margin: 0 auto;
  max-width: 1160px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
`;

export const ContentCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 32px;
  row-gap: 40px;
  margin-top: 2rem;
`;

export const Banner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  align-items: center;
  gap: 56px;

  img#hero-bg {
    position: absolute;
    /* top: 0; */
    left: 0;
    max-height: 544px;
    width: 100%;
    object-fit: cover;
  } 
`;

export const BannerContent = styled.div``;

export const BannerImg = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.font["font-family"]["baloo"]};
  font-size: ${(props) => props.theme.font["font-size"]["titleXL"]};
  color: ${(props) => props.theme.color["base-title"]};
  margin-bottom: 0;
`;

export const SubTitle = styled.h1`
  font-family: ${(props) => props.theme.font["font-family"]["baloo"]};
  font-size: ${(props) => props.theme.font["font-size"]["titleL"]};
  color: ${(props) => props.theme.color["base-subtitle"]};
`;

export const Description = styled.p`
  font-family: ${(props) => props.theme.font["font-family"]["roboto"]};
  font-size: ${(props) => props.theme.font["font-size"]["textL"]};
  color: ${(props) => props.theme.color["base-subtitle"]};
  margin-top: 1rem;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 66px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const ItemDescription = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["roboto"]};
  font-size: ${(props) => props.theme.font["font-size"]["textM"]};
  color: ${(props) => props.theme.color["base-text"]};
`;
