import React from 'react';
import Header from "./components/Header";
import EmployeeContainer from './components/EmployeeContainer';
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import "./App.css";



function App() {
  return (
    <div className= "App">
      <Wrapper>
        <Header />
        <Search />
        <EmployeeContainer />
      </Wrapper>
    </div>
  )
}

export default App;
