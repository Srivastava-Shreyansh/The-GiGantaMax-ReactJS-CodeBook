import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="nav">
      <Link to='/'>Baad Me Bataunga</Link>
        <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/cohort'>Cohort</Link>
        <Link to='/product'>Product</Link>
        <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}
export default NavBar;