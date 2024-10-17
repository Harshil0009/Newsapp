import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
 
export default class App extends Component {
  pages = 15;
  con = 'us';
  render() {
    return (
    <BrowserRouter>
      <div>
        <Navbar />    
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={this.pages} country={this.con} category="general"/>} />
          <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={this.pages} country={this.con} category="entertainment"/>} />
          <Route exact path="/Sports" element={<News key="sports" pageSize={this.pages} country={this.con} category="sports"/>} />
          <Route exact path="/Business" element={<News key="business" pageSize={this.pages} country={this.con} category="business"/>} />
          <Route exact path="/Technology" element={<News key="technology" pageSize={this.pages} country={this.con} category="technology"/>} />
          <Route exact path="/Politics" element={<News key="politics" pageSize={this.pages} country={this.con} category="politics"/>} />
          <Route exact path="/Search" element={<News key="search" pageSize={this.pages} country={this.con} category="search"/>} />
        </Routes>
      </div>
    </BrowserRouter>
    )
  }
} 