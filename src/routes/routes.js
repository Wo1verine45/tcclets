import { Route, Switch } from 'react-router-dom'
import HomeScreen from '../pages/Main/homeScreen'
import Login from '../pages/Login/Login'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';


function Routes () {
    return (
        <Switch>
            <Route path='/' exact>
             <HomeScreen />   
            </Route>
            <Route path='/login' exact component={Login}>
            </Route>
            <Route path='/registration' exact>
                <RegistrationPage />
            </Route>
        </Switch>
    )
}

export default Routes;
