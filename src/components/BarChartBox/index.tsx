import {
    Container,
    SideLeft,
    SideRight,
    LegendContainer,
    Legend
} from "./styles"
import { Bar, BarChart, Tooltip, ResponsiveContainer, Cell } from "recharts"
import formatCurrency from "../../utils/formatCurrency"

interface IProps {
    title: string
    data: {
        name: string
        amount: number
        percent: number
        color: string
    }[]
}

export default function BarChartBox({ title, data }: IProps) {
    return (
        <Container>
            <SideLeft>
                <h2>{title}</h2>
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
                    <BarChart data={data}>
                        <Bar dataKey="amount" name="Value">
                            {data.map(item => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Bar>
                        <Tooltip
                            cursor={{ fill: "none" }}
                            formatter={(value: string | number) =>
                                formatCurrency(+value)
                            }
                        />
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    )
}
