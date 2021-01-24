import React, { Component } from 'react';
import 'antd/dist/antd.css';
import MoviesList from './Movies/MoviesList';
import { Layout } from 'antd';
import Filters from './Filters/Filters';

export default class App extends Component {

  state = {
    filters: {
      sort_by: 'popularity.desc'
    },
    page: 1
  }

  onChangeFilters = (value, field) => {
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

  render() {
    const { Header, Content, Footer } = Layout;
    const { filters, page } = this.state;

    return (
      <Layout className="layout">
        <Header style={{ marginBottom: '20px' }}></Header>
        <Content style={{ padding: '0 50px', maxWidth: '1280px', margin: '0 auto' }}>
          <Filters
            filters={filters}
            page={page}
            onChangeFilters={this.onChangeFilters}
            onChangePage={this.onChangePage}
          />
          <MoviesList
            filters={filters}
            page={page}
            onChangePage={this.onChangePage}
          />
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }

}
