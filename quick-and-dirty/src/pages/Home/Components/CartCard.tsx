import { useEffect, useState } from "react";
import { useCart } from "../../../contexts/CartContext";
import CustomSvg from "../../../components/CustomSvg";

const CartCard = () => {
  const { cart } = useCart();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (cart.length === 3) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [cart]);

  return (
    <>
      <div className="bg-gradient-to-b from-teal-500 to-teal-600 md:px-4 px-2 md:py-9 py-4 text-white rounded-t relative cart-header">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="-1.175000 -56.329167 29.900000 27.029167"
            className="fill-white mx-auto"
          >
            <path d="M10.175000 -47.029167L13.450000 -55.854167C13.566667 -56.170833 13.712500 -56.329167 13.887500 -56.329167C14.062500 -56.329167 14.208333 -56.170833 14.325000 -55.854167L17.550000 -47.029167L28.075000 -47.029167C28.425000 -47.029167 28.625000 -46.958333 28.675000 -46.816667C28.725000 -46.675000 28.608333 -46.504167 28.325000 -46.304167L19.775000 -40.079167L23.025000 -30.054167C23.141667 -29.720833 23.137500 -29.508333 23.012500 -29.416667C22.887500 -29.325000 22.683333 -29.379167 22.400000 -29.579167L13.825000 -35.729167L5.275000 -29.554167C4.991667 -29.354167 4.787500 -29.300000 4.662500 -29.391667C4.537500 -29.483333 4.533333 -29.695833 4.650000 -30.029167L7.900000 -40.029167L-0.775000 -46.304167C-1.058333 -46.504167 -1.175000 -46.675000 -1.125000 -46.816667C-1.075000 -46.958333 -0.883333 -47.029167 -0.550000 -47.029167ZM10.175000 -47.029167"></path>
          </svg>
        </div>
        <h2 className="uppercase md:text-3xl text-xl md:mb-4 mb-0">
          build your pack
        </h2>
        <p className="md:text-2xl text-lg">
          <del className="opacity-70 mr-1">$14.97</del>
          $33.99
        </p>
      </div>
      <div className="border-solid border-b border-gray-200 md:py-6 py-3 px-4 bg-white">
        <div className="flex justify-center">
          <div className="w-14 h-14 border-gray-300 border mx-2 rounded">
            {cart[0] && <CustomSvg name={cart[0].name} type="cart" />}
          </div>
          <div className="w-14 h-14 border-gray-300 border mx-2 rounded">
            {cart[1] && <CustomSvg name={cart[1].name} type="cart" />}
          </div>
          <div className="w-14 h-14 border-gray-300 border mx-2 rounded">
            {cart[2] && <CustomSvg name={cart[2].name} type="cart" />}
          </div>
        </div>
      </div>
      <div className="bg-white md:p-5 p-2 fixed md:static left-0 bottom-0 w-full">
        <button
          className={`text-white text-xl ${
            isDisabled ? "bg-stone-300" : "bg-orange-600"
          } uppercase w-full rounded-md p-2`}
          disabled={isDisabled}
        >
          add to cart
        </button>
      </div>
    </>
  );
};

export default CartCard;
