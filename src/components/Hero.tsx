import React, { useState, useEffect } from 'react';
import { Play, Plus, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../types/movie';

interface HeroProps {
  movies: Movie[];
  onPlayClick: (movie: Movie) => void;
  onInfoClick: (movie: Movie) => void;
}

const Hero: React.FC<HeroProps> = ({ movies, onPlayClick, onInfoClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentMovie = movies[currentIndex];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || movies.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, movies.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? movies.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % movies.length;
    goToSlide(newIndex);
  };

  if (!currentMovie) return null;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Transition */}
      <div className="absolute inset-0">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${movie.backdrop})` }}
          />
        ))}
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-transparent to-gray-900" />
      </div>

      {/* Navigation Arrows */}
      {movies.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm opacity-0 hover:opacity-100 group-hover:opacity-100"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm opacity-0 hover:opacity-100 group-hover:opacity-100"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center h-full group">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Movie Info with Fade Animation */}
            <div 
              key={currentMovie.id}
              className="animate-fade-in"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-4">
                  Featured Movie
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {currentMovie.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6 text-sm text-gray-300">
                <span className="bg-gray-700 px-2 py-1 rounded">{currentMovie.rating}</span>
                <span>{currentMovie.year}</span>
                <span>{currentMovie.duration}</span>
                <div className="flex space-x-1">
                  {currentMovie.genre.slice(0, 3).map((g, index) => (
                    <span key={g}>
                      {g}{index < currentMovie.genre.slice(0, 3).length - 1 && ', '}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
                {currentMovie.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onPlayClick(currentMovie)}
                  className="flex items-center justify-center space-x-3 bg-white text-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>Play</span>
                </button>
                
                <button
                  onClick={() => onInfoClick(currentMovie)}
                  className="flex items-center justify-center space-x-3 bg-gray-600/80 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-600 transition-all duration-200 backdrop-blur-sm"
                >
                  <Info className="w-5 h-5" />
                  <span>More Info</span>
                </button>
                
                <button className="flex items-center justify-center space-x-3 bg-transparent border-2 border-gray-500 text-white px-6 py-3 rounded-md font-semibold text-lg hover:border-white hover:bg-white hover:text-black transition-all duration-200">
                  <Plus className="w-5 h-5" />
                  <span>My List</span>
                </button>
              </div>

              {/* Cast Info */}
              <div className="mt-8 text-sm text-gray-400">
                <p>
                  <span className="text-gray-300">Starring:</span>{' '}
                  {currentMovie.cast.slice(0, 3).join(', ')}
                </p>
                <p className="mt-1">
                  <span className="text-gray-300">Director:</span> {currentMovie.director}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {movies.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {movies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;