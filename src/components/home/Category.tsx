import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import cup from "../../assets/images/cup-coffee.png";
import pancake from "../../assets/images/pancake.png";
import capuccino from "../../assets/images/cappuccino.jpg";
import latte from "../../assets/images/latte.jpg";
import espresso from "../../assets/images/espresso.jpg";
import mocha from "../../assets/images/mocha.jpg";
import americano from "../../assets/images/americano.jpg";
import macchiato from "../../assets/images/macchiato.jpg";
import flatWhite from "../../assets/images/flat-white.jpg";
import affogato from "../../assets/images/affogato.jpg";
import ristretto from "../../assets/images/ristretto.jpg";
import chocolate from "../../assets/images/chocolate-cake.jpg";
import cheesecake from "../../assets/images/cheesecake.jpg";
import tiramisu from "../../assets/images/tiramisu.jpg";
import brownie from "../../assets/images/brownie.jpg";
import croissant from "../../assets/images/croissant.jpg";

import useStore from "../store/useStore";

interface Item {
  id: number;
  name: string;
  price: { S: number; M: number; L: number } | number
  image: string;
}

const coffeeList: Item[] = [
  { id: 101, name: "Cappuccino", price: { S: 80, M: 90, L: 100 }, image: capuccino },
  { id: 102, name: "Latte", price: { S: 90, M: 100, L: 110 }, image: latte },
  { id: 103, name: "Espresso", price: { S: 70, M: 80, L: 90 }, image: espresso },
  { id: 104, name: "Mocha", price: { S: 100, M: 110, L: 120 }, image: mocha },
  { id: 105, name: "Americano", price: { S: 75, M: 85, L: 95 }, image: americano },
  { id: 106, name: "Macchiato", price: { S: 95, M: 105, L: 115 }, image: macchiato },
  { id: 107, name: "Flat White", price: { S: 85, M: 95, L: 105 }, image: flatWhite },
  { id: 108, name: "Affogato", price: { S: 110, M: 120, L: 130 }, image: affogato },
  { id: 109, name: "Ristretto", price: { S: 80, M: 90, L: 100 }, image: ristretto },
];

const dessertList: Item[] = [
  { id: 201, name: "Chocolate Cake", price: 120, image: chocolate },
  { id: 202, name: "Cheesecake", price: 140, image: cheesecake },
  { id: 203, name: "Tiramisu", price: 150, image: tiramisu },
  { id: 204, name: "Brownie", price: 100, image: brownie },
  { id: 205, name: "Croissant", price: 85, image: croissant },
];



const Category: React.FC = () => {
  const [isCoffee, setIsCoffee] = useState(true);
  const [selectedSize, setSelectedSize] = useState<{ [key: number]: "S" | "M" | "L" }>({});

  const { addToCart } = useStore()

  const handleAddToCart = (item: Item) => {
    // ตรวจสอบว่ารายการนี้เป็น coffee และต้องเลือก size
    if (isCoffee && typeof item.price === "object" && !selectedSize[item.id]) {
      alert("Please select a size before adding to cart.");
      return;
    }
  
    const selectedItem = {
      id: item.id,
      name: item.name,
      price: typeof item.price === "object" 
        ? item.price[selectedSize[item.id] || "M"] // ใช้ size เฉพาะ coffee
        : item.price, // ใช้ราคาโดยตรงสำหรับ dessert
      size: isCoffee ? selectedSize[item.id] || "M" : undefined, // เพิ่ม size เฉพาะ coffee
      image: item.image,
    };
  
    console.log("Added to cart:", selectedItem);
    addToCart(selectedItem);
  };

  return (
    <>
      <div className="container mx-auto max-w-[320px] md:max-w-[900px] flex flex-col items-start justify-center">
        <h1 className="text-black text-[25px] font-bold mb-5">Category</h1>
        <ul className="flex gap-5">
          <li className={`cursor-pointer rounded-3xl w-[120px] h-[40px] flex justify-center items-center ${isCoffee ? 'bg-gradient-to-r from-[#CB8A58] to-[#562B1A] text-white' : 'bg-white border border-[#846046] text-[#562B1A]'}`} onClick={() => setIsCoffee(true)}>
            <img src={cup} alt="" className="mr-2" /> Coffee
          </li>
          <li className={`cursor-pointer rounded-3xl w-[120px] h-[40px] flex justify-center items-center ${!isCoffee ? 'bg-gradient-to-r from-[#CB8A58] to-[#562B1A] text-white' : 'bg-white border border-[#846046] text-[#562B1A]'}`} onClick={() => setIsCoffee(false)}>
            <img src={pancake} alt="" className="mr-2" /> Dessert
          </li>
        </ul>
      </div>
      <div className="container mt-5 mx-auto max-w-[320px] md:max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-5">
        {(isCoffee ? coffeeList : dessertList).map((item) => (
          <div key={item.id} className="border-[#CB8A58] border-2 rounded-[25px] p-5 flex flex-col items-center">
            <div className="h-[200px] rounded-[25px] bg-cover bg-center w-full" style={{ backgroundImage: `url(${item.image})` }}></div>
            <h4 className="font-semibold tracking-wider mt-3">{item.name}</h4>
            {isCoffee && typeof item.price === 'object' ? (
              <ul className="flex gap-1 mt-2">
              {Object.keys(item.price).map((size) => (
                <li
                  key={size}
                  className={`border rounded-2xl w-[35px] h-[18px] flex justify-center items-center cursor-pointer ${
                    selectedSize[item.id] === size ? 'bg-[#846046] text-white' : 'border-[#846046] text-[#846046]'
                  }`}
                  onClick={() => setSelectedSize({ ...selectedSize, [item.id]: size as "S" | "M" | "L" })}
                >
                  <p>{size}</p>
                </li>
              ))}
            </ul>
            ) : null}
            <div className="flex justify-between items-center w-full mt-2">
              <div>
                {typeof item.price === 'object' 
                  ? item.price[selectedSize[item.id] || "M"] 
                  : item.price} Baht
              </div>
              <IoIosAddCircle onClick={() => handleAddToCart(item)} size={35} className="text-[#846046] cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
