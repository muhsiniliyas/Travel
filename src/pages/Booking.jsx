import { useSearchParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import ParallaxSection from '../components/ParallaxSection';
import { FaCheckCircle } from 'react-icons/fa';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const tourId = searchParams.get('tour');

  // Minimal tour data (same ids/images as Tour.jsx)
  const tours = [
    {
      id: 1,
      title: 'Tropical Paradise Escape',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      price: 116000,
      location: 'Maldives',
      duration: '7 Days / 6 Nights',
    },
    {
      id: 2,
      title: 'Mountain Trekking Adventure',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      price: 145000,
      location: 'Nepal',
      duration: '10 Days / 9 Nights',
    },
    {
      id: 3,
      title: 'European City Tour',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      price: 205000,
      location: 'Europe',
      duration: '14 Days / 13 Nights',
    },
    {
      id: 4,
      title: 'Safari Wildlife Experience',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      price: 255000,
      location: 'Kenya',
      duration: '8 Days / 7 Nights',
    },
    {
      id: 5,
      title: 'Cultural Heritage Tour',
      image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800',
      price: 130000,
      location: 'Thailand',
      duration: '9 Days / 8 Nights',
    },
    {
      id: 6,
      title: 'Northern Lights Expedition',
      image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800',
      price: 300000,
      location: 'Iceland',
      duration: '6 Days / 5 Nights',
    },
  ];

  const selectedTour = tours.find((tour) => String(tour.id) === tourId);

  const benefits = [
    'Best Price Guarantee',
    '24/7 Customer Support',
    'Flexible Cancellation',
    'Secure Payment',
    'Expert Local Guides',
    'Travel Insurance Included',
  ];

  return (
    <div className="mt-16 bg-gray-50 min-h-screen">
      {/* Header with animation */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
            Book Your Adventure
          </h1>
          <p className="text-xl animate-fade-in-up">
            Secure your spot for an unforgettable experience
          </p>
        </div>
      </div>

      {/* Main Content with split animations */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column: selected tour + booking form */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-left">
            {/* Selected Tour Preview */}
            {selectedTour && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-56 md:h-full">
                    <img
                      src={selectedTour.image}
                      alt={selectedTour.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-2">
                      Selected Tour
                    </p>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {selectedTour.title}
                    </h2>
                    <p className="text-gray-600 mb-2">
                      📍 {selectedTour.location}
                    </p>
                    <p className="text-gray-600 mb-2">
                      ⏱ {selectedTour.duration}
                    </p>
                    <p className="text-xl font-semibold text-primary">
                      ₹{selectedTour.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Booking Form */}
            <BookingForm />
          </div>

          {/* Sidebar - slides in from right */}
          <div className="space-y-6 animate-fade-in-right">
            {/* Benefits Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover-lift">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Why Book With Us?
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 animate-scale-in" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Card */}
            <div className="bg-gradient-to-br from-primary to-blue-600 text-white rounded-2xl shadow-xl p-6 hover-glow transform transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="mb-4">Our travel experts are here to assist you</p>
              <div className="space-y-2">
                <p className="font-semibold">📞 +91 </p>
                <p className="font-semibold">✉️ </p>
              </div>
              <p className="text-sm mt-4 opacity-90">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Section with animation */}
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920">
        <div className="text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Start Your Journey Today
          </h2>
          <p className="text-xl animate-fade-in-delay">
            Limited spots available - Book now!
          </p>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Booking;
