const NavBar = (props) => {
    function changeTheme(){
        props.setTheme("Dark")
    }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}
export default NavBar;