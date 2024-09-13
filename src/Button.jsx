import React from 'react';

function Button({ item, handleValue }) {
  return (
    <div>
      <button onClick={handleValue} value={item} className="btn">
        {item}
      </button>
    </div>
  );
}

export default Button;
