import { Route, Switch } from 'react-router-dom'
import HomeScreen from '../pages/homeScreen'
import { Login } from '../pages/Login'


export function Routes () {
    return (
        <Switch>
            <Route path='/' exact component={HomeScreen}>
            </Route>
            <Route path='/login' exact>
                <Login />
            </Route>
        </Switch>
    )
}
