import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, loggedIn }) => {
    const location = useLocation();
    
    if(!loggedIn) {
        return <Navigate to="/signin" /* state={{from: location}} */ />
    }
    return children;
}

export default ProtectedRoute;
