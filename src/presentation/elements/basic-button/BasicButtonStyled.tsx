import styled from "styled-components";

export const BasicButtonStyled = styled.div<{
    disabled: boolean;
    buttonColor: string;
}
    >`
width: 100%;

button {
    width: max-content;
    padding: 1.5rem;
    border: 0;
    outline: 0;
    border-radius: 3rem;
    color: #fff;
    background-color: ${props => props.disabled
        ? "grey"
        : props.buttonColor};
        &:hover {
            cursor: pointer;
            opacity: 0.6;
        }
    }
    `