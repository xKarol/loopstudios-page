import styled from "styled-components";
import backgroundImage from "../../assets/mobile/image-hero.jpg";

export const Background = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #fafafa;
  background: url(${backgroundImage});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 45px;
  line-height: 1.1;
  border: 5px solid ${(props) => props.theme.colors.white};
  padding: 25px;
  text-transform: uppercase;
  max-width: calc(100% - 40px);
  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.second};
`;
