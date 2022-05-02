import styled, { keyframes } from "styled-components"

const animate = keyframes`
0% {
    transform: translateX(-100px);
    opacity: 0;
}

50% {
    opacity: .3;
}

100% {
    transform: translateX(0px);
    opacity: 1;
}
`

export const Container = styled.div`
    width: 49%;
    height: 260px;
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 8px;
    margin: 10px 0;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: ${animate} 0.5s;

    > header img {
        width: 35px;
        margin-left: 8px;
    }

    > header p {
        font-size: 1.1rem;
    }

    @media (max-width: 420px) {
        width: 100%;
        height: 200px;
    }
`
