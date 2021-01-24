import React, { Component } from 'react';
import { API_URL, API_KEY_3 } from '../config/api';
import { Row, Col } from 'antd';
import MovieItem from './MovieItem';

export default class MoviesList extends Component {
  state = {
    movies: [],
    loading: true
  }

  getMovies = (filters) => {
    const { sort_by } = filters;
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&vote_average.gte=3&sort_by=${sort_by}`;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results,
          loading: false
        });
      });
  }

  componentDidMount() {
    this.getMovies(this.props.filters);
  }

  componentDidUpdate(prevProps) {
    if (this.props.filters.sort_by !== prevProps.filters.sort_by) {
      this.getMovies(this.props.filters);
    }
  }

  render() {
    const { movies } = this.state;
    console.log(movies);

    return (
      <Row gutter={[16, 16]}>
        {movies.map((movie, idx) => {
          return (
            <Col key={idx} className="gutter-row" xs={24} sm={12} md={6}>
              <MovieItem movie={movie} />
            </Col>
          )
        })}
      </Row>
    );
  }
}
