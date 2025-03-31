import yeah from "../assets/images/yeah.jpg";

interface CardProps {
  description: string;
  price: number;
}

const Card = ({ description, price }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <img src={yeah} alt="" />
      <p>{description}</p>
      <p>0 Reviews</p>
      <p>$ {price}</p>
    </div>
  );
};

export default Card;
