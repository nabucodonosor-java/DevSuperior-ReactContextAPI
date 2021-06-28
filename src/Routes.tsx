import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from "./Users";
import Home from "./Home";
import Navbar from "./Navbar";

const Routes = () => (
    <BrowserRouter>
    <Navbar />
        <Switch>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>

);

export default Routes;