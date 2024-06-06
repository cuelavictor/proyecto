import React, { Component } from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import "./Navbar.css"; // Estilos para el Navbar

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      openSubMenu: null // para rastrear qué submenú está abierto
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleSubMenu = this.toggleSubMenu.bind(this);
    this.closeSubMenu = this.closeSubMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrolled = window.scrollY > 10;
    if (scrolled !== this.state.scrolled) {
      this.setState({ scrolled });
    }
  }

  toggleSubMenu(index) {
    this.setState((prevState) => ({
      openSubMenu: prevState.openSubMenu === index ? null : index
    }));
  }

  closeSubMenu() {
    this.setState({ openSubMenu: null });
  }

  render() {
    const { scrolled, openSubMenu } = this.state;
    return (
      <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
        <div className="logo-container">
          <div className="btn logo">
            <RestaurantIcon />
            <p>logo</p>
          </div>
        </div>
        <div className="links-container">
          <div className="link">
            <div
              className={`btn ${openSubMenu === 0 ? "active" : ""}`}
              onMouseEnter={() => this.toggleSubMenu(0)}
              onMouseLeave={this.closeSubMenu}
            >
              Link 1
            </div>
            {openSubMenu === 0 && (
              <div className="submenu" onMouseEnter={() => this.toggleSubMenu(0)} onMouseLeave={this.closeSubMenu}>
                <div className="submenu-item">Submenu Item 1</div>
                <div className="submenu-item">Submenu Item 2</div>
                <div className="submenu-item">Submenu Item 3</div>
              </div>
            )}
          </div>
          <div className="link">
            <div
              className={`btn ${openSubMenu === 1 ? "active" : ""}`}
              onMouseEnter={() => this.toggleSubMenu(1)}
              onMouseLeave={this.closeSubMenu}
            >
              Link 2
            </div>
            {openSubMenu === 1 && (
              <div className="submenu" onMouseEnter={() => this.toggleSubMenu(1)} onMouseLeave={this.closeSubMenu}>
                <div className="submenu-item">Submenu Item 1</div>
                <div className="submenu-item">Submenu Item 2</div>
              </div>
            )}
          </div>
          <div className="link">
            <div
              className={`btn ${openSubMenu === 2 ? "active" : ""}`}
              onMouseEnter={() => this.toggleSubMenu(2)}
              onMouseLeave={this.closeSubMenu}
            >
              Link 3
            </div>
            {openSubMenu === 2 && (
              <div className="submenu" onMouseEnter={() => this.toggleSubMenu(2)} onMouseLeave={this.closeSubMenu}>
                <div className="submenu-item">Submenu Item 1</div>
                <div className="submenu-item">Submenu Item 2</div>
                <div className="submenu-item">Submenu Item 3</div>
                <div className="submenu-item">Submenu Item 4</div>
              </div>
            )}
          </div>
          <div className="login-container">
            <div className="btn">login</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
