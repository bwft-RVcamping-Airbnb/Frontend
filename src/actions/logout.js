import { push } from 'connected-react-router';


export const getLoggedOut = () => dispatch => {
        localStorage.removeItem('token');
        dispatch(push('/login'));
}