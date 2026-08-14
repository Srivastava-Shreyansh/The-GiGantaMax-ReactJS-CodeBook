import {RiBookmarkLine} from "@remixicon/react";
const MyComponent = () => {
  return (
    <RiBookmarkLine
      size={14} // set custom `width` and `height`
      color="gray" // set `fill` color
      className="my-icon" // add custom class name
    />
  );
};

const Card = (props) => {
  return (
      <div className="card">
        <div className="top">
          <img
            src={props.img}
            alt="Amazon"
          />
          <button>
            Save <MyComponent />
          </button>
        </div>
        <div className="center">
          <h4>
            {props.name} <span>{props.day}</span>
          </h4>
          <h2>{props.role}</h2>
          <div>
            <h5>{props.dur1}</h5>
            <h5>{props.dur2}</h5>
          </div>
        </div><br /><br /><br /><br /><br /><br /><br /><br />
        <hr /><br />
        <div className="bottom">
          <div>
            <h4>{props.pay}</h4>
           <p>{props.place}</p>
          </div>
        <button id="btn">Apply now</button>
        </div>
      </div>
  );
}
export default Card;