import React, { Component } from 'react';
import { Button } from 'antd';
import "./index.less"


class Filter extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (<div>
      <Button className="ml-10">active</Button>
      <Button className="ml-10">done</Button>
      <Button className="ml-10">all</Button>
    </div>)
  }
}

export default Filter;