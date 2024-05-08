import styled from "styled-components";

export const Container = styled.main`
  padding: 92px 20px;
  margin: 0 auto;
  max-width: 1160px;
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 102px;

  h1 {
    font-family: ${(props) => props.theme.font["font-family"]["baloo"]};
    font-size: ${(props) => props.theme.font["font-size"]["titleL"]};
    font-weight: bold;
    color: ${(props) => props.theme.color["yellow-dark"]};
  }
  section {
    width: 526px;
  }
  section > p {
    font-family: ${(props) => props.theme.font["font-family"]["roboto"]};
    font-size: ${(props) => props.theme.font["font-size"]["textL"]};
    color: ${(props) => props.theme.color["base-subtitle"]};
  }

  section > div {
    display: flex;
    flex-direction: column;
    padding: 40px;
    margin-top: 1rem;

    border: 1px solid;
    border-radius: 6px 36px;
    width: 100%;

    border-color: transparent;
    background-origin: border-box;
    background-image: ${({ theme }) =>
      `linear-gradient(to bottom right, ${theme.color.yellow}, ${theme.color.purple})`};
    gap: 32px;
  }

  p {
    font-family: ${(props) => props.theme.font["font-family"]["roboto"]};
    font-size: ${(props) => props.theme.font["font-size"]["textM"]};
    color: ${(props) => props.theme.color["base-subtitle"]};
  }

  span {
    color: ${(props) => props.theme.color["base-text"]};
    font-weight: 800;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
