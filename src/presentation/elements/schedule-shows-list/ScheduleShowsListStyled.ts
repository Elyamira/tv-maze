import styled from "styled-components";

export const ScheduleShowsListStyled = styled.div`
width: 100%;
padding: 0 3rem;

.allCards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15%, 0.2fr));
    grid-gap: 2.7rem;
    @media (max-width: 890px) {
        grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
    }
    @media (max-width: 890px) {
        grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
    }
}
`
