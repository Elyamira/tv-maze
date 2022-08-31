import styled from "styled-components";

export const PaginationStyled = styled.nav`
ul { 
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
  gap: 0.5rem;
  .page-item {
    display: flex;
    border-radius: 50%;
    &:active {
      background-color: #FF6F4F;  
    }
  }
  .page-link {
    height: 4.2rem;
    width: 4.2rem;
    position: relative;
    border: solid 1px #FF6F4F;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      background: #FF6F4F;
      width: 0;
      height: 0;
      z-index: -1;
      border-radius: 175px;
      box-shadow: 0px 0px 24px 1px rgba(224,199,224,0.2);
      transition: all 900ms cubic-bezier(1.000, -0.195, 0.000, 1.330);
      transition-timing-function: cubic-bezier(1.000, -0.195, 0.000, 1.330);
    }
    &:hover:before {
      width: 85%;
      height: 85%;
    }
    
    &.active:before, .btn:focus:before {
      width: 100%;
      height: 100%;
    }
    
    &.disable {
      background-color: #808080;
      cursor: default;
      border-color: #808080;
    }
    
  }
}
`