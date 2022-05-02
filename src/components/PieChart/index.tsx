import {
    Container,
    SideLeft,
    Legend,
    SideRight,
    LegendContainer
} from "./styles"
import {
    PieChart as PieChartLib,
    Pie,
    Cell,
    ResponsiveContainer
} from "recharts"

interface IProps {
    data: {
        name: string
        value: number
        percent: number
        color: string
    }[]
}

export default function PieChart({ data }: IProps) {
    return (
        <Container>
            <SideLeft>
                <h2>Relationship</h2>
                <LegendContainer>
                    {data.map(item => (
                        <Legend key={item.name} color={item.color}>
                            <div>{`${item.percent}%`}</div>
                            <span>{item.name}</span>
                        </Legend>
                    ))}
                </LegendContainer>
            </SideLeft>
            <SideRight>
                <ResponsiveContainer>
                    <PieChartLib>
                        <Pie data={data} dataKey="percent">
                            {data.map(item => (
                                <Cell key={item.name} fill={item.color}></Cell>
                            ))}
                        </Pie>
                    </PieChartLib>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    )
}
