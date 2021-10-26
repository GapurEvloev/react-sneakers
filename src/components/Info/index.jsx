import React from 'react';
import AppContext from '../../context'

export const Info = ({ title, image, description, styles }) => {
    const {setCartOpened} = React.useContext(AppContext)
    return (
        <div className={`${styles.cartEmpty} d-flex align-center justify-center flex-column flex`}>
            <img 
                className="mb-20" 
                width="120px" 
                src={image}
                alt="Empty" 
            />
            <h2>
                {title}
            </h2>
            <p className="opacity-6">
                {description}
                {/* Добавьте товар */}
            </p>
            <button 
                onClick={() => setCartOpened(false)} 
                className={`btn ${styles['btn-green']} ${styles['cart-btn']}`}
            >
                <img src="./images/arrow.svg" alt="Arrow" />
                Вернуться назад
            </button>
        </div>
    )
}

export default Info;