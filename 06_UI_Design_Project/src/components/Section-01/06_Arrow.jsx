import { RiArrowRightUpLine } from "@remixicon/react";

const MyComponent = () => {
  return (
    <RiArrowRightUpLine
      size={64} // set custom `width` and `height`
      color="black" // set `fill` color
      className="my-icon" // add custom class name
    />
  );
};
const Arrow = () => {
  return (
    <div>
        <MyComponent />
    </div>
  )
}

export default Arrow;
