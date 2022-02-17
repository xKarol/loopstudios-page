import styled from "styled-components";
import { device } from "../styles/breakpoints";

export const Background = styled.section`
  position: relative;
  height: 100vh;
  min-height: 550px;
  max-height: 650px;
  width: 100%;
  background-color: #fafafa;
  background-size: cover;
  display: flex;
  background-image: url("/images/mobile/image-hero.jpg");
  @media ${device.tablet} {
    background-image: url("/images/desktop/image-hero.jpg");
  }
`;

export const Text = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 45px;
  line-height: 1.1;
  border: 2px solid ${(props) => props.theme.colors.white};
  padding: 25px;
  text-transform: uppercase;
  max-width: calc(100% - 40px);
  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.second};
  align-self: flex-end;
  margin: auto;
  max-width: 400px;

  @media ${device.tablet} {
    max-width: 500px;
    font-size: 60px;
    margin-left: 10vw;
    margin-bottom: 10vw;
  }
`;
