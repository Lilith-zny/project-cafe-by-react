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

interface Item {
  id: number;
  name: string;
  price: { S: string; M: string; L: string } | string;
  image: string;
}

const coffeeList: Item[] = [
  { id: 1, name: "Cappuccino", price: { S: "80 Baht", M: "90 Baht", L: "100 Baht" }, image: capuccino },
  { id: 2, name: "Latte", price: { S: "90 Baht", M: "100 Baht", L: "110 Baht" }, image: latte },
  { id: 3, name: "Espresso", price: { S: "70 Baht", M: "80 Baht", L: "90 Baht" }, image: espresso },
  { id: 4, name: "Mocha", price: { S: "100 Baht", M: "110 Baht", L: "120 Baht" }, image: mocha },
  { id: 5, name: "Americano", price: { S: "75 Baht", M: "85 Baht", L: "95 Baht" }, image: americano },
  { id: 6, name: "Macchiato", price: { S: "95 Baht", M: "105 Baht", L: "115 Baht" }, image: macchiato },
  { id: 7, name: "Flat White", price: { S: "85 Baht", M: "95 Baht", L: "105 Baht" }, image: flatWhite },
  { id: 8, name: "Affogato", price: { S: "110 Baht", M: "120 Baht", L: "130 Baht" }, image: affogato },
  { id: 9, name: "Ristretto", price: { S: "80 Baht", M: "90 Baht", L: "100 Baht" }, image: ristretto },
];

const dessertList: Item[] = [
  { id: 1, name: "Chocolate Cake", price: "120 Baht", image: chocolate },
  { id: 2, name: "Cheesecake", price: "140 Baht", image: cheesecake },
  { id: 3, name: "Tiramisu", price: "150 Baht", image: tiramisu },
  { id: 4, name: "Brownie", price: "100 Baht", image: brownie },
  { id: 5, name: "Croissant", price: "85 Baht", image: croissant },
];

const Category: React.FC = () => {
  const [isCoffee, setIsCoffee] = useState(true);
  const [selectedSize, setSelectedSize] = useState<{ [key: number]: "S" | "M" | "L" }>({});

  return (
    <>
      <div className="container mx-auto max-w-[400px] md:max-w-[900px] flex flex-col items-start justify-center">
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
      <div className="container mt-5 mx-auto max-w-[400px] md:max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-5">
        {(isCoffee ? coffeeList : dessertList).map((item) => (
          <div key={item.id} className="border-[#CB8A58] border-2 rounded-[25px] p-5 flex flex-col items-center">
            <div className="h-[200px] rounded-[25px] bg-cover bg-center w-full" style={{ backgroundImage: `url(${item.image})` }}></div>
            <h4 className="font-semibold tracking-wider mt-3">{item.name}</h4>
            {isCoffee && typeof item.price === 'object' ? (
              <ul className="flex gap-1 mt-2">
                {Object.keys(item.price).map((size) => (
                  <li key={size} className={`border rounded-2xl w-[35px] h-[18px] flex justify-center items-center cursor-pointer ${selectedSize[item.id] === size ? 'bg-[#846046] text-white' : 'border-[#846046] text-[#846046]'}`} onClick={() => setSelectedSize({ ...selectedSize, [item.id]: size as "S" | "M" | "L" })}>
                    <p>{size}</p>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="flex justify-between items-center w-full mt-2">
              <div>
                {typeof item.price === 'object' 
                  ? item.price[selectedSize[item.id] || "M"] 
                  : item.price}
              </div>
              <IoIosAddCircle size={35} className="text-[#846046] cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
