import React from 'react';
import Header from "./components/Header";
import DataArea from './components/DataArea';
import Wrapper from "./components/Wrapper";
import "./App.css";
import Center from "./components/Center";



function App() {
  return (
    <div className= "App">
      <Wrapper>
        <Header />
        <Center />
        <DataArea />
      </Wrapper>
    </div>
  )
}
        

export default App;
