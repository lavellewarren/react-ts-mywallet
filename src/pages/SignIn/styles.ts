import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    > h2 {
        margin-left: 8px;
    }

    > img {
        width: 40px;
        height: 40px;
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 300px;
    padding: 30px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.tertiary};
`

export const FormTitle = styled.h1`
    &::after {
        content: "";
        display: block;
        width: 55px;
        border-bottom: 10px solid #e44c4e;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: end;
    flex: 1;
`
