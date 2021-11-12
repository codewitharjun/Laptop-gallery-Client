import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PrivetRouter = ({ children, ...rest }) => {
    let {user, isLoading} = useAuth ();

    if(isLoading) {
    return <Spinner animation="grow" varient="danger" />
    }

    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivetRouter;