import styled from "styled-components";

export const ShowPageStyled = styled.div`
padding-top: 3rem;
main { 
    padding: 3rem;
}
.show-info-container{
    display: flex;
    gap: 10px;
    .show-info-image-container {
        flex: 1;
    }
    .show-info-text-container {
      flex: 5;
    }
}
.full-info-container{
    display: flex;
    gap: 3rem;
    > .show-info, > .starring-info {
        flex: 1;
    }
}
`