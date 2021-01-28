// Styling
import { ThemeButton, Logo, NavProduct } from "../styles";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <h4 className="navbar-brand">
        <Logo to="/">
          <img
            src={
              props.currentTheme === "light"
                ? "https://cdn.discordapp.com/attachments/797449550616068106/804257167925706762/light-logo.png"
                : "https://cdn.discordapp.com/attachments/797449550616068106/804257171373162526/dark-logo.png"
            }
          />
        </Logo>
      </h4>
      <div className="navbar-nav ml-auto">
        <a
          className="nav-item"
          style={{ padding: "0.25em 1em", color: props.currentTheme.mainColor }}
        >
          <NavProduct to="/products"> Products </NavProduct>
        </a>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
