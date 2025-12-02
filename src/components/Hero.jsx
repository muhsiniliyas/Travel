import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = () => {
    const section = document.getElementById('features');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: go to /tour page
      navigate('/tour');
    }
  };

  return (
    <section className="relative h-[80vh] md:h-screen overflow-hidden">
      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920')",
          transform: `translateY(${offsetY * 0.4}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight animate-fade-in">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 animate-fade-in-delay">
            Explore breathtaking destinations around the world with unforgettable experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            {/* This button scrolls -> parallax background moves during click */}
            <button onClick={handleExploreClick} className="btn-primary">
              Explore Tours
            </button>

            {/* This one can still navigate to booking page */}
            <Link to="/booking" className="btn-secondary">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
