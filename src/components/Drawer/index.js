import React from 'react';
import axios from 'axios';

import Info from '../Info';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.sass';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer ({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
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
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className={styles.drawer__header}>
          <span>Корзина</span>
          <img
            // onClick={() => onRemove(obj.id)}
            onClick={onClose}
            className={styles.removeBtn}
            src="./images/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        {
          items.length > 0 ? <>
            <div className={styles['cart-items']}>
              {
                items.map((obj) => (
                  <div key={obj.id} className={styles['cart-item']}>
                    <div
                      // style={{ backgroundImage: `url(${obj.imageUrl})` }}
                      className={styles['cart-item__img']}>
                        <img width={70} height={70} src={obj.imageUrl} alt="item" />
                      </div>

                    <div className={styles['cart-item__descr']}>
                      <p>
                        {obj.title}
                      </p>
                      <b>
                        {obj.price} руб.
                      </b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
                      className={styles.removeBtn}
                      src="./images/btn-remove.svg"
                      alt="Remove"
                    />
                  </div>
                ))
              }
            </div>
            <div className={styles.cartTotalBlock}>
              <ul className={styles['cart-sum']}>
                <li className={styles['cart-sum__item']}>
                  <span className={styles['cart-sum__item-title']}>Итого</span>
                  <div className={styles['cart-sum__item-dash']}></div>
                  <b className={styles['cart-sum__item-num']}>{totalPrice} руб.</b>
                  {/* <b className="cart-sum__item-num">{totalPrice} руб. </b> */}
                </li>
                <li className={styles['cart-sum__item']}>
                  <span className={styles['cart-sum__item-title']}>Налог 5%</span>
                  <div className={styles['cart-sum__item-dash']}></div>
                  <b className={styles['cart-sum__item-num']}>{totalPrice * 0.05 } руб.</b>
                  {/* <b className="cart-sum__item-num">{(totalPrice / 100) * 5} руб. </b> */}
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className={`btn ${styles['btn-green']} ${styles['cart-btn']}`}>Оформить заказ
                <img className={`btn__arrow ${styles['btn-green__arrow']} ${styles['cart-btn__arrow']}`} src="./images/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </> : (
            <Info 
              title={ isOrderComplete ? "Заказ оформлен" : "Корзина пуста" } 
              description={ isOrderComplete ? `Ваш заказ #${orderId} будет передан курьеру` : "Добавьте товар" }  
              image={ isOrderComplete ? "./images/complete-order.jpg" : "./images/empty-cart.jpg" }   
              styles={styles}
            />
          )
        }
          
      </div>
    </div>
  )
}

export default Drawer;