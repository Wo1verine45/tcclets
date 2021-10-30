import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Login/Login'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import HomeScreen from '../pages/Main/homeScreen';
import MovieMain from '../components/MovieList/MovieMain';

function Routes () {
    
    return (
        <Switch>
            <Route path='/' exact>
             <HomeScreen />   
            </Route>
            <Route path='/login' exact component={Login}>
            </Route>
            <Route path='/registration' exact component={RegistrationPage}>
            </Route>
            <Route path='/MovieMain' exact component={MovieMain}>
            </Route>
        </Switch>
    )
}
export default Routes;
