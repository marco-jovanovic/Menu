import React, { useState } from 'react';
import Title from './Title';
import Cakes from './Cakes';
import { menu } from '../data';
import Buttons from './Buttons';

function App() {
  const [data, setData] = useState(menu);
  const [meni, setMeni] = useState(menu);
  return (
    <div className="container">
      <Title title="Menu" />
      <div className="btn-container">
        <Buttons data={data} setData={setData} meni={meni} />
      </div>

      <Cakes data={data} />
    </div>
  );
}

export default App;
