import styled from "styled-components"

export const Anchor = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    color: ${props => props.theme.colors.info};

    > svg {
        font-size: 1.5rem;
        margin-right: 10px;
    }

    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }
`
