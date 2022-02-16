import styled from "styled-components";

const StyledLayout = styled.main`
  padding: 80px 25px;
`;

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.second};
  margin: 20px 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 35px;
  line-height: 1.2;
`;

export { StyledLayout, StyledHeading };
