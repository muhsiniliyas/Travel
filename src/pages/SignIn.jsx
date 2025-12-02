import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setFormError('');
    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setFormError(err.message || 'Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-blue-600 px-4 pt-20">
      {/* Card slides up on load and floats slightly on hover */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden 
                      group animate-slide-up-sm transition-transform duration-500 ease-out 
                      hover:-translate-y-1">
        <div className="grid md:grid-cols-2 min-h-[420px]">
          {/* LEFT: Sign In form (slides in from left) */}
          <div className="relative px-8 py-10 md:px-10 flex items-center justify-center animate-slide-in-left">
            {(formError || error) && (
              <div className="absolute top-4 left-8 right-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm z-10">
                {formError || error}
              </div>
            )}

            <form onSubmit={handleSignIn} className="w-full space-y-5">
              <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
                Welcome Back
              </h2>
              <p className="text-center text-gray-500 mb-4">
                Sign in to continue your journey
              </p>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="you@gmail.com"
                  disabled={isLoading}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="••••••••"
                  disabled={isLoading}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold 
                           hover:bg-blue-600 transition-all duration-300 transform hover:scale-105
                           disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>

              <p className="text-center text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  onClick={goToSignUp}
                  className="text-primary font-semibold hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </form>
          </div>

          {/* RIGHT: New Here? panel (parallax-style slide on hover) */}
          <div className="relative hidden md:flex items-center justify-center 
                          bg-gradient-to-br from-primary to-blue-600 text-white text-center px-8
                          transform transition-transform duration-500 ease-out
                          group-hover:translate-x-1">
            <div className="space-y-4 max-w-md animate-slide-in-right">
              <h3 className="text-3xl font-bold mb-2">New Here?</h3>
              <p className="mb-4 text-sm opacity-90">
                Sign up and unlock exclusive travel deals, personalized recommendations,
                and much more.
              </p>
              <button
                type="button"
                onClick={goToSignUp}
                className="bg-white text-primary px-6 py-2 rounded-full font-semibold 
                           shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:translate-x-1"
              >
                Go to Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
