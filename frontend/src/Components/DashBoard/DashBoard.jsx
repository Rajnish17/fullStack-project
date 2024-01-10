import { useEffect } from 'react';
import "./dashboard.css"
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login")
  }

  return (
    <>
      <div className="area" />
      <nav className="main-menu">
        <ul>
          <li>
            <a href="https://jbfarrow.com">
              <i className="fa fa-home fa-2x" />
              <span className="nav-text">Community Dashboard</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <i className="fa fa-globe fa-2x" />
              <span className="nav-text">All Users</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <i className="fa fa-comments fa-2x" />
              <span className="nav-text">Group Hub Forums</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <i className="fa fa-camera-retro fa-2x" />
              <span className="nav-text">Survey Photos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-film fa-2x" />
              <span className="nav-text">Surveying Tutorials</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-book fa-2x" />
              <span className="nav-text">Surveying Jobs</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-cogs fa-2x" />
              <span className="nav-text">Tools &amp; Resources</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-map-marker fa-2x" />
              <span className="nav-text">Member Map</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-info fa-2x" />
              <span className="nav-text">Documentation</span>
            </a>
          </li>
        </ul>
        <ul className="logout">
          <li>
            <a onClick={handleLogout} >
              <i className="fa fa-power-off fa-2x" />
              <span className="nav-text"> Logout</span>

            </a>
          </li>
        </ul>
      </nav>
    </>

  )
}

export default DashBoard