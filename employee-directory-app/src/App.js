import React from 'react';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search";
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Search />
      </Wrapper>
    </div>
  );
}

export default App;
