import styled from "styled-components";

interface Props {
    oneButton?: boolean;
}

export const StyledCard = styled.div<Props>`
background-color: #202020;
border-radius:0.8125rem;

.image-container {
    display: grid;
    place-items: center;
}
.image{
    max-width: 100%;
}

.bottom-half {
    max-width: 85%;
    margin: 0 auto;
    font-weight: 300;
}

h3{
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 0;
}

.buttons {
    padding-top: 1rem;
    padding-bottom: 2rem;
    display: flex;
    gap: 1.625rem;
    justify-content: space-around;
}
.styled-button {
    width: ${props => props.oneButton ? '70%' : '100%'}
}
`