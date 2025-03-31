const CategoryCard = () => {
  return (
    <div className="p-8 border border-gray-100 shadow-md flex flex-col w-full">
      <div className="flex flex-row items-center justify-between p-8">
        <p className="text-[1.5rem]">Women's Clothing</p>
        <p className="text-sm text-gray-500 cursor-pointer hover:underline">
          See all
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <ButtonPrimary>Abaya</ButtonPrimary>
        <ButtonPrimary>Hoodies</ButtonPrimary>
        <ButtonPrimary>Skirt</ButtonPrimary>
        <ButtonPrimary>Jacket</ButtonPrimary>
      </div>
    </div>
  );
};

export default CategoryCard;

import { ReactNode } from "react";

const ButtonPrimary = ({ children }: { children: ReactNode }) => {
  return (
    <button className="px-6 py-3 bg-[#e2f1fb] font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 active:scale-95">
      {children}
    </button>
  );
};
