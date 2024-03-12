const Card = ({title, info}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h6>{info}</h6>
    </div>
  );
};
export default Card;
