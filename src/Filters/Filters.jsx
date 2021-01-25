import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'antd';
import SortBy from './SortBy';

export default class Filters extends Component {

  render() {

    const { filters, onChangeFilters, page, onChangePage } = this.props;

    return (
      <Form layout="vertical">
        <Row gutter="16">
          <Col>
            <SortBy sort_by={filters.sort_by} onChangeFilters={(e) => onChangeFilters(e.value, 'sort_by')} />
          </Col>
          <Col>
            <Form.Item label=" ">
              <Button onClick={onChangePage.bind(null, page - 1)} disabled={page === 1}>Назад</Button>&nbsp;
              <Button onClick={onChangePage.bind(null, page + 1)}>Вперед</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}
