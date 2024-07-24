import authState from "@mf-app/store/auth/store.auth";
import { LitButtonOptions } from "@mf-app/remote/web-components/lit-button";
import { useNavigate } from "@solidjs/router";
import { createEffect, ComponentProps, ValidComponent, onMount } from "solid-js";

function ProtectedRoute<T extends ValidComponent>(props: ComponentProps<T>) {
  const navigate = useNavigate();
  console.log('auth', authState.isAuthenticated);
  createEffect(() => {
    if (!authState.isAuthenticated) {
      navigate('/login', { replace: true });
    }
  });
  onMount(() => {
    import('@mf-app/remote/web-components/lit-button').then(module => {
      // Optionally you can do something with the module if needed
      console.log('LitButton loaded', module);
    }).catch(err => {
      console.error('Failed to load LitButton', err);
    });
  });
  return (
    <div>
      <nav class="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 class="text-2xl font-semibold whitespace-nowrap dark:text-white">MF Host App (Solid-JS)</h1>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <lit-button type="button" text={authState.loading ? "Singing out..." : "Sign Out"} disabled={authState.loading} onClick={() => {
              console.log('logout');
              authState.logout();
            }}></lit-button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  )
}

export default ProtectedRoute;


// testing use of web components

declare module "solid-js" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements { 
      "lit-button": LitButtonOptions;
    }
  }
}