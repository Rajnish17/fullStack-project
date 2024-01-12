import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./nav.css";

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/user-login");
      return;
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  }

  return (
    <nav className='container-nav'>
      <div className="left">DashBoard</div>

      <div className="right" />
      <ul className='ul-item'>
        <li className='list-item' >Home</li>
        <li className='list-item' >About</li>
        <li className='list-item' >Services</li>
        <li className='list-item' >Profile</li>
        {/* <li className='list-item' >Contact Me</li> */}
        <li className='list-item'  onClick={handleLogout}>Log Out</li>
      </ul>
    </nav>
  );
}

export default Navbar;
