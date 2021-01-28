import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Home from './pages/Home';

export default class App extends Component {

  render() {
    const { Header, Content, Footer } = Layout;

    return (
      <BrowserRouter>
        <Layout className="layout">
          <Header style={{ marginBottom: '20px' }}>
            <Content style={{ padding: '0 50px', maxWidth: '1280px', margin: '0 auto', display: 'flex' }}>
              <div className="logo">Кинопоиск</div>
              <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">
                  <Link to='/'>Главная</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to='/movies'>Фильмы</Link>
                </Menu.Item>
              </Menu>
            </Content>
          </Header>
          <Content style={{ padding: '0 50px', maxWidth: '1280px', margin: '0 auto' }}>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/movies' component={Movies} exact />
              <Route path='/movies/:number' component={Movie} />
            </Switch>
          </Content>
          <Footer></Footer>
        </Layout>
      </BrowserRouter>
    );
  }

}
