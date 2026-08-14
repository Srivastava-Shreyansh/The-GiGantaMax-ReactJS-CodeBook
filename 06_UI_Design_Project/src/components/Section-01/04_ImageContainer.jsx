import RightCard from "./07_RightCard";
const ImageContainer = (props) => {
  return (
    //implement marquee effect using css animation
    <div id="right" className='h-full flex flex-nowrap  gap-7 overflow-x-auto w-3/4 p-6 marquee-wrapper'> 
      
      <div className="marquee-track">

      {props.user.map(function(elem, idx){
        return (<>
        <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/>
      </>
      )})}

      {props.user.map(function(elem, idx){
        return (<>
        <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/>
      </>
      )})}
      </div>
    </div>
  )
}
export default ImageContainer;