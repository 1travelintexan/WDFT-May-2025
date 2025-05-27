import ironhackLogo from "../assets/ironhack.PNG";
function Navbar({ userOne }) {
  console.log("props on Navbar", userOne);
  //deconstruct the props
  //   const { userOne} = props
  return (
    <nav>
      <img src={ironhackLogo} alt="logo" />
      <h1> {userOne}'s Page</h1>
      <button>Logout</button>
    </nav>
  );
}
export default Navbar;
