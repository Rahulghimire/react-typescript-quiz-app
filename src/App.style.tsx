import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height:100%;
}
*{
    box-sizing:border-box;
    font-family:"Catamaran",sans-serif;
}
`;

export const Wrapper = styled.div`
  > p {
    color: "#292561";
    font-size: 2rem;
  }
`;
