// import cup from "../../assets/images/cup-coffee.png"
// import pancake from "../../assets/images/pancake.png"
// import { Link } from "react-router"

// import { useState } from "react";

// import capuccino from "../../assets/images/cappuccino.jpg";
// import latte from "../../assets/images/latte.jpg";
// import espresso from "../../assets/images/espresso.jpg";
// import mocha from "../../assets/images/mocha.jpg";
// import americano from "../../assets/images/americano.jpg";
// import macchiato from "../../assets/images/macchiato.jpg";
// import flatWhite from "../../assets/images/flat-white.jpg";
// import affogato from "../../assets/images/affogato.jpg";
// import ristretto from "../../assets/images/ristretto.jpg";
// import { IoIosAddCircle } from "react-icons/io";

// // Mock data
// const coffeeList = [
//   { id: 1, name: "Cappuccino", price: "90 Baht", image: capuccino },
//   { id: 2, name: "Latte", price: "100 Baht", image: latte },
//   { id: 3, name: "Espresso", price: "80 Baht", image: espresso },
//   { id: 4, name: "Mocha", price: "110 Baht", image: mocha },
//   { id: 5, name: "Americano", price: "85 Baht", image: americano },
//   { id: 6, name: "Macchiato", price: "105 Baht", image: macchiato },
//   { id: 7, name: "Flat White", price: "95 Baht", image: flatWhite },
//   { id: 8, name: "Affogato", price: "120 Baht", image: affogato },
//   { id: 9, name: "Ristretto", price: "90 Baht", image: ristretto },
// ];

// import chocolate from "../../assets/images/chocolate-cake.jpg";
// import cheesecake from "../../assets/images/cheesecake.jpg";
// import tiramisu from "../../assets/images/tiramisu.jpg";
// import brownie from "../../assets/images/brownie.jpg";
// import croissant from "../../assets/images/croissant.jpg";

// // Mock data
// const dessertList = [
//   { id: 1, name: "Chocolate Cake", price: "120 Baht", image: chocolate },
//   { id: 2, name: "Cheesecake", price: "140 Baht", image: cheesecake },
//   { id: 3, name: "Tiramisu", price: "150 Baht", image: tiramisu },
//   { id: 4, name: "Brownie", price: "100 Baht", image: brownie },
//   { id: 5, name: "Croissant", price: "85 Baht", image: croissant },
// ];

// const Category_copy = () => {

//   const [isCoffee, setIsCoffee] = useState(true)
//   const [isDessert, setIsDessert] = useState(false)

//   const coffee = () => {
//     console.log(isCoffee)
//     setIsCoffee(!isCoffee)
//     console.log(isDessert)
//     setIsDessert(!isDessert)
//   }

//   return (
//     <>
//       <div>
//         <div className="container mx-auto max-w-[400px] md:max-w-[900px] flex flex-col md:h-[150px] items-start justify-center">
//           <h1 className="text-black text-[25px] font-bold mb-5">Category</h1>
//           <ul className="flex gap-5">
//             <li className="bg-gradient-to-r from-[#CB8A58] to-[#562B1A] cursor-pointer rounded-3xl w-[120px] h-[40px] flex justify-center items-center">
//               <p onClick={coffee} className="flex items-center text-white uppercase font-extrabold">
//                 <img src={cup} alt="" className="mr-2" />
//                 Coffee
//               </p>
//             </li>
//             <li className="bg-white border border-[#846046] cursor-pointer rounded-3xl w-[120px] h-[40px] flex justify-center items-center">
//               <p onClick={coffee} className="flex items-center text-[#562B1A] uppercase font-extrabold">
//                 <img src={pancake} alt="" className="mr-2" />
//                 Dessert
//               </p>
//             </li>
//           </ul>
//         </div>
//       </div>
//       {
//         isCoffee ? (
//           <div className="mb-10">
//               <div className="container mt-5 mx-auto max-w-[400px] md:max-w-[900px] min-h-[700px] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-19">
//                 {
//                   coffeeList.map((coffee) => {
//                     return (
//                       <div key={coffee.id} className="border-[#CB8A58] border-2 rounded-[25px] p-5 h-[300px] w-[250px] flex flex-col">
//                         <div className={h-[200px] rounded-[25px] bg-blue-500 bg-cover bg-center w-full} style={{ backgroundImage: url(${coffee.image}) }}></div>
//                         <h4 className="font-semibold tracking-wider mb-2">{coffee.name}</h4>
//                         <ul className="flex gap-1">
//                           <li className="bg-[#846046] text-white rounded-2xl w-[35px] h-[18px] flex justify-center items-center cursor-pointer">
//                             <p>S</p>
//                           </li>
//                           <li className="border border-[#846046] text-[#846046] rounded-2xl w-[35px] h-[18px] flex justify-center items-center cursor-pointer">
//                             <p>M</p>
//                           </li>
//                           <li className="border border-[#846046] text-[#846046] rounded-2xl w-[35px] h-[18px] flex justify-center items-center cursor-pointer">
//                             <p>L</p>
//                           </li>
//                         </ul>
//                         <div className="flex justify-between items-center w-full mt-2">
//                           <div>{coffee.price}</div>
//                           <IoIosAddCircle size={35} className="text-[#846046] cursor-pointer" />
//                         </div>
//                       </div>
//                     )
//                   })
//                 }
//               </div>
//             </div>
//         ) : (
//           <div className="mb-10">
//               <div className="container mt-5 mx-auto max-w-[400px] md:max-w-[900px] min-h-[700px] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-19">
//                 {
//                   dessertList.map((dessert) => {
//                     return (
//                       <div key={dessert.id} className="border-[#CB8A58] border-2 rounded-[25px] p-5 h-[300px] w-[250px] flex flex-col">
//                         <div className={h-[200px] rounded-[25px] bg-blue-500 bg-cover bg-center w-full} style={{ backgroundImage: url(${dessert.image}) }}></div>
//                         <h4 className="font-semibold tracking-wider mb-2">{dessert.name}</h4>
//                         <div className="flex justify-between items-center w-full mt-2">
//                           <div>{dessert.price}</div>
//                           <IoIosAddCircle size={35} className="text-[#846046] cursor-pointer" />
//                         </div>
//                       </div>
//                     )
//                   })
//                 }
//               </div>
//             </div>
//         )
//       }
      
//     </>
//   )
// }

// export default Category