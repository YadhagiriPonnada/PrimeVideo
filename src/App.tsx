import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieCarousel from './components/MovieCarousel';
import MovieDetails from './components/MovieDetails';
import { movies, movieCategories } from './data/movies';
import { Movie } from './types/movie';

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Use first 4 movies as featured movies for the slideshow
  const featuredMovies = movies.slice(0, 4);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  const handlePlayMovie = (movie?: Movie) => {
    // Implement play functionality
    console.log('Playing movie:', movie?.title || selectedMovie?.title);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search functionality
    console.log('Searching for:', query);
  };

  const handleFeaturedPlay = (movie: Movie) => {
    console.log('Playing featured movie:', movie.title);
    handlePlayMovie(movie);
  };

  const handleFeaturedInfo = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navbar onSearch={handleSearch} />

      {/* Hero Section with Slideshow */}
      <Hero 
        movies={featuredMovies}
        onPlayClick={handleFeaturedPlay}
        onInfoClick={handleFeaturedInfo}
      />

      {/* Movie Categories */}
      <div className="relative z-10 -mt-32 pb-20">
        <div className="space-y-8">
          {movieCategories.map((category) => (
            <MovieCarousel
              key={category.id}
              title={category.name}
              movies={category.movies}
              onMovieClick={handleMovieClick}
            />
          ))}
        </div>
      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={handleCloseDetails}
          onPlay={() => handlePlayMovie(selectedMovie)}
        />
      )}
    </div>
  );
}

export default App;