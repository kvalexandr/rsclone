import React, { PureComponent } from 'react';
import { Form, Select } from 'antd';

export default class Year extends PureComponent {

  render() {

    const { Option } = Select;
    const { year, onChangeFilters } = this.props;
    const years = [];

    for (let y = 2021; y > 1952; y -= 1) {
      years.push(y);
    }

    return (
      <Form.Item label="Год выпуска:">
        <Select
          style={{ width: '100px' }}
          labelInValue
          defaultValue={{ value: year }}
          onChange={onChangeFilters}
        >
          {years.map((year, idx) => (
            <Option key={idx} value={year}>{year}</Option>
          ))}
        </Select>
      </Form.Item>
    );
  }
}
