import React, { Component } from 'react';
import './App.css';
import PhotoGallery from './PhotoGallery';

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

class App extends Component {
  render() {
    return (
    <PhotoGallery photos={data} />
    );
  }
}

export default App;
