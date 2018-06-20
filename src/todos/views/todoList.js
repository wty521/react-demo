import React, { Component } from 'react';
import { List } from 'antd'
import todoContext from '../../context'

class TodoList extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: ["test1","test2"]
        }
    }

    render() {
        return (<div>
            <todoContext.Consumer>
                {context => 
                    <List
                    bordered
                    // dataSource={context.todoList}
                    // renderItem={item => (<List.Item>{item}</List.Item>)}
                    >
                    {context.todoList && context.todoList.map((v,i) => {
                        return (<List.Item key={`${v}+${i}`}>{v}</List.Item>)
                    })}
                    </List>
                }
            </todoContext.Consumer>
        </div>)
    }

}

export default TodoList;