import React, { useState } from 'react';
import ContentLoader from "react-content-loader";

import AppContext from '../../context'

import styles from './Card.module.sass';

function Card({ 
    id,
    title,
    imageUrl,
    price,
    onFavorite,
    onClickAdd,
    favorited = false,
    loading = false,
 }) {
    const {isItemAdded} = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorited);

    // Инвертирование состояния при клике на кнопку "добавить в корзину"
    const onClickPlus = () => {
        onClickAdd({id, title, imageUrl, price});
    }
    
    const onClickFavorite = () => {
        onFavorite({id, title, imageUrl, price});
        setIsFavorite(!isFavorite)
    }

    // React.useEffect(() => {
    //     // console.log("gtht")
    // }, [isAdded])

    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader 
                    speed={1}
                    width={150}
                    height={246}
                    viewBox="0 0 150 246"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    // {...props}
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="135" /> 
                    <rect x="0" y="145" rx="5" ry="5" width="150" height="15" /> 
                    <rect x="0" y="165" rx="5" ry="5" width="100" height="15" /> 
                    <rect x="0" y="200" rx="5" ry="5" width="80" height="32" /> 
                    <rect x="118" y="200" rx="10" ry="10" width="32" height="32" />
                </ContentLoader> : <>
                    <div className={styles.card__favorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? "./images/liked.svg" : "./images/unliked.svg"} alt="Unliked" />
                    </div>
                    <img width="100%" height="135" src={imageUrl} alt="good" className={styles.card__img} />
                    <h3 className={styles.card__title}>
                        {title}
                    </h3>
                    <div className={styles.card__footer}>
                        <div className={styles.card__price}>
                            <span className={styles['card__price-title']}>Цена</span>
                            <b className={styles['card__price-num']}>{price} руб.</b>
                        </div>
                        <button className={styles.card__add+" button"} onClick={onClickPlus}>
                            <img className={styles["card__add-icon"]} width="32" height="32" src={isItemAdded(id) ? "./images/btn-checked.svg" : "./images/btn-plus.svg"} alt="add" />
                        </button>
                    </div>
                </>
            }
            
        </div>
    )
}

export default Card;