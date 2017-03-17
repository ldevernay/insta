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

  class FilterablePhotoGallery extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: ''
      };

      this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    }

    handleFilterTextInput(filterText) {
      this.setState({
        filterText: filterText
      });
    }

    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}
          />
        <PhotoGallery
            photos={data}
            filterText={this.state.filterText}
          />
        </div>
      );
    }
  }

export default FilterablePhotoGallery;
