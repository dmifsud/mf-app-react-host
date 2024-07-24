// import useStore from '@mf-app/store/index';
// import reactLogo from '../../assets/react.svg'
// import viteLogo from '/vite.svg';

import { Component } from "solid-js";
import { A } from "@solidjs/router";

// import CounterButton from '@mf-app/remote/components/ReactButton';
// import LitButton from '@mf-app/remote/web-components/lit-button';

// import ClickTimes from '@mf-app/remote/components/ClickTimes';

const SplashPage: Component = () => {

    // const { counterSlice } = useStore();
  
    // const { actions } = counterStore();
    // const { isAuthenticated } = useAuthStore();
    // const time = Date.now();
    // const handleLitCount = (_event: Event) => {
    //     counterSlice.actions.inc(-1);
    // };
    
 return (
 <div>
    {/* <h1>Welcome to the App</h1>
    <div class="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} class="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TS + Tailwind + Web Components</h1>
        <Link to="/login">Login</Link>
      {authSlice.isAuthenticated ? <div>Authenticated: {profileSlice.name} {profileSlice.surname} </div> : <Login />}
      
      <div>{sayHelloWorld('from "host" app')}</div>
      <div class="card">
        <CounterButton text="Remote button in host"/>
        <LitButton onCountUpdated={handleLitCount} text='Updated text from host'/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


      <div>
        <p>
          <ClickTimes />
        </p>
      </div>
      <div>
        {time}
      </div> */}
      <div class="p-6 font-sans bg-gray-50 min-h-screen">
      <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 class="text-4xl font-bold mb-6 text-blue-600">Micro Frontend Setup Guide with TypeScript</h1>
        <p class="mb-4 text-gray-700">This guide outlines the setup and usage of a host application consuming remote applications via module federation and TypeScript for type sharing.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-4 text-blue-500">Prerequisites</h2>
        <p class="mb-4 text-gray-700">Before running the host application, ensure the remote applications are installed and compiled. Check the other remote project's scripts for building and serving the application locally. Should be <code class="bg-gray-200 p-1 rounded">npm run serve</code></p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-4 text-blue-500">Directory Structure</h2>
        <p class="mb-4 text-gray-700">Ideally, all projects should be located adjacent to each other in the directory structure. However, this is not mandatory. If the projects are installed in completely separate locations, update the <code class="bg-gray-200 p-1 rounded">package.local.json</code> file location reference accordingly, e.g., <code class="bg-gray-200 p-1 rounded">"@mf-app/remote": "file:../remote/dist/types"</code>. This setup ensures type references for the module-federated remote distribution.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-4 text-blue-500">Remote Application Setup (Development Testing)</h2>
        <ol class="list-decimal list-inside mb-4 text-gray-700">
          <li class="mb-2">Install dependencies: <code class="bg-gray-200 p-1 rounded">npm install</code></li>
          <li class="mb-2">Serve all the remote applications:
            <p class="mt-2">Before building or running this [host] app, the dependent remote apps (check their reference in <code class="bg-gray-200 p-1 rounded">federation.config.ts</code>) need to be built and served locally:</p>
            <p class="mt-2">Double check their scripts within their <code class="bg-gray-200 p-1 rounded">package.json</code> file but should be:</p>
            <code class="bg-gray-200 p-1 rounded block my-2">npm run serve</code>
            <p class="mt-2">This command performs the following actions:</p>
            <ul class="list-disc list-inside ml-4">
              <li>Compiles the module-federated distribution entry file.</li>
              <li>Generates the type references under <code class="bg-gray-200 p-1 rounded">./dist/types</code>.</li>
              <li>Serves the application at a fixed localhost such as <code class="bg-gray-200 p-1 rounded">http://localhost:5000/</code>.</li>
            </ul>
          </li>
        </ol>
        
        <h2 class="text-2xl font-semibold mt-6 mb-4 text-blue-500">Host Application Setup (this project)</h2>
        <ol class="list-decimal list-inside mb-4 text-gray-700">
          <li class="mb-2">Install Dependencies: <code class="bg-gray-200 p-1 rounded">npm install</code></li>
          <p class="mt-2">A <code class="bg-gray-200 p-1 rounded">postinstall</code> command is executed that checks for a <code class="bg-gray-200 p-1 rounded">package.local.json</code> file with a structure similar to this:</p>
          <pre class="bg-gray-200 p-4 rounded my-4 overflow-auto">
            <code>
{`{
  "devDependencies": {
    "@mf-app/remote": "file:../mf-app-react-remote/dist/types",
    "@mf-app/store": "file:../fm-app-store/dist/types"
  }
}`}
            </code>
          </pre>
          <p>This will install the types local package for type reference during development. This is not mandatory. Development can still be done without any errors. However, typings will not be available.</p>
          <li class="mb-2">Run the host application: <code class="bg-gray-200 p-1 rounded">npm run dev</code></li>
          <p class="mt-2">This command starts the host application with hot module replacement (HMR), utilizing the module-federated distribution package from the remote application.</p>
        </ol>
        
        <h2 class="text-2xl font-semibold mt-6 mb-4 text-blue-500">Notes</h2>
        <p class="mb-4 text-gray-700">Any changes made to the remote applications must be re-compiled for the updates to take effect in the host application and <code class="bg-gray-200 p-1 rounded">npm install</code> needs to be executed on this [host] app for the types to take effect.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-4 text-blue-500">Project Dependencies</h2>
        <ul class="list-disc list-inside mb-4 text-gray-700">
          <li><a href="https://github.com/dmifsud/mf-app-react-remote" class="text-blue-600 hover:underline">Remote Project</a>: contains dumb components and components that use the shared store.</li>
          <li><a href="https://github.com/dmifsud/mf-app-store" class="text-blue-600 hover:underline">Shared Store</a>: Zustand Store for consistent state management across the host and remote project.</li>
        </ul>
        
        <h2 class="text-2xl font-semibold mt-6 mb-4 text-blue-500">References</h2>
        <a href="https://stackoverflow.com/questions/75850348/how-to-create-a-types-only-package-on-npm" class="text-blue-600 hover:underline">https://stackoverflow.com/questions/75850348/how-to-create-a-types-only-package-on-npm</a>
        
        <p class="mt-6 text-gray-700">To start, click the login button below. To login, type any email and any password.</p>
        <A href="/login" class="mt-20 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Login</A>
      </div>
    </div>
  </div>);
};

export default SplashPage;
