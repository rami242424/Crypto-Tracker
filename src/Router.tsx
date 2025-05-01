import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import CoinList from "./routes/CoinList";

function Router(){
    return(
        //<BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin />
                </Route>
                <Route path="/" exact>
                    <CoinList />
                </Route>
            </Switch>
        //</BrowserRouter>
    );
}

export default Router;