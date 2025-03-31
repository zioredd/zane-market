import logo from "../assets/icons/centos.png";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-[4rem] py-[2rem] border border-b-2 border-gray-100 shadow-md">
      <div className="flex items-center space-x-[2rem]">
        <p className="text-3xl font-bold">Zane Mart</p>
        <div className="flex items-center space-x-1">
          <img src={logo} alt="Logo" className="w-[24px] h-[24px]" />
          <p>Categories</p>
        </div>
      </div>
      <input
        type="text"
        placeholder="Enter text..."
        className="w-[60%] px-3 py-2 border rounded-lg outline-none focus:ring-2 border-gray-300"
      />
      <div className="flex flex-row items-center space-x-6 bg-gray">
        <div className="flex  items-center">
          <img src={logo} alt="Pin Image." className="w-[32px] h-[32px]" />
        </div>
        <div className="flex  items-center">
          <img src={logo} alt="Pin Image." className="w-[32px] h-[32px]" />
        </div>
        <div className="flex  items-center">
          <img src={logo} alt="Pin Image." className="w-[32px] h-[32px]" />
        </div>
        <div className="flex  items-center">
          <img src={logo} alt="Pin Image." className="w-[32px] h-[32px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
