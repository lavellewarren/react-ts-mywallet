import styled from "styled-components"

interface ITitleContainerProps {
    lineColor: string
}

export const Container = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 420px) {
        flex-direction: column;
        margin-bottom: 14px;
    }
`

export const TitleContainer = styled.div<ITitleContainerProps>`
    > h1::after {
        content: "";
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.lineColor};
    }
`

export const Controllers = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    @media (max-width: 420px) {
        align-self: flex-end;
    }
`
