import styled, { keyframes } from "styled-components"

interface IContainerProps {
    color: string
}

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

export const Container = styled.section<IContainerProps>`
    background-color: ${props => props.color};
    width: 32%;
    height: 150px;
    margin: 10px 0;
    border-radius: 8px;
    padding: 20px 30px;
    position: relative;
    overflow: hidden;
    animation: ${animate} 0.5s;

    > img {
        position: absolute;
        height: 110%;
        top: -10px;
        right: -30px;
        opacity: 0.3;
    }

    > span {
        font-size: 1.2rem;
        font-weight: 500;
    }

    > small {
        position: absolute;
        bottom: 10px;
        z-index: 5;
    }

    @media (max-width: 420px) {
        width: 100%;

        > span {
            font-size: 1.4rem;
        }
    }
`
