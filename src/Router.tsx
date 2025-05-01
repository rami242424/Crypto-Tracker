import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import CoinList from "./routes/CoinList";

interface IRouterProps {
    toggleDark: () => void;
    isDark: boolean;
}

function Router({toggleDark, isDark} :IRouterProps){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin isDark={isDark} />
                </Route>
                <Route path="/">
                    <CoinList toggleDark={toggleDark}  />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;