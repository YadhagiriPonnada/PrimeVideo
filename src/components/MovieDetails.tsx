import React from 'react';
import { X, Play, Plus, Star, Calendar, Clock, Users } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieDetailsProps {
  movie: Movie;
  onClose: () => void;
  onPlay: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onClose, onPlay }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <div className="relative h-80 bg-cover bg-center rounded-t-lg overflow-hidden"
               style={{ backgroundImage: `url(${movie.backdrop})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Movie Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {movie.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{movie.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{movie.duration}</span>
                  </div>
                  <span className="bg-gray-700 px-3 py-1 rounded">{movie.rating}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>8.2</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {movie.genre.map((genre) => (
                    <span key={genre} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {genre}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {movie.description}
                </p>

                {/* Cast and Crew */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Cast
                    </h3>
                    <p className="text-gray-300">{movie.cast.join(', ')}</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Director</h3>
                    <p className="text-gray-300">{movie.director}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onPlay}
                  className="flex items-center justify-center space-x-3 bg-white text-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>Play Movie</span>
                </button>
                
                <button className="flex items-center justify-center space-x-3 bg-gray-600/80 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-600 transition-all duration-200">
                  <Plus className="w-5 h-5" />
                  <span>Add to My List</span>
                </button>
              </div>
            </div>

            {/* Right Column - Video Preview */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-700 relative group cursor-pointer">
                  <img 
                    src={movie.poster} 
                    alt={`${movie.title} preview`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">Trailer</h3>
                  <p className="text-gray-400 text-sm">Click to watch the official trailer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;