import React, {Component} from 'react';
import './App.css';
import PhotoGallery from './PhotoGallery';
import SearchBar from './SearchBar';

var data = [
  {
    url: 'http://lorempicsum.com/futurama/350/200/1',
    caption: 'Bender'
  },
  {
    url: 'http://lorempicsum.com/futurama/255/200/2',
    caption: 'Monkey'
  },
  {
    url: 'http://lorempicsum.com/futurama/627/300/4',
    caption: 'Benders'
  }
];

// class App extends Component {
//   render() {
//     return (
//     <PhotoGallery photos={data} />
//     );
//   }
  class FilterablePhotoGallery extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        likedOnly: false
      };

      this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
      this.handleLikedInput = this.handleLikedInput.bind(this);
    }

    handleFilterTextInput(filterText) {
      this.setState({
        filterText: filterText
      });
    }

    handleLikedInput(likedOnly) {
      this.setState({
        likedOnly: likedOnly
      })
    }

    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            likedOnly={this.state.likedOnly}
            onFilterTextInput={this.handleFilterTextInput}
            onLikedInput={this.handleLikedInput}
          />
        <PhotoGallery
            photos={data}
            filterText={this.state.filterText}
            likedOnly={this.state.likedOnly}
          />
        </div>
      );
    }
  }

export default FilterablePhotoGallery;
