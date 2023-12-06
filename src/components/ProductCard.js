import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
const ProductCard = (props) => {
  return (
    <div className="w-full lg:w-1/3 rounded-2xl bg-white">
      <div className="w-full h-60 lg:h-40">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-cover rounded-tl-2xl rounded-tr-2xl"
        />
      </div>
      <div className="p-4 flex justify-between text-xl font-semibold">
        <h4 className="text-[#495e57]">{props.title}</h4>
        <span className="text-[#f4ce14]">{props.price}</span>
      </div>
      <div className="w-full lg:h-44 px-4">
        <p>{props.description}</p>
      </div>
      <div className="w-full p-4">
        <button className="w-full flex justify-center items-center gap-2 px-8 py-2 bg-[#f4ce14] text-black rounded-2xl font-semibold">
          <span> Add to cart</span> <MdAddShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
