// import React from 'react';
// import { Route, Redirect } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, ...props  }) => {
//   return (
//     <Route>
//       {
//         () => props.loggedIn === true ? <Component {...props} /> : <Redirect to="./sign-in" />
//       }
//     </Route>
// )}

// export default ProtectedRoute;

import React from 'react';
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props  }) {
  return (
    <Route path={props.path}>
      {() => props.loggedIn === true
        ? <>
          {props.children}
        </>
        : <Redirect to={{ pathname: "/sign-in", state: { noAuthRedirected: true } }} />
      }
    </Route>
  );
}

export default ProtectedRoute;
