import React, { Component } from 'react';
//图片的引入
import logo from './logo.svg';
import './App.css';
//三种创建对象方法之一，es6创建对象的方法，extends es6的继承；
class App extends Component {
	//渲染
  render() {
    return (
      <div className="App">
        <header className="App-header">
        	//引入图片的方法
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
