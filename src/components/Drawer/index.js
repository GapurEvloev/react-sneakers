import './Drawer.sass';

function Drawer () {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
                <h2 className="drawer__header">
                  <span>Корзина</span>
                  <img
                    // onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="./images/btn-remove.svg"
                    alt="Remove"
                  />
                </h2>

                <div className="cart-items"> 
                  <div className="cart-item">
                    <div
                      // style={{ backgroundImage: `url(${obj.imageUrl})` }}
                      className="cart-item__img">
                          <img width={70} height={70} src="./images/sneakers/1.jpg" alt="" />
                      </div>

                    <div className="cart-item__descr">
                      <p>
                          {/* {obj.title} */}
                          Мужские Кроссовки Nike Air Max 270
                      </p>
                      <b>
                          {/* {obj.price} руб. */}
                          12 999 руб.
                      </b>
                    </div>
                    <img
                      // onClick={() => onRemove(obj.id)}
                      className="removeBtn"
                      src="./images/btn-remove.svg"
                      alt="Remove"
                    />
                  </div>
                  <div className="cart-item">
                    <div
                      // style={{ backgroundImage: `url(${obj.imageUrl})` }}
                      className="cart-item__img">
                          <img width={70} height={70} src="./images/sneakers/1.jpg" alt="" />
                      </div>

                    <div className="cart-item__descr">
                      <p>
                          {/* {obj.title} */}
                          Мужские Кроссовки Nike Air Max 270
                      </p>
                      <b>
                          {/* {obj.price} руб. */}
                          12 999 руб.
                      </b>
                    </div>
                    <img
                      // onClick={() => onRemove(obj.id)}
                      className="removeBtn"
                      src="./images/btn-remove.svg"
                      alt="Remove"
                    />
                  </div>
                </div>

                <div className="cartTotalBlock">
                  <ul className="cart-sum">
                    <li className="cart-sum__item">
                      <span className="cart-sum__item-title">Итого</span>
                      <div className="cart-sum__item-dash"></div>
                      <b className="cart-sum__item-num">21 498 руб.</b>
                    </li>
                    <li className="cart-sum__item">
                      <span className="cart-sum__item-title">Налог 5%</span>
                      <div className="cart-sum__item-dash"></div>
                      <b className="cart-sum__item-num">1074 руб.</b>
                    </li>
                  </ul>
                  <button className="btn btn-green cart-btn">Оформить заказ
                    <img className="btn__arrow btn-green__arrow cart-btn__arrow" src="./images/arrow.svg" alt="Arrow" />
                  </button>
                </div>
                
            </div>
        </div>
    )
}

export default Drawer;