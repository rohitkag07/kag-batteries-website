import React from 'react';

const ProductBrochures = () => {
  return (
    <section className="product-brochures">
      <h2>Product Brochures</h2>
      <p>Download our product brochures to learn more about our offerings.</p>
      <ul>
        <li><a href="/pdfs/heavy-duty-brochure.pdf" target="_blank">Heavy Duty Brochure</a></li>
        <li><a href="/pdfs/light-duty-brochure.pdf" target="_blank">Light Duty Brochure</a></li>
      </ul>
    </section>
  );
};

export default ProductBrochures;