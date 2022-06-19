import logo from "../images/around.svg";

function Header() {
  return (
    <header className="header">
      <img
        id="aroundSvg"
        alt="Around the U.S."
        className="header__logo"
        src={logo}
      />
    </header>
  );
}

export default Header;
