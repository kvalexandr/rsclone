import React, { Component } from 'react';
import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default class MoviesList extends Component {

  render() {

    const { movie } = this.props;
    const { Meta } = Card;
    const imagePath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'http://placehold.it/500x750?text=No+Poster'

    return (
      <Link to={`/movies/${movie.id}`}>
        <Card
          hoverable
          cover={<img className="image-poster" alt={movie.original_title} src={imagePath} />}
        >
          <Meta title={movie.original_title} />
          <div><StarOutlined /> {movie.vote_average}</div>
        </Card>
      </Link>
    );
  }
}
