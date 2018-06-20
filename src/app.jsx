import React, { Fragment } from 'react'
import {view as Todos} from './todos';
import Filter from "./filter"
import ContextProvider from "./addContext"

export default class App extends React.Component {
  render () {
    return (<div className="todo-content">
      <ContextProvider>
        <Todos />
        <Filter />
      </ContextProvider>
    </div>)
  }
}