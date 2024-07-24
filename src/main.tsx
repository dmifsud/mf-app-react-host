import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import App from './App.tsx'
import './index.css'

import SplashPage from './pages/splash/splash.page';
import LoginPage from './pages/login/login.page';
import ProtectedRoute from "./routing/ProtectedRoute.tsx";
import ActivitiesPage from './pages/activities/activities.page';
// import ProtectedRoute from './routing/ProtectedRoute';
console.log('env', import.meta.env);
let baseUrl = ''; // not sure if this applies to solid-js router (mainly for the gh-pages deployment)
if (import.meta.env.MODE === 'production') {
  baseUrl = '/mf-app-react-host'; // TODO: change this to solid-js
}

render(() => (
  <Router root={App}>
    <Route path="/" component={SplashPage} />\
    <Route path="/login" component={LoginPage} />
    <Route path="/" component={ProtectedRoute}>
      <Route path="/activities" component={ActivitiesPage}/>
    </Route>
      
  </Router>
), document.getElementById("root")!);

