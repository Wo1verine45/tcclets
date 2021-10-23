import { Route, Switch } from 'react-router-dom'
import HomeScreen from '../pages/Main/homeScreen'
import Login from '../pages/Login/Login'


function Routes () {
    return (
        <Switch>
            <Route path='/'>
            <HomeScreen />
            </Route>
            <Route path='/Login' exact>
                <Login />
            </Route>
        </Switch>
    )
}

export default Routes;
