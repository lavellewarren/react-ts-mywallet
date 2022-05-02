import * as ReactDOM from "react-dom"
import App from "./App"
import { ThemeProvider } from "./context/ThemeContext"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById("root") as HTMLElement
)
registerServiceWorker()
