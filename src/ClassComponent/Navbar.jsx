import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      num: 0,
      name: "none",
      nav: "navbar",
      link: "link",
      a: 0,
      sea:"",
    }
  }
  Stage() {
    if (this.state.num === 0){
      this.setState({ name: "block" })
      this.setState({ nav: "navbar navbar1" })
      this.setState({ link: "link link1" })
      this.setState({ num: 1 })
    }
    else {
      this.setState({ name: "none" })
      this.setState({ nav: "navbar" })
      this.setState({ link: "link" })
      this.setState({ num: 0 })
    }
  }
  change_lang = (e) => {
    if (this.state.a === 0) {
      this.props.l(e.target.value);
      this.setState({ a: 1 })
    }
    else {
      this.props.l("hi");
      this.setState({ a: 0 })
    }
  }
  sub=(e)=>{
    e.preventDefault();
    this.props.ser(this.state.sea)
  }
  change=(e)=>{
    this.setState({sea:e.target.value})
    
  }
  blnak=(e)=>{
    this.setState({sea:""})
    this.props.ser("")
  }
  render() {
    return (
      <>
        <div className={this.state.nav}>
          <div className='logo'>NewsApp </div>
          <div className={this.state.link}>
            <Link onClick={this.blnak} to="/">Home</Link>
            <Link onClick={this.blnak} to="/politics">Politics</Link>
            <Link onClick={this.blnak} to="/crime">Crime</Link>
            <Link onClick={this.blnak} to="/education">Education</Link>
            <Link onClick={this.blnak} to="/science">Science</Link>
            <Link onClick={this.blnak} to="/technology">Technology</Link>
            <Link onClick={this.blnak} to="/sports" className='dip' style={{ display: `${this.state.name}` }}>Sports</Link>
            <Link onClick={this.blnak} to="/cricket" className='dip' style={{ display: `${this.state.name}` }}>Cricket</Link>
            <Link onClick={this.blnak} to="/covid-19" className='dip' style={{ display: `${this.state.name}` }}>COVID-19</Link>
            <Link onClick={this.blnak} to="/jokes" className='dip' style={{ display: `${this.state.name}` }}>Jokes</Link>
            <Link onClick={this.blnak} to="/entertainment" className='dip' style={{ display: `${this.state.name}` }}>Entertainmen</Link>
            <div className='dropdown'>
              Others &#x25Bc;
              <div className='dropdown-element'><Link onClick={this.blnak} to="/sports">Sports</Link></div>
              <div className='dropdown-element'><Link onClick={this.blnak} to="/cricket">Cricket</Link></div>
              <div className='dropdown-element'><Link onClick={this.blnak} to="/covid-19">COVID-19</Link></div>
              <div className='dropdown-element'><Link onClick={this.blnak} to="/jokes">Jokes</Link></div>
              <div className='dropdown-element'><Link onClick={this.blnak} to="/entertainment">Entertainment</Link></div>
            </div>
            <div className='check'>
              <label className='text-white'> English</label>
              <input type="checkbox" id="language" name="language" value="en" onClick={this.change_lang} />
            </div>
            <div className='search'>
              <form onSubmit={this.sub}>
                <input type="text" name='search' placeholder='Search...' onChange={this.change} value={this.state.sea}/>
                <button type='submit'>Search</button>
              </form>
            </div>
          </div>
          <div className='logo2' onClick={() => this.Stage()}>&#9776;</div>
        </div>
      </>
    )
  }
}
