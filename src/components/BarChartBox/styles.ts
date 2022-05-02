import styled, { keyframes } from "styled-components"

interface ILegendProps {
    color: string
}

const animate = keyframes`
0% {
    transform: translateX(100px);
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
    display: flex;
    width: 49%;
    height: 260px;
    margin: 10px 0;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.tertiary};
    padding: 20px 30px;
    animation: ${animate} 0.5s;

    @media (max-width: 420px) {
        width: 100%;
    }
`

export const SideLeft = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
`

export const SideRight = styled.main`
    flex: 1;
    width: 50%;
`

export const LegendContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    > div {
        background-color: ${props => props.color};
        font-size: 1.03rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 5px;
    }

    > span {
        margin-left: 8px;
    }
`
