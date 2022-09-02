import styled from "styled-components";
import { ShowInfoItemStyled } from "../../elements/show-info/ShowInfoItemStyled";

export const SingleShowPageLayoutStyled = styled.div`
padding-top: 3rem;
min-height: 100vh;
display: flex;
flex-direction: column;
{
  @media (max-width: 768px) {
    padding-top: 0;
    .mobile-background{
      padding-top: 3rem;
      background: rgb(0,0,8);
      background: linear-gradient(180deg, rgba(0,0,8,0) 0%, rgba(0,0,8,0) 0%, rgba(0,0,0,0.07328869047619047) 100%);
    }
  }
}
& .background {
  position: absolute;
  padding: 3rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 73vh;
  z-index: -1;
  background: rgb(0,0,8);
  background: linear-gradient(180deg, rgba(0,0,8,0) 0%, rgba(0,0,8,0) 0%, rgba(0,0,0,0.07328869047619047) 100%);
  
  @media (max-width: 768px) {
    display: none;
  }
}
main { 
  padding: 3rem;
  > h3 {
    padding: 3rem 0;
  }
  min-height: 80vh;
}

.bottom-part-header{
  padding: 3rem 0;
}
`
export const ShowInfoContainerStyled = styled.div`
padding: 3rem;
display: flex;
gap: 1.5rem;
@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
}
`
export const ShowInfoTextContainerStyled = styled.div`
  flex: 5;
  padding-top: 2rem;
  
  .raiting-container{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  >p{ 
    width: 80%;
    line-height: 1.3;
    @media (max-width: 800px) {
      width: 85%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  
  > h1 {
    padding: 1rem 0;
  }
  @media (max-width:768px){
    width: 100%;
    flex: 1;
  }
`
export const ShowInfoImageContainerStyled = styled.div`
position: relative;
width: 300px;
height: 450px;

@media (max-width: 768px) {
  position: relative;
  min-width: 100%;
  max-width: 100%;
  min-height: 750px;
  object-position: bottom;
}
`
export const FullInfoContainerStyled = styled.div`
padding: 3rem;
display: flex;
gap: 3rem;
> .show-info, >.starring-info {
  flex: 1;
}
.starring-info {
  @media (max-width: 924px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: auto;
  }
}
.show-info-with-header, .starring-info-with-header {
  min-width: 45%;
}

@media (max-width: 924px) {
  flex-direction: column;
}
`
export const ShowInfoStyled = styled.div`
  @media (max-width: 924px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10%;
    ${ShowInfoItemStyled}{
      border-bottom: none;
      width: 45%;
      flex-direction: column;
      .item-value-container {
        display: block;
        > p {
          display: inline-block;
          :not(:last-child):after {
            content: ", ";
            white-space: pre;
          }
        } 
      }    
    }
  }
`