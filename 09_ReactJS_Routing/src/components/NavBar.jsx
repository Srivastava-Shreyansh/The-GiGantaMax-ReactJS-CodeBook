import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="nav">
      <h2>Baad Me Bataunga</h2>
        <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
        </div>
    </div>
  )
}
export default NavBar;