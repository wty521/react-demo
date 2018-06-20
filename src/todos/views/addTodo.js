import React, { Component } from "react";
import { Input, Button, Row, Col } from 'antd'
import todoContext from '../../context'

class AddTodo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: ''
        }
        this.inputRef = null;
    }

    addTodo = () => {
        
    }
    changeInputValue = (e) => {
        let inputValue = e.target.value.trim()
        this.setState({
            value: inputValue
        })
    }
    render() {
        return (<div style={{marginTop: "30px"}}>
        <Row type="flex">
            <Col offset={1} span={6}>
                <Input placeholder="Enter something" 
                ref={input => this.inputRef = input}
                onChange={this.changeInputValue}
                ></Input>
            </Col>
            <Col span={1}>
                <todoContext.Consumer>
                {context => 
                    <Button type="primary" onClick={()=> context.onChange(this.state.value)}>ADD</Button>
                }
                </todoContext.Consumer>
            </Col>
        </Row>
            
        </div>)
    }
}

export default AddTodo;