import React, { Component } from 'react';
import { Row, Col, Typography, Tag, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

export default class MoviesDetails extends Component {

  render() {
    const { movie, credits, favorites, onChangeFavorites } = this.props;
    const imagePath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'http://placehold.it/500x750?text=No+Poster';
    const adult = movie.adult ? '18+' : '6+';

    const cast = [];
    if (credits.cast) {
      for (let i = 0; i < 10; i += 1) {
        if (credits.cast[i]) {
          cast.push(credits.cast[i]);
        }
      }
    }

    const about = [
      {
        name: 'Дата производства',
        value: movie.release_date || '-'
      },
      {
        name: 'Страна',
        value: movie.production_countries ? movie.production_countries.map(country => country.name).join(', ') : '-'
      },
      {
        name: 'Жанр',
        value: movie.genres ? movie.genres.map(gener => gener.name).join(', ') : ''
      },
      {
        name: 'Слоган',
        value: movie.tagline || '-'
      },
    ];

    const { Title, Text } = Typography;

    return (
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} sm={8}>
          <img style={{ width: '100%' }} src={imagePath} alt="" />
        </Col>
        <Col xs={24} sm={16}>
          <Title>{movie.title}</Title>
          <Text type="secondary">{movie.original_title}</Text>
          <Tag className="adult">{adult}</Tag>
          <div>
            <span className="vote-average">{movie.vote_average}</span>
            <span className="vote-count">({movie.vote_count})</span>
          </div>
          <div className="favorites-btn">
            <Button
              type={favorites ? 'primary' : 'default'}
              onClick={onChangeFavorites}
              danger
              icon={<HeartOutlined />}
            >
              {favorites ? 'В избранном' : 'Добавить в избранное'}
            </Button>
          </div>
          <div className="overview">
            {movie.overview}
          </div>
          {about.map((elem, id) => {
            return (
              <Row key={id} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col sm={8}>{elem.name}</Col>
                <Col sm={16}>{elem.value}</Col>
              </Row>
            );
          })}
          <div className="person">
            <Title level={3}>В главных ролях</Title>
            <div>
              <Row gutter={[16, 16]}>
                {cast.map((person, id) => {
                  const imagePerson = person.profile_path ? `https://image.tmdb.org/t/p/w500${person.profile_path}` : 'http://placehold.it/500x750?text=No+Photo'

                  return (
                    <Col key={id} data-id={person.id} className="gutter-row" xs={24} sm={12} md={6}>
                      <img style={{ width: '100%' }} src={imagePerson} alt="" />
                      <span>{person.name}</span>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
