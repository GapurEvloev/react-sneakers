import React, { useState } from 'react';
import styles from './Card.module.sass';


function Card({ onClickAdd, onClickFavourite, imageUrl, title, price }) {
    // Объявление переменной состояния, которую мы назовём "isAdded"
    const [isAdded, setIsAdded] = useState(false);

    // Инвертирование состояния при клике на кнопку "добавить в корзину"
    const onClickPlus = () => {
        onClickAdd();
        setIsAdded(!isAdded);
    }

    React.useEffect(() => {
        // console.log("gtht")
    }, [isAdded])

    return (
        <div className={styles.card}>
            <div className={styles.card__favourite} onClick={onClickFavourite}>
                <img src="./images/unliked.svg" alt="Unliked" />
            </div>
            <img width="133" height="112" src={imageUrl} alt="" className={styles.card__img} />
            <h3 className={styles.card__title}>
                {title}
            </h3>
            <div className={styles.card__footer}>
                <div className={styles.card__price}>
                    <span className={styles['card__price-title']}>Цена</span>
                    <b className={styles['card__price-num']}>{price} руб.</b>
                </div>
                <button className={styles.card__add+" button"} onClick={onClickPlus}>
                    {/* <svg className={styles["card__add-icon"]} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2"/>
                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3"/>
                    </svg> */}
                    <img className={styles["card__add-icon"]} width="32" height="32" src={isAdded ? "./images/btn-checked.svg" : "./images/btn-plus.svg"} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Card;