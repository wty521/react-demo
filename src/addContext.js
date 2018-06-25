import React, { Component, createContext } from 'react';

import todoContext from './context'

class ContextProvider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      todoList: ['text111','test']
    }
  }
  
  changeTodo = (todo) => {
    let { todoList } = this.state;
    todoList = [...todoList, todo]
    this.setState({
      todoList: todoList
    })
  }
  render() {
    let { todoList } = this.state;
    return (
      <todoContext.Provider
        value={{
          todoList: todoList,
          onChange: this.changeTodo
        }}
      >
        {this.props.children}
      </todoContext.Provider>
    )
  }
}
export default ContextProvider;