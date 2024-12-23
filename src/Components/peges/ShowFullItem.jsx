import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div className='qwe'>
          
        <img src={'./img/'+ this.props.item.img}onClick={() => this.props.onShowItem(this.props.item)}/>
         </div>  
          <div className='ewq'>
          <h2 className='textlr'>{this.props.item.title}</h2>
          <p className='textlr2'>{this.props.item.desc}</p>
          <h2>Состав</h2>
          <p className='cvb'>{this.props.item.opis}</p>
          <h2>Условия хранения</h2>
          <p className='cvb'>{this.props.item.opic}</p>
          <b>Цена:{this.props.item.price}$</b>
          
          <button  className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}> Добавить в карзину</button>
          </div>
     
         
        
      </div>
    )
  }
}

export default ShowFullItem
