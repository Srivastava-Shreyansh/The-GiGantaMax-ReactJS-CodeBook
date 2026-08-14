import NavBar from "./01_NavBar";
import Center from "./02_Center";

const Section_01 = (props) => {
  return (
    <div className= 'h-screen w-full'>
      <NavBar />
      <Center user={props.user} />
    </div>
  )
}
export default Section_01;