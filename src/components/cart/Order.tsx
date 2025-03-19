import useStore from "../store/useStore";

const Order = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useStore();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const vat = subtotal * 0.07; // คำนวณ VAT 7%
  const total = subtotal + vat; // รวม VAT เข้ากับ subtotal

  return (
    <div className="container mx-auto max-w-[400px] md:max-w-[1320px] p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Shopping Cart Section */}
      <div className="md:col-span-2">
        <div className="bg-white shadow-md rounded-lg p-6">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#CB8A58] text-[#ffb379]">
                  <th className="text-left p-2"></th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Subtotal</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={`${item.id}-${item.size || "no-size"}`} className="border-b border-[#CB8A58]">
                    <td className="flex items-center p-2">
                      <img src={item.image} alt={item.name} className="w-[50px] md:w-[100px] md:h-[100px] mr-4 bg-cover bg-center" />
                      <div className="hidden md:block">
                        <p>{item.name}</p>
                        {item.size && (
                          <p className="text-sm text-gray-500">Size: {item.size}</p>
                        )}
                      </div>
                    </td>
                    <td className="p-2 text-center">{item.price.toFixed(2)}</td>
                    <td className="p-2 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => decreaseQuantity(item.id, item.size || undefined)} // ลดจำนวน
                          className="px-2 bg-white cursor-pointer rounded"
                        >
                          -
                        </button>
                        <span className="border-1 px-2">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id, item.size || undefined)} // เพิ่มจำนวน
                          className="px-2 bg-white cursor-pointer rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-2 text-center">{(item.price * item.quantity).toFixed(2)}</td>
                    <td className="p-2">
                      <button
                        onClick={() => removeFromCart(item.id, item.size || undefined)} // ลบสินค้า
                        className="text-red-500 cursor-pointer"
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Cart Totals Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Cart Totals</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center">
            <p className="text-lg">Subtotal:</p>
            <span className="font-semibold">{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg">VAT (7%):</p>
            <span className="font-semibold">{vat.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg">Total:</p>
            <span className="font-semibold">{total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-gradient-to-r from-[#CB8A58] to-[#562B1A] text-white cursor-pointer py-3 mt-4 rounded-md">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Order;