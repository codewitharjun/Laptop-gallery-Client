import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
    let {user, admin, isLoading} = useAuth ();
    console.log(admin);

    if(isLoading) {
    return <Spinner animation="grow" varient="danger" />
    }

    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default AdminRoute;