import { Route, Switch } from 'react-router-dom'
import { HomeScreen } from '../pages/HomeScreen'
import { Login } from '../pages/Login'


function Routes () {
    return (
        <Switch>
            <Route path='/' exact>
                <HomeScreen />
            </Route>
            <Route path='/login' exact>
                <Login />
            </Route>
        </Switch>
    )
}

export default Routes;