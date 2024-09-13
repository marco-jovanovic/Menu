import React from 'react';

function SingleCake({ id, title, category, price, img, desc }) {
  return (
    <div>
      <img src={img} alt={title} className="responsive-img" />
      <div className="flex-item">
        <h4>{title}</h4>
        <p className="flex-price">{price}</p>
      </div>

      <p>{desc}</p>
    </div>
  );
}

export default SingleCake;
