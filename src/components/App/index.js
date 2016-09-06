// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

class App extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    return (
      <div className={classnames('App', this.props.className)} style={this.props.style}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Tutorial</h2>
        </div>
        <CommentBox />
      </div>
    );
  }
}

export default App;

export class CommentBox extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    return (
      <div className={classnames('CommentBox', this.props.className)} style={this.props.style}>
        Hello, world! I am a CommentBox.
      </div>
    );
  }
}
