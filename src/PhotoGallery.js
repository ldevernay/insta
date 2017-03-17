import React, { Component } from 'react';
import Photo from './Photo';

var shortid = require('shortid');

class PhotoGallery extends Component {
  render() {
    var filter = this.props.filterText;
    var photos = this.props.photos.map(function(photo) {
      if (photo.caption.indexOf(filter) === -1){
        return "";
      } else {
        return <Photo key={shortid.generate()} src={photo.url} caption={photo.caption} />
    }
    });

    return (
      <div className='photo-gallery'>
        {photos}
      </div>
    );
  }

}

export default PhotoGallery;
