import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function App() {
  
  let [lang,setlang]=useState("hi");
  let [search,setsearch]=useState("");
  
  let change_lane = (a)=>{
    lang=setlang(a)
  }
  let search_para=(data)=>{
    setsearch(data)
  }
  
    return (
      <>
      <BrowserRouter>
      <Navbar  l={change_lane} ser={search_para}/>
      <Routes>
        <Route path='/' element={<Home serach={search} lang={lang} q="all"/>}/>
        <Route path='/politics' element={<Home serach={search} lang={lang} q="politics"/>}/>
        <Route path='/crime' element={<Home serach={search} lang={lang} q="crime"/>}/>
        <Route path='/education' element={<Home serach={search} lang={lang} q="education"/>}/>
        <Route path='/science' element={<Home serach={search} lang={lang} q="science"/>}/>
        <Route path='/technology' element={<Home serach={search} lang={lang} q="Technology"/>}/>
        <Route path='/sports' element={<Home serach={search} lang={lang} q="Sports"/>}/>
        <Route path='/cricket' element={<Home serach={search} lang={lang} q="cricket"/>}/>
        <Route path='/covid-19' element={<Home serach={search} lang={lang} q="covid-19"/>}/>
        <Route path='/jokes' element={<Home serach={search} lang={lang} q="joke"/>}/>
        <Route path='/entertainment' element={<Home serach={search} lang={lang} q="entertainment"/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
    )
}
