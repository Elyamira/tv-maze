import styled from "styled-components";
import { PaginationStyled } from "../../elements/pagination/PaginationStyled";

export const HomePageLayoutStyled = styled.div`
position: relative;
padding-top: 3rem;
z-index: 10;
min-height: 100vh;
display: flex;
flex-direction: column;

& .background {
  position: absolute;
  padding: 3rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  z-index: -1;
  background: rgb(0,0,8);
  background: linear-gradient(180deg, rgba(0,0,8,0) 0%, rgba(0,0,8,0) 0%, rgba(0,0,0,0.07328869047619047) 100%);
  
  @media (max-width: 600px) {
    display: none;
  }
}
.mobile-background{
  @media (max-width: 600px) {
    background: rgb(0,0,8);
    background: linear-gradient(180deg, rgba(0,0,8,0) 0%, rgba(0,0,8,0) 0%, rgba(0,0,0,0.07328869047619047) 100%);
  }
}
& .main-description {
  width: 35%;
  padding: 0 3rem 5rem;
  @media (max-width: 850px) {
    width: 80%;
    font-size: 1.8rem;
  }
}
.shows-list-header {
  padding: 5.5rem 3rem 4.5rem;
  font-weight: normal;
  font-size: 2.2rem; 
}
${PaginationStyled} {
  display: flex;
  justify-content: end;
  padding: 1rem 3rem 3rem;
}
`