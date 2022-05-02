import { ReactNode } from "react"
import Aside from "../Aside"
import Content from "../Content"
import MainHeader from "../MainHeader"
import { Grid } from "./styles"

interface IProps {
    children?: ReactNode
}

export default function Layout({ children }: IProps) {
    return (
        <Grid>
            <MainHeader></MainHeader>
            <Aside></Aside>
            <Content>{children}</Content>
        </Grid>
    )
}
