import React, { Component } from 'react';
import { App } from './styles.js'
import Sidebar from '../../components/Sidebar'
import Content from '../../components/Content'

export default class Dashboard extends Component {
  render() {
    return (
      <App>
        <Sidebar></Sidebar>
        <Content>teste</Content>
      </App>
    )
  }
}
