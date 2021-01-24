import React, { Component } from 'react';
import 'antd/dist/antd.css';
import MoviesList from './Movies/MoviesList';
import { Layout } from 'antd';

export default class App extends Component {

  render() {
    const { Header, Content, Footer } = Layout;

    return (
      <Layout className="layout">
        <Header style={{ marginBottom: '20px' }}></Header>
        <Content style={{ padding: '0 50px', maxWidth: '1280px', margin: '0 auto' }}>
          <MoviesList />
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }

}
