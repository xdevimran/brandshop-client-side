import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const updateProduct = useLoaderData();
  const { image, name, brand, type, price, rating, description } =
    updateProduct;
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const newProduct = { image, name, brand, type, price, rating, description };
    console.log(newProduct);

    // Send data to server
    fetch(
      `https://b8-a10-server-ptdsh54sf-xdevimran.vercel.app/products/${updateProduct._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error:", error);
      });
  };
  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white p-8 rounded-md">
        <form onSubmit={handleUpdate}>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Image
            </label>
            <input
              defaultValue={image}
              type="text"
              placeholder="Image URL"
              id="image"
              name="image"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              defaultValue={name}
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Product name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="type"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Brand Name
            </label>
            <select
              defaultValue={brand}
              id="brand"
              name="brand"
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="Dell">Dell</option>
              <option value="Hp">Hp</option>
              <option value="Apple">Apple</option>
              <option value="Lg">Lg</option>
              <option value="Google">Google</option>
              <option value="Xiaomi">Xiaomi</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="type"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Types
            </label>
            <select
              defaultValue={type}
              id="type"
              name="type"
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="phone">Phone</option>
              <option value="computer">Computer</option>
              <option value="headphone">Headphone</option>
              <option value="Laptop">Laptop</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Price
            </label>
            <input
              defaultValue={price}
              type="text"
              id="price"
              name="price"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Price"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Short Description
            </label>
            <textarea
              defaultValue={description}
              id="description"
              name="description"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Short description"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="rating"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Rating
            </label>
            <input
              defaultValue={rating}
              type="number"
              id="rating"
              name="rating"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Rating"
              min="1"
              max="5"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
