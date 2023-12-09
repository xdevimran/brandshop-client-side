import { useEffect, useState } from "react";

const MyCart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://b8-a10-server-ptdsh54sf-xdevimran.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://b8-a10-server-ptdsh54sf-xdevimran.vercel.app/orders/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        fetch("https://b8-a10-server-ptdsh54sf-xdevimran.vercel.app/orders")
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((err) => console.log(err));
      }
    });
    console.log(id);
  };

  return (
    <div>
      <h2 className="text-4xl text-blue-500 font-extrabold text-center">
        My Ordered Products
      </h2>

      <div>
        {data.map((product, index) => (
          <div
            key={index}
            className="mx-auto max-w-md bg-white rounded-xl overflow-hidden shadow-lg md:max-w-2xl my-10"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {product.name}
                </div>
                <p className="block mt-1 text-2xl leading-tight font-semibold text-black">
                  $ {product.price}
                </p>
                <p className="block mt-1 text-base leading-tight text-gray-800">
                  {product.description}
                </p>
                <p className="mt-2 text-gray-500">{product.rating} stars</p>
                <div className="mt-4">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-warning "
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
