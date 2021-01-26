import React, { PureComponent } from 'react';
import { Form, Select } from 'antd';
import { API_URL, API_KEY_3 } from '../config/api';

export default class Genres extends PureComponent {

  state = {
    genres: []
  };

  static defaultProps = {
    options: []
  };

  getGenres = () => {
    const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=ru-RU`;
    fetch(link)
      .then(response => response.json())
      .then(data => {

        this.setState({
          genres: data.genres,
        });
      });
  }

  componentDidMount() {
    this.getGenres();
  }

  render() {

    const { onChangeFilters } = this.props;
    const { genres } = this.state;

    const genresOptions = [];
    genres.forEach(genre => {
      genresOptions.push({
        label: genre.name,
        value: genre.id
      });
    });

    return (
      <Form.Item label="Жанр:">
        <Select
          placeholder='Выберите жанр...'
          style={{ width: '300px' }}
          labelInValue
          onChange={onChangeFilters}
          options={genresOptions}
        />
      </Form.Item>
    );
  }
}
