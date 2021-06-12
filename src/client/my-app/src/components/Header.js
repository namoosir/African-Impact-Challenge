const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">African Impact Challenge</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
                <a className="nav-link" href="/about">
                  About
                </a>
                <div className="navbar-nav ml-auto">
                    <a className="nav-link" href="/login">
                    Login
                    </a>
                    <a className="nav-link" href="/register">
                    Register
                    </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
}

export default Header