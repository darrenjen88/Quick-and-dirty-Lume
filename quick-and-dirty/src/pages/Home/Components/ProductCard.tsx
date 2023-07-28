import { useEffect, useState } from "react";
import CustomSvg from "../../../components/CustomSvg";
import { useCart } from "../../../contexts/CartContext";
import { ProductType } from "../../../types/types";

interface ProductCardType {
  product: ProductType;
  index: number;
  testid: string;
}

const ProductCard = ({ product, index, testid }: ProductCardType) => {
  const [value, setValue] = useState<number>(0);
  const [valueStyle, setValueStyle] = useState<string>("bg-teal-500");
  const [buttonStyle, setButtonStyle] = useState<string>(
    "bg-gray-200 text-gray-500"
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { cart, setCart } = useCart();

  const handleMinus = () => {
    if (cart.length > 0 && value > 0) setValue(value - 1);
    const index = cart.lastIndexOf(product);
    if (index > -1) {
      setCart((prev) => prev.filter((product, ind) => ind !== index));
    }
  };

  const handlePlus = () => {
    if (cart.length < 3) {
      setValue(value + 1);
      setCart((prev) => [...prev, product]);
    }
  };

  useEffect(() => {
    if (cart.length === 3) {
      if (cart.lastIndexOf(product) < 0) {
        setIsDisabled(true);
        setButtonStyle("bg-transparent text-gray-200");
        setValueStyle("bg-gray-200");
      }
    } else {
      setIsDisabled(false);
      setButtonStyle("bg-gray-200 text-gray-500");
      if (cart.lastIndexOf(product) < 0) {
        setValueStyle("bg-teal-500");
      }
    }
  }, [cart]);

  useEffect(() => {
    if (value > 0) setValueStyle("bg-orange-600 shadow-lg shadow-orange-100");
    if (value === 0) setValueStyle("bg-teal-500");
  }, [value]);

  return (
    <div
      className="w-40 p-4 pt-5 text-center shadow-md grow md:m-4 m-2 bg-white"
      data-testid={testid}
    >
      <h3 className="md:text-2xl text-lg mb-4">Option {index}</h3>
      <CustomSvg name={product.name} type="product" />
      <div className="flex items-center justify-center">
        <button
          onClick={handleMinus}
          className={`text-2xl w-9 h-9 rounded-full pb-1 ${buttonStyle}`}
          disabled={isDisabled}
        >
          -
        </button>
        <input
          type="text"
          value={value}
          className={`pointer-events-none w-12 h-12 text-center ${valueStyle}	rounded-full text-white text-xl mx-1 pb-1`}
          onChange={(e) => e.preventDefault}
        ></input>
        <button
          onClick={handlePlus}
          className={`text-2xl w-9 h-9 rounded-full pb-1 ${buttonStyle}`}
          disabled={isDisabled}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
