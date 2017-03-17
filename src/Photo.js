import React from 'react';

var Photo = React.createClass({

  getInitialState: function() {
    return {
      liked: false
    };
  },
  toggleLiked: function() {
    this.setState({
      liked: !this.state.liked
    });
  },
  render: function() {
    var buttonClass = this.state.liked ? 'active' : '';

    return (

      <div className='photo'>
      <img src={this.props.src} alt={this.props.caption}/>

      <div className='bar'>
      <button onClick={this.toggleLiked} className={buttonClass}>
      ♥
      </button>
      <span>{this.props.caption}</span>
      </div>
      </div>
    )
  }
});

export default Photo;
