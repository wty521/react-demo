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
    debugger
    this.setState = ({
      todoList
    })
  }
  render() {
    return (
      <todoContext.Provider
        value={{
          todoList: this.state.todoList,
          onChange: this.changeTodo
        }}
      >
        {this.props.children}
      </todoContext.Provider>
    )
  }
}
export default ContextProvider;