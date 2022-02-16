import logo from "../assets/logo.svg";

function Logo() {
  return (
    <a href="/" aria-label="loopstudios logo">
      <img src={logo} alt="loopstudios logo" />
    </a>
  );
}

export default Logo;
