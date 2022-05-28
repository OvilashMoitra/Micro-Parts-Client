import { signOut } from "firebase/auth";
import auth from "./firebase.init";

const { useLocation, Navigate } = require("react-router-dom");

function RequireAuth({ children }) {
    const token = localStorage.getItem(('token'))
    let location = useLocation();

    if (!token) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        // localStorage.removeItem('token')
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
export default RequireAuth;