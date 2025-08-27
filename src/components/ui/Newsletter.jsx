import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = ({ variant = 'default' }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate newsletter subscription
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const containerClasses = variant === 'hero'
    ? 'bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-8 text-white'
    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6';

  const titleClasses = variant === 'hero'
    ? 'text-2xl font-bold mb-2'
    : 'text-xl font-bold text-gray-900 dark:text-white mb-2';

  const descriptionClasses = variant === 'hero'
    ? 'text-blue-100 mb-6'
    : 'text-gray-600 dark:text-gray-400 mb-6';

  return (
    <div className={containerClasses}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-full ${
          variant === 'hero' 
            ? 'bg-white/20' 
            : 'bg-blue-100 dark:bg-blue-900'
        }`}>
          <Mail className={`w-6 h-6 ${
            variant === 'hero' 
              ? 'text-white' 
              : 'text-blue-600 dark:text-blue-400'
          }`} />
        </div>
        <div>
          <h3 className={titleClasses}>
            Stay Updated
          </h3>
          <p className={descriptionClasses}>
            Get the latest AI guides and ChatGPT tips delivered to your inbox.
          </p>
        </div>
      </div>

      {isSubscribed ? (
        <div className={`flex items-center gap-2 p-4 rounded-lg ${
          variant === 'hero' 
            ? 'bg-white/20 text-white' 
            : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
        }`}>
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Thanks for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className={`flex-1 px-4 py-3 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500 ${
              variant === 'hero'
                ? 'bg-white/20 border border-white/30 placeholder-white/70 text-white focus:bg-white/30'
                : 'bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400'
            }`}
          />
          <button
            type="submit"
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-offset-2 ${
              variant === 'hero'
                ? 'bg-white text-blue-600 hover:bg-gray-100 focus:ring-white'
                : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'
            }`}
          >
            Subscribe
          </button>
        </form>
      )}

      <p className={`text-sm mt-4 ${
        variant === 'hero' 
          ? 'text-blue-100' 
          : 'text-gray-500 dark:text-gray-400'
      }`}>
        Join 10,000+ readers. No spam, unsubscribe anytime.
      </p>
    </div>
  );
};

export default Newsletter;