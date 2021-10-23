import { Route, Switch } from 'react-router-dom'
import HomeScreen from '../pages/Main/homeScreen'
import Login from '../pages/Main/Login/Login'


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
