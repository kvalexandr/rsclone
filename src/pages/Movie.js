import React, { Component } from 'react';
import MovieDetails from '../Movies/MovieDetails';
import { API_URL, API_KEY_3 } from '../config/api';

export default class Movie extends Component {

  state = {
    movie: [],
    credits: []
  }

  getMovie = (id) => {
    const link = `${API_URL}/movie/${id}?api_key=${API_KEY_3}&language=ru-RU`;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          movie: data,
        });
      });
  }

  getCredits = (id) => {
    const link = `${API_URL}/movie/${id}/credits?api_key=${API_KEY_3}&language=ru-RU`;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          credits: data,
        });
      });
  }

  componentDidMount() {
    this.getMovie(this.props.match.params.id);
    this.getCredits(this.props.match.params.id);
  }

  render() {
    const { movie, credits } = this.state;

    return (
      <MovieDetails movie={movie} credits={credits} />
    );
  }
}
