import styled from "styled-components"

export const Container = styled.section``

export const Content = styled.main``

export const Filters = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 24px;

    .tag-filter {
        background: none;
        font-size: 1rem;
        color: ${props => props.theme.colors.white};
        margin: 0 10px;
        opacity: 0.4;

        &:hover {
            opacity: 0.7;
        }

        &::after {
            content: "";
            display: block;
            width: 55px;
            margin: 0 auto;
        }
    }

    .tag-actived {
        opacity: 1;
    }

    .tag-filter-recurrent::after {
        border-bottom: 10px solid #4e41f0;
    }

    .tag-filter-eventual::after {
        border-bottom: 10px solid #e44c4e;
    }
`
