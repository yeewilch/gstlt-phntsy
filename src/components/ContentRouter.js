import { Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Labels from './pages/Labels'

const ContentRouter = () => {
    return(
        <Switch>
            <Route path='/labels'>
                <Labels />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default ContentRouter
