import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import './App.css'
import CounterButton from '@mf-app/remote/components/ReactButton';
import LitButton from '@mf-app/remote/web-components/lit-button';
// import useAuthStore from '@mf-app/store/auth/store.auth';
import useStore, { sayHelloWorld } from '@mf-app/store/index';
// import counterStore from '@mf-app/store/counter/store.counter';
import ClickTimes from '@mf-app/remote/components/ClickTimes';
import Login from '@mf-app/remote/components/auth/Login';
function App() {
 
  const { authSlice, counterSlice, profileSlice } = useStore();
  
  // const { actions } = counterStore();
  // const { isAuthenticated } = useAuthStore();
  const time = Date.now();
  const handleLitCount = (_event: Event) => {
    counterSlice.actions.inc(-1);
  };
  return (
    <>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TS + Tailwind + Web Components</h1>
      {authSlice.isAuthenticated ? <div>Authenticated: {profileSlice.name} {profileSlice.surname} </div> : <Login />}
      
      <div>{sayHelloWorld('from "host" app')}</div>
      <div className="card">
        <CounterButton text="Remote button in host"/>
        <LitButton onCountUpdated={handleLitCount} text='Updated text from host'/>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


      <div>
        <p>
          <ClickTimes />
        </p>
      </div>
      <div>
        {time}
      </div>
    </>
  )
}

export default App
