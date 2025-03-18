const Order = () => {
  return (
    <>
      <div className="container mx-auto max-w-[400px] md:max-w-[1320px]">
        <h1 className="text-black text-[25px] font-bold mb-5">Your Order:</h1>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <h2 className="text-[20px]">Cappuccino</h2>
            <p>90 Baht</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-[20px]">Latte</h2>
            <p>100 Baht</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-[20px]">Espresso</h2>
            <p>80 Baht</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-[20px]">Mocha</h2>
            <p>110 Baht</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-[20px]">Americano</h2>
            <p>85 Baht</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-[20px]">Macchiato</h2>
            <p>105 Baht</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-[20px]">Flat White</h2>
            <p>95 Baht</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-[20px]">Affogato</h2>
            <p>120 Baht</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-[20px]">Ristretto</h2>
            <p>90 Baht</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order