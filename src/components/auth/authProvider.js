import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AUTH_GET_PERMISSIONS  } from 'react-admin';

const apiUrl = 'http://localhost:3030';

export default (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request(`${apiUrl}/users/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                // if (!response.ok) { throw response }
                
                if (response.status < 200 || response.status >= 300) {
                    switch (response.status) {
                        case 422:
                            throw new Error(`ra.login.unprocessable_entity`);
                        case 404:
                            throw new Error(`ra.login.not_found`);
                        default:
                            throw new Error(`ra.login.unprocessable_entity`);
                    }
                    
                    
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                localStorage.setItem('jwt_token', data.token);
                localStorage.setItem('role', data.role);
            })
            // .catch( err => {
            //     err.text().then( errorMessage => {
            //         // console.log(JSON.parse(errorMessage))
            //     })
            // })
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('role');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('jwt_token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('jwt_token')
            ? Promise.resolve()
            : Promise.reject();
    }
    if (type === AUTH_GET_PERMISSIONS) {
        
        const role = localStorage.getItem('role');
        return role ? Promise.resolve(role) : Promise.reject();
    }
    return Promise.reject('Unknown method');
};