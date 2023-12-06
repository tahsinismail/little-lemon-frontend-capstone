import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const Featured = () => {
  const products = [
    {
      id: 101,
      title: "Greek salad",
      price: "$12.00",
      image: "./dish-5.jpg",
      description:
        "Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, and olive oil.",
    },
    {
      id: 102,
      title: "Bruchetta",
      price: "$8.00",
      image: "./dish-2.jpg",
      description:
        "Bruschetta is an antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt. Variations may include toppings of tomato, vegetables, beans, cured meat, or cheese.",
    },
    {
      id: 103,
      title: "Lemon Dessert",
      price: "$5.00",
      image: "./dish-4.jpg",
      description:
        "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.",
    },
  ];
  return (
    <>
      <section className="w-[90%] mx-auto">
        <div className="flex flex-wrap gap-4 justify-between items-center mx-auto my-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#495e57]">
            This week specials
          </h2>

          <Link
            to="/menu"
            className="flex items-center gap-2 px-8 py-2 bg-[#f4ce14] text-black rounded-2xl font-semibold"
          >
            <span> View all</span> <FaChevronRight />
          </Link>
        </div>
        <div className="rounded-2xl flex gap-4 flex-col lg:flex-row items-center justify-center">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Featured;
