import {
    Container,
    Header,
    LegendContainer,
    ChartContainer,
    Legend
} from "./styles"
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from "recharts"
import formatCurrency from "../../utils/formatCurrency"

interface IProps {
    data: {
        month: string
        amountEntry: number
        amountOutput: number
    }[]
    lineColorAmountEntry: string
    lineColorAmountOutput: string
}

export default function HistoryBox({
    data,
    lineColorAmountEntry,
    lineColorAmountOutput
}: IProps) {
    return (
        <Container>
            <Header>
                <h2>Balance history</h2>
                <LegendContainer>
                    <Legend color="#F7931B">
                        <div></div>
                        <span>Input</span>
                    </Legend>
                    <Legend color="#E44C4E">
                        <div></div>
                        <span>Output</span>
                    </Legend>
                </LegendContainer>
            </Header>
            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                        <XAxis dataKey="month" stroke="#cecece" />
                        <Tooltip
                            formatter={(value: string | number) =>
                                formatCurrency(+value)
                            }
                        />
                        <Line
                            type="monotone"
                            dataKey="amountEntry"
                            name="Input"
                            stroke={lineColorAmountEntry}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="amountOutput"
                            name="Output"
                            stroke={lineColorAmountOutput}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </Container>
    )
}
