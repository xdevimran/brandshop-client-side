import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Xiaomi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://b8-a10-server-ptdsh54sf-xdevimran.vercel.app/products/brand/Xiaomi`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (data.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          className="w-64 h-64 mb-8"
          src="https://static.vecteezy.com/system/resources/thumbnails/010/856/652/small/no-result-data-document-or-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg"
          alt="No items found"
        />
        <h1 className="text-4xl text-red-500">
          No items found in this brand category.
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center text-4xl text-blue-700">
        Xiaomi {data.length}
      </h1>
      <div className="container mx-auto px-4 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-10">
        {data.map((product) => (
          <div
            key={product._id}
            className="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt="Product"
              className="h-80  object-cover rounded-t-xl"
            />
            <div className="px-4 py-3">
              <span className="text-black mr-3 uppercase text-xs badge badge-secondary">
                {product.brand}
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize py-1">
                {product.name}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto">
                  ${product.price}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto">
                  Rating: {product.rating} / 5
                </p>
              </div>
            </div>

            <div className="flex ml-auto justify-between p-3">
              <Link to={`/products/${product._id}`}>
                <button className="btn btn-neutral"> Details</button>
              </Link>
              <Link to={`/updateProduct/${product._id}`}>
                <button className="btn btn-neutral"> Update</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Xiaomi;
