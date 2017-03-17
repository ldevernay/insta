import React from 'react';
import Photo from './Photo';

var shortid = require('shortid');

var PhotoGallery = React.createClass({

  render: function() {

    var photos = this.props.photos.map(function(photo) {
      return <Photo key={shortid.generate()} src={photo.url} caption={photo.caption} />
    });

    return (
      <div className='photo-gallery'>
        {photos}
      </div>
    );
  }

});

export default PhotoGallery;
