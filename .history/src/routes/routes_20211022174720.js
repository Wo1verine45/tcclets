import { Route, Switch } from 'react-router-dom'
import HomeScreen from '../pages/homeScreen'
import Login from '../pages/Login'


function Routes () {
    return (
        <Switch>
            <Route path='/' exact component={HomeScreen}>
            </Route>
            <Route path='/' exact component={Login}>
                <Login />
            </Route>
        </Switch>
    )
}

export default Routes;
