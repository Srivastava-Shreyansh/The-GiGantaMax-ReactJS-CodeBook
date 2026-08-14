const Card = (props) => {
  return (
    <div>
      <div className="card">
      <img src={props.img} alt="Profile Photo" />
      <h1>{props.name}</h1>
      <p>{props.role}</p>
      <button>View Profile</button>
    </div>
    </div>
  );
}
export default Card;