import React from 'react';
import { Play, Plus, Info } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
  onMovieClick: (movie: Movie) => void;
  className?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onMovieClick, className = '' }) => {
  return (
    <div 
      className={`group relative cursor-pointer transition-all duration-300 transform hover:scale-110 hover:z-20 ${className}`}
      onClick={() => onMovieClick(movie)}
    >
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-800">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
          {movie.rating}
        </div>

        {/* Hover Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">
            {movie.title}
          </h3>
          <div className="flex items-center space-x-2 text-xs text-gray-300 mb-2">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.duration}</span>
          </div>
          <div className="flex space-x-1 mb-3">
            {movie.genre.slice(0, 2).map((genre) => (
              <span key={genre} className="text-xs bg-gray-700/70 text-gray-300 px-2 py-1 rounded">
                {genre}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-2">
            <button 
              className="flex-1 bg-white text-black py-2 px-3 rounded text-xs font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-1"
              onClick={(e) => {
                e.stopPropagation();
                // Handle play action
              }}
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Play</span>
            </button>
            <button 
              className="bg-gray-600/80 text-white p-2 rounded hover:bg-gray-600 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                // Handle add to list action
              }}
            >
              <Plus className="w-3 h-3" />
            </button>
            <button 
              className="bg-gray-600/80 text-white p-2 rounded hover:bg-gray-600 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                onMovieClick(movie);
              }}
            >
              <Info className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;