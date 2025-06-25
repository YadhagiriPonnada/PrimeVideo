import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../types/movie';
import MovieCard from './MovieCard';

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ title, movies, onMovieClick }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const targetScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'right' ? scrollAmount : -scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="group relative mb-8">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 px-4 sm:px-6 lg:px-8">
        {title}
      </h2>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm ${
            !canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-100'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm ${
            !canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-100'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Movies Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          className="flex space-x-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={onMovieClick}
              className="flex-none w-48 sm:w-56"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;