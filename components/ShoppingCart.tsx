"use client"

function ShoppingCart() {
  return (
    <div className="fixed inset-0 z-50 flex justify-end items-start">
      <div className="w-96 bg-white h-full overflow-y-auto p-4 rounded-l-lg
      shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            Close
          </button>
        </div>
        <div className="border-gray-300 mb-4"></div>
        <p>Items in cart will go here</p>
      </div>
      <div
        className="fixed inset-0 z-40"
      ></div>
    </div>
  );
}

export default ShoppingCart;
