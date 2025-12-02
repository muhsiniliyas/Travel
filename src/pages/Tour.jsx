import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter } from 'react-icons/fa';

const Tour = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBrowseClick = () => {
    const section = document.getElementById('tours-grid');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tours = [
    {
      id: 1,
      title: 'Tropical Paradise Escape',
      description:
        'Experience the beauty of pristine beaches, crystal-clear waters, and lush tropical landscapes in this unforgettable island adventure.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      price: 116000,
      location: 'Maldives',
      duration: '7 Days / 6 Nights',
      maxPeople: 12,
      rating: 5,
      reviews: 248,
      category: 'beach',
      featured: true,
    },
    {
      id: 2,
      title: 'Mountain Trekking Adventure',
      description:
        'Conquer majestic peaks and explore breathtaking mountain trails with experienced guides in the Himalayas.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      price: 145000,
      location: 'Nepal',
      duration: '10 Days / 9 Nights',
      maxPeople: 8,
      rating: 5,
      reviews: 187,
      category: 'mountain',
      featured: true,
    },
    {
      id: 3,
      title: 'European City Tour',
      description:
        'Discover the rich history, culture, and cuisine of iconic European cities including Paris, Rome, and Barcelona.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      price: 205000,
      location: 'Europe',
      duration: '14 Days / 13 Nights',
      maxPeople: 20,
      rating: 4,
      reviews: 356,
      category: 'city',
    },
    {
      id: 4,
      title: 'Safari Wildlife Experience',
      description:
        'Witness incredible wildlife in their natural habitat on an unforgettable African safari adventure.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      price: 255000,
      location: 'Kenya',
      duration: '8 Days / 7 Nights',
      maxPeople: 10,
      rating: 5,
      reviews: 142,
      category: 'adventure',
      featured: true,
    },
    {
      id: 5,
      title: 'Cultural Heritage Tour',
      description:
        'Immerse yourself in ancient temples, traditional ceremonies, and rich cultural experiences in Southeast Asia.',
      image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800',
      price: 130000,
      location: 'Thailand',
      duration: '9 Days / 8 Nights',
      maxPeople: 15,
      rating: 4,
      reviews: 289,
      category: 'cultural',
    },
    {
      id: 6,
      title: 'Northern Lights Expedition',
      description:
        'Chase the magical Aurora Borealis across the Arctic Circle in this once-in-a-lifetime adventure.',
      image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800',
      price: 300000,
      location: 'Iceland',
      duration: '6 Days / 5 Nights',
      maxPeople: 12,
      rating: 5,
      reviews: 198,
      category: 'adventure',
    },
    {
      id: 7,
      title: 'Caribbean Cruise Getaway',
      description:
        'Sail across turquoise waters, visit multiple tropical islands, and enjoy all‑inclusive luxury on a premium cruise ship.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800',
      price: 225000,
      location: 'Caribbean',
      duration: '8 Days / 7 Nights',
      maxPeople: 30,
      rating: 5,
      reviews: 175,
      category: 'beach',
      featured: true,
    },
    {
      id: 8,
      title: 'Japanese Cherry Blossom Tour',
      description:
        'Experience iconic cherry blossoms, ancient temples, and modern cityscapes in Tokyo, Kyoto, and Osaka.',
      image: 'https://images.unsplash.com/photo-1526481280695-3c687fd543c0?w=800',
      price: 250000,
      location: 'Japan',
      duration: '10 Days / 9 Nights',
      maxPeople: 18,
      rating: 5,
      reviews: 204,
      category: 'cultural',
    },
    {
      id: 9,
      title: 'Desert Safari & Stargazing',
      description:
        'Ride across golden dunes, enjoy a traditional Bedouin camp, and gaze at millions of stars in the clear desert sky.',
      image: 'https://images.unsplash.com/photo-1508261306211-45a1c5c2a5c5?w=800',
      price: 100000,
      location: 'Dubai',
      duration: '4 Days / 3 Nights',
      maxPeople: 16,
      rating: 4,
      reviews: 132,
      category: 'adventure',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Tours' },
    { value: 'beach', label: 'Beach' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'city', label: 'City' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'cultural', label: 'Cultural' },
  ];

  const filteredTours = tours.filter((tour) => {
    const matchesSearch =
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || tour.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mt-16 min-h-screen bg-gray-50">
      {/* Parallax Header */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600')",
            transform: `translateY(${offsetY * 0.3}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-down">
              Explore Our Tours
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 animate-fade-in-up">
              Find your perfect adventure from our curated collection
            </p>
            <button
              onClick={handleBrowseClick}
              className="btn-primary animate-fade-in-up"
            >
              Browse Tours
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-slide-down">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search tours or destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              />
            </div>
            <div className="relative">
              <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Tours Grid */}
        <section
          id="tours-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTours.map((tour, index) => (
            <div
              key={tour.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift flex flex-col h-full">
                {/* IMAGE clickable → booking with tour id */}
                <Link
                  to={`/booking?tour=${tour.id}`}
                  className="block relative h-56 overflow-hidden"
                >
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {tour.featured && (
                    <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      Featured
                    </span>
                  )}
                </Link>

                <div className="p-6 flex flex-col gap-2 flex-grow">
                  <h2 className="text-xl font-bold text-gray-800">
                    {tour.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {tour.description}
                  </p>
                  <p className="text-gray-600 mt-1">📍 {tour.location}</p>
                  <p className="text-gray-600">⏱ {tour.duration}</p>
                  <p className="text-gray-500 text-sm">
                    👥 Up to {tour.maxPeople} people · ⭐ {tour.rating} ({tour.reviews} reviews)
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-lg font-semibold text-primary">
                      ₹{tour.price.toLocaleString()}
                    </p>
                    {/* BOOK NOW button → same booking URL */}
                    <Link
                      to={`/booking?tour=${tour.id}`}
                      className="inline-block btn-secondary text-sm"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* No results message */}
        {filteredTours.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-2xl text-gray-500">
              No tours found matching your criteria
            </p>
            <p className="text-gray-400 mt-2">
              Try adjusting your search or filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tour;
