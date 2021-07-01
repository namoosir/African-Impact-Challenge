
const Header = () => {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">African Impact Challenge</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
            </div>
          </div>
          <div className="navbar-nav mx-3">
            <a className="nav-link" href="/login">
              Login
            </a>
            <a className="nav-link" href="/register">
              Register
            </a>
          </div>
        </div>
      </nav>
    );  
};

export default Header;
