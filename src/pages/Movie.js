import React, { Component } from 'react';
import MovieDetails from '../Movies/MovieDetails';
import { API_URL, API_KEY_3 } from '../config/api';

export default class Movie extends Component {

  state = {
    movie: [],
    credits: [],
    favorites: false
  }

  getMovie = (id) => {
    const link = `${API_URL}/movie/${id}?api_key=${API_KEY_3}&language=ru-RU`;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        const favorites = this.getFavorites();
        this.setState({
          movie: data,
          favorites: favorites.includes(data.id),
        });
      });
  }

  getCredits = (id) => {
    const link = `${API_URL}/movie/${id}/credits?api_key=${API_KEY_3}&language=ru-RU`;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        this.setState({
          credits: data,
        });
      });
  }

  getMovieId = () => {
    return this.state.movie.id;
  }

  getFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites;
  }

  addFavorites = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  changeFavorites = () => {
    let favorites = this.getFavorites();
    let isFavorites = false;

    if (favorites.indexOf(this.getMovieId()) === -1) {
      favorites.push(this.getMovieId());
      isFavorites = true;
    } else {
      favorites = favorites.filter(id => id !== this.getMovieId());
    }

    this.addFavorites(favorites);
    this.setState({
      favorites: isFavorites
    });
  }

  componentDidMount() {
    this.getMovie(this.props.match.params.id);
    this.getCredits(this.props.match.params.id);
  }

  render() {
    const { movie, credits, favorites } = this.state;

    return (
      <MovieDetails
        favorites={favorites}
        movie={movie}
        credits={credits}
        onChangeFavorites={this.changeFavorites}
      />
    );
  }
}
