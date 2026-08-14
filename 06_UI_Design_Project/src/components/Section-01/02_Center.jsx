import LeftText from "./03_LeftText";
import ImageContainer from "./04_ImageContainer";

const Center = (props) => {
  return (
    <div className= 'pb-16 pt-6 flex items-center gap-10 h-[90vh]'>
      <LeftText />
      <ImageContainer user={props.user} />
    </div>
  )
}
export default Center;