import React, { Component } from 'react';
import Category from '../containers/category';
import Questions from '../containers/questions';
import Header from './header'
 
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Category />
        <Questions id="" />
      </div>
    );
  }
}
