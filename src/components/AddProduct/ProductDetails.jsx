import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const singleData = useLoaderData();
  const { name, image, price, rating, description } = singleData;

  const handleAddToCart = () => {
    console.log("Product Details:", singleData);
    // Add your logic here for adding to the cart
    fetch("https://b8-a10-server-ptdsh54sf-xdevimran.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(singleData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Add to cart successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mx-auto max-w-md bg-white rounded-xl overflow-hidden shadow-lg md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={image}
            alt={name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {name}
          </div>
          <p className="block mt-1 text-2xl leading-tight font-semibold text-black">
            $ {price}
          </p>
          <p className="block mt-1 text-base leading-tight text-gray-800">
            {description}
          </p>
          <p className="mt-2 text-gray-500">{rating} stars</p>
          <div className="mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
