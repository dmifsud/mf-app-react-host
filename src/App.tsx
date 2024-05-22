import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import './App.css'
import ReactButton from '@mf-app/remote/components/ReactButton';
import LitButton from '@mf-app/remote/web-components/lit-button';
// import counterStore from '@mf-app/remote/store/counter.store';
import { sayHelloWorld } from '@mf-app/store/index';
import counterStore from '@mf-app/store/counter/store.counter';

function App() {
  
  const { count: counterCount, inc } = counterStore();

  const handleLitCount = (_event: Event) => {
    inc(-1);
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
      <div>{sayHelloWorld('from "host" app')}</div>
      <div className="card">
        <ReactButton/>
        <LitButton onCountUpdated={handleLitCount}/>
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
        <h5>Shared store count</h5>
        <p>Count: {counterCount}</p>
      </div>
    </>
  )
}

export default App
