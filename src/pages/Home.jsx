// Home.jsx
import Hero from '../components/Hero';
import ParallaxSection from '../components/ParallaxSection';
import { FaUmbrellaBeach, FaMountain, FaCity, FaHotel, FaPlane, FaCompass } from 'react-icons/fa';

const Home = () => {
  const features = [
    { icon: <FaUmbrellaBeach />, title: 'Beach Destinations', desc: 'Relax on pristine beaches' },
    { icon: <FaMountain />, title: 'Mountain Adventures', desc: 'Conquer breathtaking peaks' },
    { icon: <FaCity />, title: 'City Tours', desc: 'Explore vibrant urban landscapes' },
  ];

  const services = [
    { icon: <FaPlane />, title: 'Flight Booking', desc: 'Best deals on flights worldwide' },
    { icon: <FaHotel />, title: 'Hotel Reservation', desc: 'Luxury stays at great prices' },
    { icon: <FaCompass />, title: 'Tour Packages', desc: 'Customized travel experiences' },
  ];

  return (
    <div className="mt-16">
      <Hero />

      {/* Features Section */}
      <section id="features" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-600 mb-12 animate-fade-in-up stagger-1">
            Discover amazing destinations with our expertly crafted travel experiences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`card text-center animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="text-5xl text-primary mb-4 flex justify-center animate-bounce-in">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section with Explore Button */}
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1920">
        <div className="text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in drop-shadow-2xl">
            Your Journey Starts Here
          </h2>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay drop-shadow-lg">
            Book your dream vacation today
          </p>
          
          {/* Explore Button with parallax effect */}
          <a
            href="/tour"
            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full 
                       font-bold text-lg shadow-2xl hover:shadow-primary/50
                       transition-all duration-300 transform hover:scale-110 hover:-translate-y-2
                       animate-bounce-in"
          >
            <FaCompass className="text-2xl animate-spin-slow" />
            Explore Destinations
          </a>
        </div>
      </ParallaxSection>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fade-in-up">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-primary to-blue-600 text-white p-8 rounded-2xl hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 animate-scale-in">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="opacity-90">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 animate-fade-in-up stagger-1">
            Join thousands of happy travelers exploring the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-2">
            <a href="/tour" className="btn-secondary">
              Browse Tours
            </a>
            <a
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
