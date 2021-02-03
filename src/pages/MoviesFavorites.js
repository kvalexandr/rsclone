import React, { Component } from 'react';
import MoviesFavoritesList from '../Movies/MoviesFavoritesList';
import { API_URL, API_KEY_3 } from '../config/api';

export default class MoviesFavorites extends Component {
  state = {
    movies: []
  }

  getMovie = (id) => {
    const link = `${API_URL}/movie/${id}?api_key=${API_KEY_3}&language=ru-RU`;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        const movie = this.state.movies;
        movie.push(data);
        this.setState({
          movies: movie,
        });
      });
  }

  getFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites;
  }

  componentDidMount() {
    const favorites = this.getFavorites();
    favorites.forEach(id => {
      this.getMovie(id);
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <>

        <MoviesFavoritesList movies={movies} />
      </>
    );
  }
}
