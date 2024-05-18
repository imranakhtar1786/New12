import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  let [num, setnum] = useState(0);
  let [name, setname] = useState("none")
  let [nav, setnav] = useState("navbar")
  let [link, setlink] = useState("link")
  let [a, seta] = useState(0)
  let [sea, setsea] = useState("");

  function Stage() {
    if (num === 0) {
      setname("block");
      setnav("navbar navbar1");
      setlink("link link1");
      setnum(1)
    }
    else {
      setname("none");
      setnav("navbar");
      setlink("link");
      setnum(0)
    }
  }
  let change_lang = (e) => {
    if (a === 0) {
      props.l(e.target.value);
      seta(1)
    }
    else {
      props.l("hi");
      seta(0)
    }
  }
  let sub = (e) => {
    e.preventDefault();
    props.ser(sea)
  }
  let change = (e) => {
    setsea(e.target.value)

  }
  let blnak = (e) => {
    setsea("")
    props.ser("")
  }

  return (
    <>
      <div className={nav}>
        <div className='logo'>News12 </div>
        <div className={link}>
          <Link onClick={blnak} to="/">Home</Link>
          <Link onClick={blnak} to="/politics">Politics</Link>
          <Link onClick={blnak} to="/crime">Crime</Link>
          <Link onClick={blnak} to="/education">Education</Link>
          <Link onClick={blnak} to="/science">Science</Link>
          <Link onClick={blnak} to="/technology">Technology</Link>
          <Link onClick={blnak} to="/sports" className='dip' style={{ display: `${name}` }}>Sports</Link>
          <Link onClick={blnak} to="/cricket" className='dip' style={{ display: `${name}` }}>Cricket</Link>
          <Link onClick={blnak} to="/covid-19" className='dip' style={{ display: `${name}` }}>COVID-19</Link>
          <Link onClick={blnak} to="/jokes" className='dip' style={{ display: `${name}` }}>Jokes</Link>
          <Link onClick={blnak} to="/entertainment" className='dip' style={{ display: `${name}` }}>Entertainmen</Link>
          <div className='dropdown'>
            Others &#x25Bc;
            <div className='dropdown-element'><Link onClick={blnak} to="/sports">Sports</Link></div>
            <div className='dropdown-element'><Link onClick={blnak} to="/cricket">Cricket</Link></div>
            <div className='dropdown-element'><Link onClick={blnak} to="/covid-19">COVID-19</Link></div>
            <div className='dropdown-element'><Link onClick={blnak} to="/jokes">Jokes</Link></div>
            <div className='dropdown-element'><Link onClick={blnak} to="/entertainment">Entertainment</Link></div>
          </div>
          <div className='check'>
            <label className='text-white'> English</label>
            <input type="checkbox" id="language" name="language" value="en" onClick={change_lang} />
          </div>
          <div className='search'>
            <form onSubmit={sub}>
              <input type="text" name='search' placeholder='Search...' onChange={change} value={sea} />
              <button type='submit'>Search</button>
            </form>
          </div>
        </div>
        <div className='logo2' onClick={Stage}>&#9776;</div>
      </div>
    </>
  )
}
