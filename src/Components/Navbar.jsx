import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import "./Navbar.module.css"; // Исправлено: правильное имя файла
import { PiShoppingCart } from "react-icons/pi";
import Order from './peges/Order';
import OrderForm from './peges/OrderForm';


const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.prace))
  return (
    <div>
      {/* <div className="line"></div> */}
      <h1 className='vas'>Ваш заказ</h1>
      <div className="line1"></div>

      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>
        Сумма: {new Intl.NumberFormat().format(summa)}$
      </p>
      <OrderForm/>
    </div>
  );
}
const showNothing = () => {
  return (
    <div className='emty'>
      <h2>Товаром нету</h2>
    </div>
  );
}

export default function Navbar(props) {
    let [cartOpen, setCertOpen] = useState(false)

  return (
    <header>
      <div className='qwe'>
    <nav>
      
        <Link to="/" className='logo'>
Sugar</Link>
        <ul className='nav'>
          <li >              
              <PiShoppingCart onClick={() => setCertOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
          </li>
            <li>
                <NavLink to="/about">О нас</NavLink>
            </li>
            <li>
                <NavLink to="/">Католог</NavLink>
            </li>
            <li>
                <NavLink to="/contsct">Контакты</NavLink>  

            </li>
        </ul>
    </nav>


{cartOpen && (
  <div className='shop-cart'>
    {props.orders.length > 0 ? showOrders(props) : showNothing()} {}
  </div>
)}

</div>
<div className='presentesion'>

</div>
</header>
)
}

