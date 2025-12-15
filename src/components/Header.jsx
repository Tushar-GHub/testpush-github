import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const links = [
    {name: "Home", path: "/"},
    {name: "Products", path: "/list-products"},
    {name: "Notes", path: "/notes"},
    {name: "Register", path: "/register"}
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div style={{marginBottom: "20px", background: "white", height: "90px", paddingTop: "25px"}}>
      {/* {links.map((link) => {
      return <Link to={link.path} key={link.name} style={{marginRight: "10px"}} className={`${pathname === link.path && "active"}`}>{link.name}</Link>
      })} */}
      {/* {links.map((link) => {
        return <span onClick={() => navigate(link.path)} key={link.name} className={`${pathname === link.path && "active"}`}>{link.name}</span>
      })} */}
      {links.map((link) => {
        return <NavLink to={link.path} key={link.name} style={{marginRight: "10px"}}>{link.name}</NavLink>
      })}
    </div>
  )
}

export default Header