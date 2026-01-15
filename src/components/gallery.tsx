import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <img src="/images/gallery1.jpg" alt="Gallery Image 1" />
        <img src="/images/gallery2.jpg" alt="Gallery Image 2" />
        <img src="/images/gallery3.jpg" alt="Gallery Image 3" />
      </div>
    </section>
  );
};

export default Gallery;