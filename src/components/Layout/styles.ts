import styled from "styled-components"

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 240px auto;
    grid-template-rows: 70px auto;
    grid-template-areas:
        "AS MH"
        "AS CT";
    color: ${props => props.theme.colors.white};

    @media (max-width: 770px) {
        grid-template-columns: 100%;
        grid-template-rows: 70px auto;
        grid-template-areas:
            "MH"
            "CT";
    }
`
