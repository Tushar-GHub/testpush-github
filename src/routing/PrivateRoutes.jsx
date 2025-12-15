import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
    const token = localStorage.getItem("token")
  return (
    <div>
        {token ? <Outlet /> : <Navigate to="/login" />}
    </div>
  )
}

export default PrivateRoutes