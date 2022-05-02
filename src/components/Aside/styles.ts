import styled, { css } from "styled-components"

interface IContainerProps {
    menuIsOpen: boolean
}
interface IToggleContainer {
    menuIsOpen: boolean
}

export const Container = styled.aside<IContainerProps>`
    /* display: flex;
    flex-direction: column; */
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.gray};
    position: relative;

    @media (max-width: 770px) {
        position: fixed;
        z-index: 10;
        height: ${props => (props.menuIsOpen ? "100%" : "70px")};
        overflow: hidden;
        padding-right: 25px;

        ${props =>
            !props.menuIsOpen &&
            css`
                border: none;
                border-bottom: 1px solid ${props => props.theme.colors.gray};
            `}
    }

    @media (max-width: 420px) {
        padding-right: 0;
    } ;
`

export const Header = styled.header`
    display: flex;
    padding-left: 24px;
    align-items: center;
    height: 70px;
`

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;

    @media (max-width: 770px) {
        display: none;
    }
`

export const Title = styled.h3`
    margin-left: 10px;

    @media (max-width: 420px) {
        display: none;
    }
`

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
`

export const ToggleMenu = styled.button`
    display: none;
    width: 40px;
    height: 40px;
    background-color: #e44c4e;
    border-radius: 5px;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.white};

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 770px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ToggleContainer = styled.div<IToggleContainer>`
    display: none;
    position: absolute;
    bottom: 20px;
    left: 30px;

    > span {
        margin-bottom: 8px;
    }

    @media (max-width: 770px) {
        display: ${props => (props.menuIsOpen ? "flex" : "none")};
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
