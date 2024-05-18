import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      lang:"hi",
      search:"",
    }
  }
  change_lane = (a)=>{
    this.setState({lang:a});
  }
  search_para=(data)=>{
    this.setState({search:data})
  }
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar sear={this.searching1} l={this.change_lane} ser={this.search_para}/>
      <Routes>
        <Route path='/' element={<Home serach={this.state.search} lang={this.state.lang} q="all"/>}/>
        <Route path='/politics' element={<Home serach={this.state.search} lang={this.state.lang} q="politics"/>}/>
        <Route path='/crime' element={<Home serach={this.state.search} lang={this.state.lang} q="crime"/>}/>
        <Route path='/education' element={<Home serach={this.state.search} lang={this.state.lang} q="education"/>}/>
        <Route path='/science' element={<Home serach={this.state.search} lang={this.state.lang} q="science"/>}/>
        <Route path='/technology' element={<Home serach={this.state.search} lang={this.state.lang} q="Technology"/>}/>
        <Route path='/sports' element={<Home serach={this.state.search} lang={this.state.lang} q="Sports"/>}/>
        <Route path='/cricket' element={<Home serach={this.state.search} lang={this.state.lang} q="cricket"/>}/>
        <Route path='/covid-19' element={<Home serach={this.state.search} lang={this.state.lang} q="covid-19"/>}/>
        <Route path='/jokes' element={<Home serach={this.state.search} lang={this.state.lang} q="joke"/>}/>
        <Route path='/entertainment' element={<Home serach={this.state.search} lang={this.state.lang} q="entertainment"/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
    )
  }
}
