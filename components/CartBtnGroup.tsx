type CartBtnGroupProps = {
    quantity: number;
    decreaseCartQuantity: () => void;
    increaseCartQuantity: () => void;
    removeFromCart: () => void;
  }
  
function CartBtnGroup({
  quantity,
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
}: CartBtnGroupProps) {
    return (
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              className="bg-yellow-300 hover:bg-yellow-400 text-black px-2
              py-1 rounded-md text-sm"
              onClick={decreaseCartQuantity}
            >
              -
            </button>
            <div className="text-sm">{quantity} in cart</div>
            <button
              className="bg-yellow-300 hover:bg-yellow-400 text-black px-2
              py-1 rounded-md text-sm"
              onClick={increaseCartQuantity}
            >
              +
            </button>
          </div>
          <button
            className="bg-slate-200 hover:bg-slate-300 text-gray px-2 py-1
            rounded-md text-sm"
            onClick={removeFromCart}
          >
            Remove
          </button>
        </div>
      );
    }

export default CartBtnGroup;
