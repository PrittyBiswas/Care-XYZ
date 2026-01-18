import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { id, title, image, price, discount, sold } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-xl">

      {/* Product Image */}
      <figure className="p-4 flex justify-center">
        <Image
          src={image}
          alt={title}
          width={300}
          height={180}
          className="h-48 w-auto object-contain"
        />
      </figure>

      <div className="card-body pt-0">
        <h2 className="card-title text-lg line-clamp-2">
          {title}
        </h2>

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">
            ₹{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="text-sm line-through text-gray-400">
              ₹{price}
            </span>
          )}
        </div>

        <p className="text-sm text-gray-500">
          Sold: {sold}
        </p>

        <div className="flex gap-2 mt-3">
          <button className="btn  rounded-xl  bg-primary hover:border-primary text-white">
            <FaShoppingCart />
            Add to Cart
          </button>

          {/* products Route */}
          <Link href={`/products/${id}`} className="flex-1">
            <button className="btn border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
