/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const EventCard = ({ aevent }) => {
  const { id, title, image, price, date, button, description } = aevent;

  // Slice the description if its length is greater than 100 characters
  const slicedDescription =
    description.length > 100 ? description.slice(0, 130) + "..." : description;

  return (
    <div data-aos="fade-up">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image */}
        <img
          src={image}
          alt="Card Image"
          className="w-full h-40 object-cover object-center"
          data-aos="zoom-in" // Add animation to the image
        />

        <div className="px-6 py-4" data-aos="fade-left">
          {/* Title */}
          <div className="font-bold text-xl mb-2">{title}</div>

          {/* Description */}
          <p>{slicedDescription}</p>

          {/* Date */}
          <p className="text-gray-500 text-base mb-2">{date}</p>

          {/* Price */}
          <p className="text-green-500 text-xl font-semibold mb-4">{price}</p>

          {/* Details Button */}
          <Link to={`/event/${id}`} data-aos="fade-up">
            <button
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              data-aos="zoom-in" // Add animation to the button
            >
              {button}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
