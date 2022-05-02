import { useCallback, useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import ContentHeader from "../../components/ContentHeader"
import HistoryFinanceCard from "../../components/HistoryFinanceCard"
import SelectInput from "../../components/SelectInput"
import expenses from "../../repositories/expenses"
import gains from "../../repositories/gains"
import { IResponseData } from "../../repositories/IResponseData"
import { months } from "../../repositories/months"
import formatCurrency from "../../utils/formatCurrency"
import formatDate from "../../utils/formatDate"
import { Container, Content, Filters } from "./styles"

type Frequency = "recurrent" | "eventual"

interface IPageTitle {
    label: string
    lineColor: string
}

interface IPageData {
    title: IPageTitle
    pageData: IResponseData[]
}

interface IData {
    id: string
    description: string
    amountFormatted: string
    frequency: Frequency
    dateFormatted: string
    tagColor: string
}

export default function List() {
    const [data, setData] = useState<IData[]>([])
    const [selectedFrequency, setSelectedFrequency] = useState<Frequency[]>([
        "recurrent",
        "eventual"
    ])
    const [monthSelected, setMonthSelected] = useState(
        new Date().getMonth() + 1
    )
    const [yearSelected, setYearSelected] = useState(new Date().getFullYear())

    const { type: movimentType } = useParams()

    const { pageData, title }: IPageData = useMemo(() => {
        return movimentType === "entry-balance"
            ? {
                  title: {
                      label: "Input",
                      lineColor: "#F7931B"
                  },
                  pageData: gains
              }
            : {
                  title: {
                      label: "Output",
                      lineColor: "#4E41F0"
                  },
                  pageData: expenses
              }
    }, [movimentType])

    const years = useMemo(() => {
        let uniqueYears: number[] = []

        pageData.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        })

        return uniqueYears.map(year => ({
            value: year,
            label: String(year)
        }))
    }, [pageData])

    const handleFrequencyClick = useCallback(
        (frequency: Frequency) => {
            const alreadySelected = selectedFrequency.findIndex(
                item => item === frequency
            )

            if (alreadySelected >= 0) {
                const filtered = selectedFrequency.filter(
                    item => item !== frequency
                )
                setSelectedFrequency(filtered)
                return
            }
            setSelectedFrequency(old => [...old, frequency])
        },
        [selectedFrequency]
    )

    useEffect(() => {
        const filteredData = pageData.filter(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            return (
                month === monthSelected &&
                year === yearSelected &&
                selectedFrequency.includes(item.frequency as Frequency)
            )
        })

        const formattedData: IData[] = filteredData.map(item => ({
            id: String(Math.random()),
            description: item.description,
            amountFormatted: formatCurrency(item.amount),
            dateFormatted: formatDate(item.date),
            frequency: item.frequency as Frequency,
            tagColor: item.frequency === "recurrent" ? "#4E41F0" : "#E44C4E"
        }))

        setData(formattedData)
    }, [pageData, monthSelected, yearSelected, data.length, selectedFrequency])

    return (
        <Container>
            <ContentHeader title={title.label} lineColor={title.lineColor}>
                <SelectInput
                    defaultValue={monthSelected}
                    onChange={e => setMonthSelected(+e.target.value)}
                    options={months}
                ></SelectInput>
                <SelectInput
                    defaultValue={yearSelected}
                    onChange={e => setYearSelected(+e.target.value)}
                    options={years}
                ></SelectInput>
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className={`
                    ${
                        selectedFrequency.includes("recurrent") && "tag-actived"
                    } tag-filter tag-filter-recurrent
                    `}
                    onClick={() => handleFrequencyClick("recurrent")}
                >
                    Recurrent
                </button>
                <button
                    type="button"
                    className={`
                    ${
                        selectedFrequency.includes("eventual") && "tag-actived"
                    } tag-filter tag-filter-eventual
                    `}
                    onClick={() => handleFrequencyClick("eventual")}
                >
                    Possible
                </button>
            </Filters>

            <Content>
                {data.map(item => (
                    <HistoryFinanceCard
                        key={item.id}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        tagColor={item.tagColor}
                        amount={item.amountFormatted}
                    ></HistoryFinanceCard>
                ))}
            </Content>
        </Container>
    )
}
