import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <>
          <div className='card1'>
            <div className='img'><img src={this.props.item.urlToImage?this.props.item.urlToImage:"/images/No-Image-Placeholder.svg.png"} alt="iugfd" /></div>
            <h2 className='overflow-hidden '>{this.props.item.title && this.props.item.title.slice(0, 40)}...</h2>
            <hr/>
            <p className='h-25 overflow-hidden '>{this.props.item.description}</p>
            <p style={{ fontWeight: "bold", fontSize: "10px", textAlign: "center" }}>{this.props.item.source.name} | {this.props.item.publishedAt.slice(0, 10)}</p>
            <a href={this.props.item.url}  rel="noreferrer" target='_blank' >Read More</a>
          </div>
      </>
    )
  }
}
