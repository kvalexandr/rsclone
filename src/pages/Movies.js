import React, { Component } from 'react';
import MoviesList from '../Movies/MoviesList';
import Filters from '../Filters/Filters';

export default class Movies extends Component {
  state = {
    filters: {
      sort_by: 'popularity.desc',
      year: '2021',
      genres: ''
    },
    page: 1,
    totalPage: 0
  }

  onChangeFilters = (value, field) => {
    console.log(value);
    const newFilters = {
      ...this.state.filters,
      [field]: value
    };
    this.setState({
      filters: newFilters
    });
  }

  onChangePage = page => {
    this.setState({
      page
    });
  }

  onChangeTotalPage = totalPage => {
    console.log(totalPage);
    this.setState({
      totalPage
    });
  }

  render() {

    const { filters, page, totalPage } = this.state;

    return (
      <>
        <Filters
          filters={filters}
          page={page}
          totalPage={totalPage}
          onChangeFilters={this.onChangeFilters}
          onChangePage={this.onChangePage}
        />
        <MoviesList
          filters={filters}
          page={page}
          onChangePage={this.onChangePage}
          onChangeTotalPage={this.onChangeTotalPage}
        />
      </>
    );
  }
}
