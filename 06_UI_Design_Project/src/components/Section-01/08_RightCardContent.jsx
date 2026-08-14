import { RiArrowRightLine } from "@remixicon/react";
const Arrow = () => {
  return (
    <RiArrowRightLine 
      size={34} // set custom `width` and `height`
      color="black" // set `fill` color
      className="my-icon" // add custom class name
      />
  );
};

const RightCardContent = (props) => {
  return (
    <div className='absolute inset-0 z-10 p-6 flex flex-col justify-between'>
        <h2 className='rounded-full w-11 h-11 text-xl bg-white font-semibold flex justify-center items-center'>{props.id + 1}</h2>
        <div>
          <p className='text-lg leading-relaxed mb-11 text-white'>{props.intro}</p>
          <div className='flex justify-between'>
            <button className='bg-amber-700 text-black font-medium px-4 py-2 rounded-full'>{props.tag}</button>
            <button className='bg-amber-700 text-black font-medium px-4 py-2 rounded-full'><Arrow /></button>
          </div>
        </div>
      </div>
  )
}
export default RightCardContent;