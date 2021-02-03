import React, { Component } from 'react';
import { Row, Col, Typography } from 'antd';
import MovieItem from './MovieItem';

export default class MoviesFavoritesList extends Component {

  render() {
    const { movies } = this.props;

    const { Title } = Typography;

    return (
      <>
        <Title level={3}>Избранное</Title>

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
