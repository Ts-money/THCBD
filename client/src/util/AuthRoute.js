import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../context/auth';

// Once user's token is validated the user will be routed to Home page.
function AuthRoute({ component: Component, ...rest }) {
    const { user } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={(props) =>
                user ? <Redirect to="/" /> : <Component {...props} />
            }
        />
    );

}

export default AuthRoute;
