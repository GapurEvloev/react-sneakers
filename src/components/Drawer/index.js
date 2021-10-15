import './Drawer.sass';

function Drawer ({ onClose, onRemove, items = []}) {
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
                  </> : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img 
                      className="mb-20" 
                      width="120px" 
                      // src={image} 
                      src='./images/empty-cart.jpg' 
                      alt="Empty" 
                    />
                    <h2>
                      {/* {title} */}
                      Корзина пустая
                    </h2>
                    <p className="opacity-6">
                      {/* {description} */}
                      Добавьте товар
                    </p>
                    <button 
                      onClick={onClose} 
                      className="btn btn-green "
                    >
                      <img src="./images/arrow.svg" alt="Arrow" />
                      Вернуться назад
                    </button>
                  </div>
                }
                
            </div>
        </div>
    )
}

export default Drawer;