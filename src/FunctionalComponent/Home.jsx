import React, { useState,useEffect } from 'react'
import Card from './Card'
import InfiniteScroll from 'react-infinite-scroll-component'
export default function Home(props) {

  let [totalresults, settotalresults] = useState(0)
  let [articles, setarticles] = useState([])
  let [page, setpage] = useState(1)
  async function getapi() {
    setpage(2)
    var response
    if (props.serach === "") {
      try {
        response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&pageSize=12&page=${page}&from=2024-04-20&sortBy=publishedAt&language=${props.lang}&apiKey=172fcaf2c51645a69a8330072a1695a6`)
        response = await response.json();
        settotalresults(response.totalResults)
        setarticles(response.articles.filter((x) => x.title !== "[Removed]"))
      }
      catch {
        alert("Poor Internet Connection")
      }
    }
    else {
      try {
        response = await fetch(`https://newsapi.org/v2/everything?q=${props.serach}&pageSize=12&page=${page}&from=2024-04-20&sortBy=publishedAt&language=${props.lang}&apiKey=172fcaf2c51645a69a8330072a1695a6`)
        response = await response.json();
        settotalresults(response.totalResults)
        setarticles(response.articles.filter((x) => x.title !== "[Removed]"))
      }
      catch {
        alert("Poor Internet Connection")
      }
    }
  }
  let fatchmore = async () => {
    setpage(page + 1)
    if (props.serach === "") {
      try {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&pageSize=12&page=${page}&from=2024-04-20&sortBy=publishedAt&language=${props.lang}&apiKey=172fcaf2c51645a69a8330072a1695a6`)
        response = await response.json();
        setarticles(articles.concat(response.articles.filter((x) => x.title !== "[Removed]")))
      }
      catch {

      }
    } else {
      try {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${props.serach}&pageSize=12&page=${page}&from=2024-04-20&sortBy=publishedAt&language=${props.lang}&apiKey=172fcaf2c51645a69a8330072a1695a6`)
        response = await response.json();
        setarticles(articles.concat(response.articles.filter((x) => x.title !== "[Removed]")))
      }
      catch {

      }
    }
  }
  useEffect(()=>{
    getapi();
    
  },[props])

  return (
    <>
      <InfiniteScroll
        dataLength={articles.length}
        next={fatchmore}
        hasMore={articles.length < totalresults}
        loader={<h4>Loading...</h4>}>
        <div className="card2">
          {articles.map(
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
