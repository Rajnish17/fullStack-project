import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  }

  return (
    <nav className='nav-container'>
      <div className="left">Unsplash</div>

      <div className="right" />
      <ul className='ul-item'>
        <li className='list-item' >Home</li>
        <li className='list-item' >About</li>
        <li className='list-item' >Services</li>

        <li className="nav-item dropdown list-item">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Signup
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/admin-signup"}>Admin</Link></li>
            <li><Link className="dropdown-item" to={"/user-signup"}>User</Link></li>

          </ul>
        </li>

        <li className="nav-item dropdown list-item">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/admin-login"}>Admin</Link></li>
            <li><Link className="dropdown-item" to={"/user-login"}>User</Link></li>

          </ul>
        </li>

        {/* <li className='list-item'  onClick={handleLogout}>Log Out</li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
