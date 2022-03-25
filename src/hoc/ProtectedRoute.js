import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, loggedIn }) => {
   
    
    if(!loggedIn) {
        return <Navigate to="/signin" /* state={{from: location}} */ />
    }
    return children;
}

export default ProtectedRoute;
