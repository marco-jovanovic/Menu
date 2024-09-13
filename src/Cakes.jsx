import React from 'react';
import SingleCake from './SingleCake';

function Cakes({ data }) {
  return (
    <div className="grid-container">
      {data.map((item) => {
        const { id, title, category, price, img, desc } = item;

        return (
          <SingleCake
            key={id}
            id={id}
            title={title}
            category={category}
            price={price}
            img={img}
            desc={desc}
          />
        );
      })}
    </div>
  );
}

export default Cakes;
