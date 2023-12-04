import {render} from "react-dom";
import './index.scss';
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/provideres/ThemeProvider";
import i18n from "shared/config/i18n/i18n";


render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
)