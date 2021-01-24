import React, { Component } from 'react';
import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';

export default class MoviesList extends Component {

  render() {

    const { movie } = this.props;
    const { Meta } = Card;

    return (
      <Card
        hoverable
        cover={<img alt="" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />}
      >
        <Meta title={movie.original_title} />
        <div><StarOutlined /> {movie.vote_average}</div>
      </Card>
    );
  }
}
