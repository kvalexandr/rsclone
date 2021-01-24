import React, { Component } from 'react';
import { Form, Select, Button, Row, Col } from 'antd';

export default class Filters extends Component {

  render() {

    const { Option } = Select;
    const { filters, onChangeFilters, page, onChangePage } = this.props;

    return (
      <Form layout="vertical">
        <Row gutter="16">
          <Col>
            <Form.Item label="Сортировать по:">
              <Select
                style={{ width: '300px' }}
                labelInValue
                defaultValue={{ value: filters.sort_by }}
                onChange={(e) => onChangeFilters(e.value, 'sort_by')}
              >
                <Option value="popularity.desc">Популярные по убыванию</Option>
                <Option value="popularity.asc">Популярные по возрастанию</Option>
                <Option value="vote_average.desc">Рейтинг по убыванию</Option>
                <Option value="vote_average.asc">Рейтинг по возрастанию</Option>
              </Select>
            </Form.Item>
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
