import pin from "../assets/icons/pin.png";
import flag from "../assets/icons/flag.png";

const Header = () => {
  return (
    <div className="bg-[#FC8F01] text-white flex flex-row justify-between px-[4rem] py-1">
      <div className="flex items-center">
        <div className="flex  items-center">
          <img src={pin} alt="Pin Image." className="w-[16px] h-[16px]" />
        </div>
        <p className="px-1">Addis Ababa, Ethiopia</p>
      </div>

      {/* right div */}
      <div className="flex flex-row items-center space-x-4">
        <p>Become seller</p>
        <p>My orders</p>
        <p>Compare</p>
        <div className="flex items-center space-x-1">
          <img src={flag} alt="Flag Image." className="w-[16px] h-[16px]" />
          <p>Amharic</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
