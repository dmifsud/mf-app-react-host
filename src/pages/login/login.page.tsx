import { lazy, Suspense } from 'react';
// import Login from '@mf-app/remote/components/auth/Login';
import authStore from '@mf-app/store/auth/store.auth';

const Login = lazy(() => import('@mf-app/remote/components/auth/Login'));

import { Redirect } from 'wouter';
const LoginPage = () => {
    const { isAuthenticated } = authStore();

    return (
        <>
            {isAuthenticated ?
                <Redirect to='/activities' />
                : <Suspense fallback={<div>Loading&hellip;</div>}><Login title='Sign in to your Host App'/></Suspense>
            }
            
        
        </>
    )
}

export default LoginPage;