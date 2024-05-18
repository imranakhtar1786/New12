import React from 'react'

export default function Card(props) {

  return (
    <>
      <div className='card1'>
        <div className='img'><img src={props.item.urlToImage ? props.item.urlToImage : "/images/No-Image-Placeholder.svg.png"} alt="iugfd" /></div>
        <h2 className='overflow-hidden '>{props.item.title && props.item.title.slice(0, 40)}...</h2>
        <hr />
        <p className='h-25 overflow-hidden '>{props.item.description}</p>
        <p style={{ fontWeight: "bold", fontSize: "10px", textAlign: "center" }}>{props.item.source.name} | {props.item.publishedAt.slice(0, 10)}</p>
        <a href={props.item.url} rel="noreferrer" target='_blank' >Read More</a>
      </div>
    </>
  )
}
