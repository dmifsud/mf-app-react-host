
import { Route, Router, Switch } from 'wouter';
import './App.css'
import SplashPage from './pages/splash/splash.page';
import LoginPage from './pages/login/login.page';
import ActivitiesPage from './pages/activities/activities.page';
import ProtectedRoute from './routing/ProtectedRoute';
console.log('env', import.meta.env);
let baseUrl = '';
if (import.meta.env.MODE === 'production') {
  baseUrl = '/mf-app-react-host';
}

function App() {
 
  return (
      <Router base={baseUrl}>
        <Switch>
          <Route path="/" component={SplashPage} />
          <Route path="/login" component={LoginPage} />
          <ProtectedRoute path="/activities" component={ActivitiesPage} />
        </Switch>
    </Router>
  )
}

export default App
