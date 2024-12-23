import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/'+ this.props.item.img}onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>Цена:{this.props.item.price}$</b>
        <button  className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}> Корзина</button>

      </div>
    )
  }
}

export default Item
