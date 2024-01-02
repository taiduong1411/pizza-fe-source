import { Navigate, Outlet } from "react-router-dom";

function useAuth() {
    const level = localStorage.getItem('level');
    return level
}


function StudentRoute() {
    const isAuth = useAuth();
    return (isAuth == '1') ? <Outlet /> : <Navigate to='/login' />

}
export default StudentRoute;