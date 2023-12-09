import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";

const Hp = () => {
  const images = [
    "https://i.ibb.co/93ZQgV9/Apple-Products-9.png",
    "https://i.ibb.co/fnhSnk3/Apple-Products-8.png",
    "https://i.ibb.co/chXmF63/Apple-Products-7.png",
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://b8-a10-server-ptdsh54sf-xdevimran.vercel.app/products/brand/Hp"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* carousel slider start */}
      <div style={{ width: "50%", margin: "auto" }}>
        <Slider images={images} width="100%" height="auto" />
      </div>
      {/* carousel slider end */}
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
                <button className="btn btn-neutral">Details</button>
              </Link>
              <Link to={`/updateProduct/${product._id}`}>
                <button className="btn btn-neutral">Update</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hp;
