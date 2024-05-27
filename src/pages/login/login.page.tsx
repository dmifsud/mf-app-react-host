import Login from '@mf-app/remote/components/auth/Login';
import authStore from '@mf-app/store/auth/store.auth';
import { Redirect } from 'wouter';
const LoginPage = () => {
    const { isAuthenticated } = authStore();

    return (
        <>
            {isAuthenticated ?
                <Redirect to='/activities' />
                : <Login title='Sign in to your Host App'/>
            }
            
        
        </>
    )
}

export default LoginPage;