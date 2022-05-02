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
    width: 49%;
    height: 260px;
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 8px;
    margin: 10px 0;
    padding: 20px 30px;
    display: flex;
    animation: ${animate} 0.5s;

    @media (max-width: 420px) {
        width: 100%;
        height: 200px;
    }
`

export const SideLeft = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const LegendContainer = styled.ul`
    max-height: 175px;
    overflow-y: scroll;
    padding-right: 10px;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }
`

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    > div {
        background-color: ${props => props.color};
        font-size: 1.03rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        margin-right: 8px;
    }
`

export const SideRight = styled.main`
    display: flex;
    justify-content: center;
    flex: 1;
`
