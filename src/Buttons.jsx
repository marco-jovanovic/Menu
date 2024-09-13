import React, { useState } from 'react';
import Button from './Button';

function Buttons({ data, setData, meni }) {
  let tempItems;

  tempItems = data.map((item) => item.category);

  tempItems = new Set(['all', ...tempItems]);

  let buttonCategory = Array.from(tempItems);

  let filteredItems = [];
  const handleValue = (e) => {
    data.find((item) => {
      if (e.target.value === item.category) {
        filteredItems.push(item);
        setData(filteredItems);
      }
    });

    if (e.target.value === 'all') {
      setData(meni);
    }
  };

  {
    return buttonCategory.map((item, index) => {
      return (
        <Button
          key={index}
          item={item}
          data={data}
          setData={setData}
          handleValue={handleValue}
        />
      );
    });
  }
}
export default Buttons;
