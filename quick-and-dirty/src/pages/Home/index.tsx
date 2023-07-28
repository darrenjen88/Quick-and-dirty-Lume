import ProductCard from "./Components/ProductCard";
import CartCard from "./Components/CartCard";
import { CartProvider } from "../../contexts/CartContext";
import data from "../../product-data.json";

const Home = () => {
  return (
    <CartProvider>
      <div className="flex justify-between items-start max-w-8xl mx-auto my-0 md:my-20 flex-col-reverse md:flex-row px-4">
        <section className="md:w-7/12 w-full">
          {data.product_data.map((section, ind) => (
            <div key={`section${ind}`} className="mb-20" data-testid="section">
              <h2 className="uppercase md:text-4xl text-2xl mb-4">
                pack section {ind + 1}
              </h2>
              <div className="flex flex-wrap">
                {section.map((product, index) => (
                  <ProductCard
                    product={product}
                    key={product.name + index}
                    index={index + 1}
                    testid={`section${ind + 1}-products`}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
        <section className="shadow-md sticky md:top-36 top-20 grow bg-white md:max-w-xs lg:max-w-sm border-gray-200 border md:pt-0 pt-3 w-full md:mb-0 mb-6">
          <CartCard />
        </section>
      </div>
    </CartProvider>
  );
};

export default Home;
