import React from 'react';
import Photos from 'react-photo-gallery';

import Category from './categories/Category';

import './Gallery.css';

const arr = [
  {
    src: '/img/1.jpg',
    width: 800,
    height: 400,
  },
  {
    src: '/img/2.jpg',
    width: 600,
    height: 400,
  },
  {
    src: '/img/3.jpg',
    width: 800,
    height: 400,
  },
  {
    src: '/img/4.png',
    width: 800,
    height: 400,
  },
  {
    src: '/img/5.jpg',
    width: 800,
    height: 400,
  },
];

const categories = [
  { 
    id: 1,
    title: 'Свадьбы',
    pic: '/img/5.jpg',
    active: false,
  },
  {
    id: 2,
    title: 'Корпоративы',
    pic: '/img/3.jpg',
    active: true,
  },
  {
    id: 3,
    title: 'Сессии',
    pic: '/img/1.jpg',
    active: false,
  },
];

const Gallery = () => (
  <div className="gallery-block">
    <div className="gallery-category">
      {
        categories.map(cat => (
          <Category
            key={cat.id}
            title={cat.title} 
            pic={cat.pic} 
            active={cat.active}
          />
        ))
      }
    </div>
    <div className="gallery-photos">
      <Photos photos={arr} />
    </div>
  </div>
);

export default Gallery;