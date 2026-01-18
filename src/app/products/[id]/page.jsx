import Image from "next/image";

export const dynamic = "force-dynamic";

const getSingleProduct = async (id) => {
  try {
    const res = await fetch(``, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

const ProductDetails = async ({ params }) => {
  const { id } = params;
  const product = await getSingleProduct(id);

  if (!product) {
    return (
      <p className="text-center mt-10 text-red-500">
        Product not found
      </p>
    );
  }

  const {
    title,
    subtitle,
    image,
    price,
    discount,
    description,
    reviews,
    sold,
    ratings,
    info,
  } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">

      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Details */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500">{subtitle}</p>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-primary">
            ₹{discountedPrice}
          </span>

          {discount > 0 && (
            <>
              <span className="line-through text-gray-400">
                ₹{price}
              </span>
              <span className="badge badge-secondary">
                {discount}% OFF
              </span>
            </>
          )}
        </div>

        <p className="text-sm text-gray-500">
          ⭐ {ratings} | {reviews} Reviews | Sold {sold}
        </p>

        <button className="btn btn-primary w-full md:w-auto">
          Add to Cart
        </button>

        {/* Description */}
        <div className="pt-4">
          <h3 className="font-semibold text-lg">Description</h3>
          <p className="text-gray-600 whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Info */}
        {info?.length > 0 && (
          <div>
            <h3 className="font-semibold text-lg mt-4">
              Why you’ll love it
            </h3>
            <ul className="list-disc ml-5 text-gray-600">
              {info.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
