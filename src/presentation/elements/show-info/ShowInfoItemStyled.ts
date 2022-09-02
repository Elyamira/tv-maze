import styled from "styled-components";

export const ShowInfoItemStyled = styled.div<{withLightBottomBorder?:boolean;}>`
width: 100%;
display: flex;
gap: 1rem;
border-bottom: 1px solid black;
padding: 1.7rem 0;
${(props) =>
    props.withLightBottomBorder &&
    `border-bottom: 1px solid #C0C0C0;`
}

.category-name {
    min-width: 100px;
}
.item-value-container {
    display: flex;
    gap: 1rem;
    color: #818589;
    flex-wrap: wrap;
}
.item-value{
    flex: 3;
    flex-wrap: wrap;
    color: #818589;
}
`
