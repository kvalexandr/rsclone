import React, { PureComponent } from 'react';
import { Form, Select } from 'antd';

export default class SortBy extends PureComponent {

  static defaultProps = {
    options: [
      {
        label: 'Популярные по убыванию',
        value: 'popularity.desc'
      },
      {
        label: 'Популярные по возрастанию',
        value: 'popularity.asc'
      },
      {
        label: 'Рейтинг по убыванию',
        value: 'vote_average.desc'
      },
      {
        label: 'Рейтинг по возрастанию',
        value: 'vote_average.asc'
      },
    ]
  };

  render() {

    const { Option } = Select;
    const { sort_by, onChangeFilters, options } = this.props;

    return (
      <Form.Item label="Сортировать по:">
        <Select
          style={{ width: '300px' }}
          labelInValue
          defaultValue={{ value: sort_by }}
          onChange={onChangeFilters}
        >
          {options.map((option, idx) => (
            <Option key={idx} value={option.value}>{option.label}</Option>
          ))}
        </Select>
      </Form.Item>
    );
  }
}
