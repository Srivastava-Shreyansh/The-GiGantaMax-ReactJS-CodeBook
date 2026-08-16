import { useContext } from "react";
import NavBar2 from "./NavBar2";
import { PostDataContext } from "../context/ThemeContext";

const NavBar = () => {
    const data = useContext(PostDataContext);
  return (
    <div className="nav">
      <h2>{data}</h2>
      <NavBar2 />
    </div>
  )
}

export default NavBar;
