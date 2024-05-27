
import { Route, Router, Switch } from 'wouter';
import './App.css'
import SplashPage from './pages/splash/splash.page';
import LoginPage from './pages/login/login.page';
import ActivitiesPage from './pages/activities/activities.page';
import ProtectedRoute from './routing/ProtectedRoute';

function App() {
 
  return (
      <Router>
        <Switch>
          <Route path="/" component={SplashPage} />
          <Route path="/login" component={LoginPage} />
          <ProtectedRoute path="/activities" component={ActivitiesPage} />
        </Switch>
    </Router>
  )
}

export default App
