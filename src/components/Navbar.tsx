import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const navItems = [
    'Home'
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900 via-gray-900/95 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                Prime<span className="text-blue-400">Video</span>
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={`text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                      index === 0 ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Search and User Controls */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearchSubmit} className="relative hidden sm:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search movies, shows..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </form>

            {/* Mobile Search Button */}
            <button className="sm:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* User Profile */}
            <button className="p-2 text-gray-300 hover:text-white transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 hover:bg-gray-800 rounded-md ${
                    index === 0 ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;