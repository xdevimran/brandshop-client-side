import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const EventDetails = () => {
  const { id } = useParams();
  const { jsonData } = useContext(AuthContext);
  console.log(jsonData);
  return (
    <div>
      <div className="max-w-4xl mx-auto py-8">
        {/* Banner Image */}
        <img
          src={jsonData[id - 1].image}
          alt="Banner Image"
          className="mb-4 rounded-lg shadow-lg"
        />

        {/* Title */}
        <h1 className="text-3xl font-semibold mb-2">
          {jsonData[id - 1].title}
        </h1>

        {/* Author Info and Post Date */}
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <img
            src={"https://i.pravatar.cc/300"}
            alt="Author Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="font-semibold">John Doe</span>
          <span className="mx-2">•</span>
          <span>{jsonData[id - 1].date}</span>
        </div>

        {/* Article Details */}
        <div className="prose max-w-none">
          <p>{jsonData[id - 1].description}</p>

        </div>

        {/* Read More Button */}
        <div className="mt-4">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg inline-block"
          >
            {jsonData[id - 1].button}
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
