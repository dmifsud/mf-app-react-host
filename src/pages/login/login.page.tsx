import authStore from '@mf-app/store/auth/store.auth';
import { Navigate } from '@solidjs/router';

import { createEffect, lazy, Suspense } from 'solid-js';
const Login = lazy(() => import('@mf-app/remote/components/auth/Login'));

const LoginPage = () => {
    createEffect(() => {
        console.log("isAuthenticated changed:", authStore.isAuthenticated);
      });
    return (
        <>
            {authStore.isAuthenticated ?
                <Navigate href={"/activities"} />
                : <Suspense fallback={<div>Loading&hellip;</div>}><Login title='Sign in to your Host App'/></Suspense>
            }
        </>
    )
}

export default LoginPage;