import React from "react";
import "./DarkLight.css";

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { darkMode: true };
    document.body.classList.add("dark");
  }

  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode }, () => {
      if (this.state.darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    });
  };

  render() {
    const themeValue = this.state.darkMode ? "dark" : "light";
    return (
      // NavBar
      <nav className="navbar border-bottom border-body" data-bs-theme={themeValue}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-175 ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><b>Personal Portfolio</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Social Media
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="https://www.facebook.com/login/">Facebook</a></li>
                    <li><a className="dropdown-item" href="https://www.instagram.com/accounts/login/?hl=en">Instagram</a></li>
                    <li><a className="dropdown-item" href="https://github.com/">GitHub</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Search filter */}
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            {/* Dark/Light mode  */}
            <div style={{ marginTop: '15px', marginLeft: '50px' }}>
              <input type="checkbox" className="checkbox" id="checkbox" onChange={this.toggleDarkMode} />
              <label htmlFor="checkbox" className="checkbox-label">
                <i className="fas fa-sun" />
                <i className="fas fa-moon" />
                <span className="ball" />
              </label>
            </div>
          </div>
        </nav>
      </nav>
    );
  }
}

export default NavBar;