import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <setion id="products" className="max-container max-sm:mt-12">
      <div
        className="flex flex-col
      justify-start gap-5"
      >
        <h2
          className="text-4xl
        font-palanquin
        font-bold"
        >
          Our
          <span className="text-coral-red"> Popular Products</span>
        </h2>
        <p
          className="lg:max-w-lg mt-2 
        font-montserrat 
        text-slate-gray
        "
        >
          This is a dummy content This is a dummy content This is a dummy
          content This is a dummy content This is a dummy content This is a
          dummy content
        </p>
      </div>
      <div className="mt-16 grid
      lg:grid-col-4 md:grid-cols-4
      sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-12 ">
        {
          products.map((product) => (
            <PopularProductCard key = 
            {product.name} {...product}/>
          ))
        }

      </div>
    </setion>
  );
};

export default PopularProducts;
