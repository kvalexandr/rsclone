import React, { Component } from 'react';
import { API_URL, API_KEY_3 } from '../config/api';
import { Row, Col, Typography } from 'antd';
import MovieItem from './MovieItem';

export default class MoviesPlaying extends Component {
  state = {
    movies: []
  }

  getMovies = () => {
    const link = `${API_URL}/movie/upcoming?api_key=${API_KEY_3}&language=ru-RU`;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results
        });
      });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies } = this.state;

    const { Title } = Typography;

    return (
      <>
        <Title level={3}>Сейчас в кинотеатрах</Title>

        <Row gutter={[16, 16]}>
          {movies.map((movie, idx) => {
            return (
              <Col key={idx} className="gutter-row" xs={24} sm={12} md={6}>
                <MovieItem movie={movie} />
              </Col>
            )
          })}
        </Row>
      </>
    );
  }
}
