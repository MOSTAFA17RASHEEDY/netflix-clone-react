import "./NavBar.css";
import Logo from "../../assets/Netflix_Logo.png";
import { logout } from "../../firebase";
function NavBar() {
  return (
    <div className="navbar">
      <div className="right-sec">
        <img src={Logo} alt="" className="NavImg" />
      </div>
      <div className="left-sec">
        <i className="fa-solid fa-magnifying-glass search"></i>
        <button
          onClick={() => {
            logout();
          }}
          className="sign-btn"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default NavBar;
