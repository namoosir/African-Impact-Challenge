import nav from './stylesheets/nav.css'
import { Link, withRouter } from "react-router-dom"

const HeaderAuth = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className='navbar-brand' href='/home'>
        <img src="https://static1.squarespace.com/static/5959429eff7c50228e412bf1/t/5fd172998185f4776a0278f2/1622856161424/" width='60' height='50'></img>
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <Link className='nav-link' to='/home'>Home</Link>
            {/* <a className="nav-link" aria-current="page" href="/home">
              Home
            </a> */}
            <Link className='nav-link' to='/calendar'>Calendar</Link>
            <Link className='nav-link' to='/lectures'>Lectures</Link>
            <Link className='nav-link' to='/messages'>Messages</Link>
            {/* <a className="nav-link" href="/calendar">
              Calendar
            </a>
            <a className="nav-link" href="/lectures">
              Lectures
            </a>
            <a className="nav-link" href="/message">
              Message
            </a> */}
          </div>
        </div>
        <div className="navbar-nav mx-5 offset-3">
          <img className='profilepic' src='https://thispersondoesnotexist.com/image' width='50'></img>
          <li class="nav-item dropdown me-5">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {props.user.username}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default HeaderAuth;
