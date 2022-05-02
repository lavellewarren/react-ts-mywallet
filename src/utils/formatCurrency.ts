export default function formatCurrency(currency: number): string {
    return currency.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}
