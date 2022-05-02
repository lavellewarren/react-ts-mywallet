import styled from "styled-components"

export const Container = styled.header`
    grid-area: MH;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
`

export const ToggleContainer = styled.div`
    @media (max-width: 420px) {
        display: none;
    }
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: 10px;
`

export const Wellcome = styled.h3`
    align-self: flex-end;
`

export const Username = styled.span`
    align-self: flex-end;
`
