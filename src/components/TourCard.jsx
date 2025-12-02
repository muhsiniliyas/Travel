import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaUsers, FaStar } from 'react-icons/fa';

const TourCard = ({ tour }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover transition duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full font-semibold">
          ${tour.price}
        </div>
        {tour.featured && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center text-yellow-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < tour.rating ? 'text-yellow-500' : 'text-gray-300'} />
          ))}
          <span className="ml-2 text-gray-600 text-sm">({tour.reviews} reviews)</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-primary transition duration-300">
          {tour.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="text-primary mr-2" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaClock className="text-primary mr-2" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaUsers className="text-primary mr-2" />
            <span>Max: {tour.maxPeople} people</span>
          </div>
        </div>

        <Link
          to={`/booking?tour=${tour.id}`}
          className="block w-full bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
