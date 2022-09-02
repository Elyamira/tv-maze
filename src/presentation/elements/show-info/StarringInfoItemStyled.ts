import styled from "styled-components";

export const StarringInfoItemStyled = styled.div<{withLightBottomBorder?:boolean;}>`
width: 100%;
display: flex;
gap: 1rem;
align-items: center;
border-bottom: 1px solid grey;
padding: 1rem 0;
${(props) =>
    props.withLightBottomBorder &&
    `border-bottom: 1px solid #C0C0C0;`
}
@media (max-width: 768px) {
    border-bottom: none;
}
.icon-container {
    position: relative;
    width: 3rem;
    height: 3rem;
    > span > img {
        border-radius: 50%;
        object-position: top;          
    }
}
.starring-info-container {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: baseline;
    }
}
.starring-info-name{
    min-width: 180px;
}
.starring-info-role{
    color: #818589;
}
`
