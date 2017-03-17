import React, { Component } from 'react';


class Photo extends Component {
constructor() {
  super();
  this.state = {
    liked: false
  };

  this.handleLikeInput = this.handleLikeInput.bind(this);
  }

  handleLikeInput() {
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    var buttonClass = this.state.liked ? 'active' : '';

    return (
      <div className='photo'>
      <img src={this.props.src} alt={this.props.caption} />

      <div className='bar'>
      <button onClick={this.handleLikeInput} className={buttonClass}>
      ♥
      </button>
      <span>{this.props.caption}</span>
      </div>
      </div>
    )
  }
}

export default Photo;
