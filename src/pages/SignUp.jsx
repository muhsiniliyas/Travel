import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    signup(formData.name, formData.email, formData.password);
    navigate('/');
  };

  const goToSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-blue-600 px-4 pt-20">
      <div className="w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT: Welcome Back / Go to Sign In panel */}
          <div className="px-10 py-12 flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-500 text-white text-center">
            <div className="space-y-4 max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold">
                Welcome Back!
              </h2>
              <p className="text-sm md:text-base opacity-90">
                Already a member? Sign in to manage your bookings and continue
                planning your next adventure.
              </p>
              <button
                type="button"
                onClick={goToSignIn}
                className="inline-block bg-white text-orange-500 px-8 py-2 rounded-full font-semibold 
                           shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:translate-x-1"
              >
                Go to Sign In
              </button>
            </div>
          </div>

          {/* RIGHT: Sign Up form */}
          <div className="bg-white px-10 py-12 flex items-center justify-center">
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                Create Account
              </h2>
              <p className="text-center text-gray-500 mb-6">
                Sign up and unlock exclusive travel deals, personalized recommendations,
                and much more.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-3 rounded-lg font-semibold 
                             hover:bg-orange-600 transition duration-300 transform hover:scale-105"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
