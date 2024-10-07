import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';
import Search from './components/Search';

function App() {

  const [valToSearch, setValToSearch] = useState('');

  return (
    <div className="App">
      <h1>Product Search Page</h1>
      
      <Search
        setValToSearch={setValToSearch}
      />
      <Products
        valToSearch={valToSearch}
      />
    </div>
  );
}

export default App;
