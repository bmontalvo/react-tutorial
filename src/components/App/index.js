// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Remarkable from 'remarkable';

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
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

export class CommentList extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    return (
      <div className={classnames('CommentList', this.props.className)} style={this.props.style}>
        <Comment author="Mike Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
}

export class CommentForm extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    return (
      <div className={classnames('CommentForm', this.props.className)} style={this.props.style}>
        Hello, world! I am a CommentForm.
      </div>
    );
  }
}

export class Comment extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }

  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
    var md = new Remarkable();
    return (
      <div className={classnames('Comment', this.props.className)} style={this.props.style}>
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}
