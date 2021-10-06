import './Drawer.sass';

function Drawer () {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина</h2>

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
        </div>
    )
}

export default Drawer;