import ParallaxSection from '../components/ParallaxSection';
import { FaAward, FaGlobe, FaUsers, FaHeart } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaGlobe />, value: '150+', label: 'Destinations' },
    { icon: <FaUsers />, value: '50K+', label: 'Happy Travelers' },
    { icon: <FaAward />, value: '25+', label: 'Awards Won' },
    { icon: <FaHeart />, value: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="mt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-down">
            About TravelWorld
          </h1>
          <p className="text-xl animate-fade-in-up">
            Your trusted partner in creating unforgettable travel experiences since 2010
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up hover-scale"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-5xl text-primary mb-4 flex justify-center animate-bounce-in">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2 text-shimmer">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800"
                alt="Our Story"
                className="rounded-2xl shadow-2xl hover-lift img-overlay"
              />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2010, TravelWorld began with a simple mission: to make travel accessible 
                and enjoyable for everyone. What started as a small travel agency has grown into a 
                global platform connecting millions of travelers with their dream destinations.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We believe that travel is more than just visiting new places—it's about creating 
                memories, experiencing different cultures, and broadening perspectives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to serve over 50,000 happy travelers annually, offering tours to 
                more than 150 destinations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920">
        <div className="text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Adventure Awaits
          </h2>
          <p className="text-xl animate-fade-in-delay">Join thousands of satisfied travelers</p>
        </div>
      </ParallaxSection>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in-up">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up stagger-1">
            To inspire and enable people to explore the world by providing exceptional travel 
            experiences, personalized service, and sustainable tourism practices that benefit 
            both travelers and local communities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
