import React, { Component } from 'react'
import Card from './Card'
import InfiniteScroll from 'react-infinite-scroll-component'
export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      totalresults: 0,
      articles: [],
      page: 1,
    }
  }
  async getapi() {
    this.setState({page:2})
    var response
    if (this.props.serach === "") {
      try {
        response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=12&page=${this.state.page}&from=2024-04-20&sortBy=publishedAt&language=${this.props.lang}&apiKey=172fcaf2c51645a69a8330072a1695a6`)
        response = await response.json();
        this.setState(
          {
            totalresults: response.totalResults,
            articles: response.articles.filter((x) => x.title !== "[Removed]")
          }
        )
      }
      catch {
        alert("Poor Internet Connection")
      }
    }
    else {
      try {
        response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.serach}&pageSize=12&page=${this.state.page}&from=2024-04-20&sortBy=publishedAt&language=${this.props.lang}&apiKey=172fcaf2c51645a69a8330072a1695a6`)
        response = await response.json();
        this.setState(
          {
            totalresults: response.totalResults,
            articles: response.articles.filter((x) => x.title !== "[Removed]")
          }
        )
      }
      catch {
        // console.log(response.status)
        alert("Poor Internet Connection")
      }
    }
  }
  fatchmore = async () => {
    this.setState({page:this.state.page+1})
    if(this.props.serach === ""){
      try {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=12&page=${this.state.page}&from=2024-04-20&sortBy=publishedAt&language=${this.props.lang}&apiKey=172fcaf2c51645a69a8330072a1695a6`)
        response = await response.json();
        this.setState(
          {
            articles: this.state.articles.concat(response.articles.filter((x) => x.title !== "[Removed]"))
          }
        )
      }
      catch {
      
      }
    }else{
      try {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.serach}&pageSize=12&page=${this.state.page}&from=2024-04-20&sortBy=publishedAt&language=${this.props.lang}&apiKey=172fcaf2c51645a69a8330072a1695a6`)
        response = await response.json();
        this.setState(
          {
            articles: this.state.articles.concat(response.articles.filter((x) => x.title !== "[Removed]"))
          }
        )
      }
      catch {
        
      }
    }
    
  }
  componentDidMount() {
    this.getapi();
  }
  componentDidUpdate(old) {
    if (this.props !== old) {
      this.getapi()
    }

  }
  render() {
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fatchmore}
          hasMore={this.state.articles.length < this.state.totalresults}
          loader={<h4>Loading...</h4>}>
          <div className="card2">
            {this.state.articles.map(
              (item, index) => {
                return <Card
                  key={index}
                  item={item}
                />
              }
            )}
          </div>
        </InfiniteScroll>
      </>
    )
  }
}
