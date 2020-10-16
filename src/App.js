import React from 'react';
import Header from "./components/Header";
import DataArea from './components/DataArea';
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import "./App.css";



function App() {
  return (
    <div className= "App">
      <Wrapper>
        <Header />
        <DataArea />
      </Wrapper>
    </div>
  )
}
        

export default App;
