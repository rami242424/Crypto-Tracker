import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import CoinList from "./routes/CoinList";

interface IRouterProps {
}

function Router({} :IRouterProps){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin />
                </Route>
                <Route path="/">
                    <CoinList />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;