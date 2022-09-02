import styled from 'styled-components'
export const ScheduleTvShowCardStyled = styled.div`
display: flex;
flex-direction: column;
box-shadow: 0 0 30px -15px rgba(44, 44, 44, 0.5);
cursor: pointer;
transition: all .3s;
max-width: 285px;

&:hover {
    box-shadow: 0 9px 30px 0 #ffded6;
    transform: translateY(-1.5rem) scale(1.03);
}
.image-container{
    position: relative;
    width: 100%;
    height: 29.5rem;
    background-color: #fff;
    > span > img {
        object-position: top;
    }
}
.text-container{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    >p {
        display: block;
        text-align: center;
    }
}
`