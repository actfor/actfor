import React, { Component } from 'react';

// carousel
import ImageGallery from 'react-image-gallery';

// images
import * as img1 from './images/1.png';
import * as img2 from './images/2.png';
import * as img3 from './images/3.png';
import * as img4 from './images/4.png';
import * as img5 from './images/5.png';
import * as img6 from './images/6.png';
import * as img7 from './images/7.png';
import * as img8 from './images/8.png';
import * as img9 from './images/9.png';

class HomeSlideshow extends Component {
  render() {
    const style = { height: '40%', width: '40%' }
    const images = [
      {
        original: img1,
        thumbnail: img1,
      },
      {
        original: img2,
        thumbnail: img2,
      },
      {
        original: img3,
        thumbnail: img3,
      },
      {
        original: img4,
        thumbnail: img4,
      },
      {
        original: img5,
        thumbnail: img5,
      },
      {
        original: img6,
        thumbnail: img6,
      },
      {
        original: img7,
        thumbnail: img7,
      },
      {
        original: img8,
        thumbnail: img8,
      },
      {
        original: img9,
        thumbnail: img9,
      },
    ]
    return (
      <ImageGallery
        autoPlay
        showThumbnails={false}
        items={images}
        style={{
          width: '50%',
          height: '50%',
        }}
      />
    );
  }
}

export default HomeSlideshow;