import React from 'react';
import axios from 'axios';

import AppContext from '../../context'

import Info from '../Info';

import './Drawer.sass';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer ({ onClose, onRemove, items = []}) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [ isOrderComplete, setIsOrderComplete ] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://60d62397943aa60017768e77.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://60d62397943aa60017768e77.mockapi.io/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(');
    }
    setIsLoading(false);
  }

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="drawer__header">
          <span>Корзина</span>
          <img
            // onClick={() => onRemove(obj.id)}
            onClick={onClose}
            className="removeBtn"
            src="./images/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        {
          items.length > 0 ? <>
            <div className="cart-items">
              {
                items.map((obj) => (
                  <div key={obj.id} className="cart-item">
                    <div
                      // style={{ backgroundImage: `url(${obj.imageUrl})` }}
                      className="cart-item__img">
                        <img width={70} height={70} src={obj.imageUrl} alt="item" />
                      </div>

                    <div className="cart-item__descr">
                      <p>
                        {obj.title}
                      </p>
                      <b>
                        {obj.price} руб.
                      </b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
                      className="removeBtn"
                      src="./images/btn-remove.svg"
                      alt="Remove"
                    />
                  </div>
                ))
              }
            </div>
            <div className="cartTotalBlock">
              <ul className="cart-sum">
                <li className="cart-sum__item">
                  <span className="cart-sum__item-title">Итого</span>
                  <div className="cart-sum__item-dash"></div>
                  <b className="cart-sum__item-num">21 498 руб.</b>
                  {/* <b className="cart-sum__item-num">{totalPrice} руб. </b> */}
                </li>
                <li className="cart-sum__item">
                  <span className="cart-sum__item-title">Налог 5%</span>
                  <div className="cart-sum__item-dash"></div>
                  <b className="cart-sum__item-num">1074 руб.</b>
                  {/* <b className="cart-sum__item-num">{(totalPrice / 100) * 5} руб. </b> */}
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="btn btn-green cart-btn">Оформить заказ
                <img className="btn__arrow btn-green__arrow cart-btn__arrow" src="./images/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </> : (
            <Info 
              title={ isOrderComplete ? "Заказ оформлен" : "Корзина пуста" } 
              description={ isOrderComplete ? `Ваш заказ #${orderId} будет передан курьеру` : "Добавьте товар" }  
              image={ isOrderComplete ? "./images/complete-order.jpg" : "./images/empty-cart.jpg" }   
            />
          )
        }
          
      </div>
    </div>
  )
}

export default Drawer;