import tshirts from "../assets/images/t-shirts.jpg";
import suits from "../assets/images/suits.jpg";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between px-[4rem] pt-[1.5rem]">
      <div className="w-screen h-[34rem] bg-gradient-to-r from-[#FFB71E] to-[#E2F2FD] rounded-lg">
        <div className="flex flext-row justify-between px-[8rem] py-[2rem]">
          <div className="max-w-[50%]">
            <p className="text-[8rem] leading-tight hero-font">
              Fashion
              <br />
              Sales
            </p>
            <p className="text-[3rem]">Eid Offer!</p>
          </div>

          <img
            src={tshirts}
            alt="T-Shirt"
            className="w-[40%] h-[40%] transform rotate-[15deg] translate-y-[4rem] translate-x-[8rem]"
          />
          <img
            src={suits}
            alt="Suits"
            className="w-[40%] h-[40%] transform -rotate-[15deg] translate-y-[4rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
