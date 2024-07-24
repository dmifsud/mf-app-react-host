
// import { Route, Router, Switch } from 'wouter';
import { Component, ComponentProps, ValidComponent } from 'solid-js';

import './App.css'

type AppProps = {} & ValidComponent;

const App: Component = (props: ComponentProps<AppProps>) => (
  <>
    {props.children}
  </>
)

// function App() {
 
//   return (
//       <Router base={baseUrl}>
//         <Switch>
//           <Route path="/" component={SplashPage} />
//           <Route path="/login" component={LoginPage} />
//           <ProtectedRoute path="/activities" component={ActivitiesPage} />
//         </Switch>
//     </Router>
//   )
// }

export default App
