import Header from './components/Header'
import Card from './components/Card'
import Drawer from './components/Drawer';

// import cart from'./images/cart.svg'
// import favorites from'./images/favorites.svg'
// import user from'./images/user.svg'

function App() {
  return (
    <div className="wrapper clear">

      <Drawer/>

      <Header />

      <div className="content">
        
        <div className="content__header">
          <h1 className="main-title">Все кроссовки</h1>
          <div className="search-block">
            <img src="./images/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

          {/* <div className="card">
            <div className="card__favourite">
              <img src="./images/unliked.svg" alt="Unliked" />
            </div>
            <img width="133" height="112" src="./images/goods/good-1.jpg" alt="" className="card__img" />
            <h3 className="card__title">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h3>
            <div className="card__footer">
              <div className="card__price">
                <span className="card__price-title">Цена</span>
                <b className="card__price-num">12999 руб.</b>
              </div>
              <button className="card__add button">
                <svg className="card__add-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2"/>
                  <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="card">
            <img width="133" height="112" src="./images/goods/good-2.jpg" alt="" className="card__img" />
            <h3 className="card__title">
              Мужские Кроссовки Nike Air Max 270
            </h3>
            <div className="card__footer">
              <div className="card__price">
                <span className="card__price-title">Цена</span>
                <b className="card__price-num">12999 руб.</b>
              </div>
              <button className="card__add button">
                <svg className="card__add-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2"/>
                  <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="card">
            <img width="133" height="112" src="./images/goods/good-3.jpg" alt="" className="card__img" />
            <h3 className="card__title">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h3>
            <div className="card__footer">
              <div className="card__price">
                <span className="card__price-title">Цена</span>
                <b className="card__price-num">12999 руб.</b>
              </div>
              <button className="card__add button">
                <svg className="card__add-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2"/>
                  <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="card">
            <img width="133" height="112" src="./images/goods/good-4.jpg" alt="" className="card__img" />
            <h3 className="card__title">
              Кроссовки Puma X Aka Boku Future Rider
            </h3>
            <div className="card__footer">
              <div className="card__price">
                <span className="card__price-title">Цена</span>
                <b className="card__price-num">12999 руб.</b>
              </div>
              <button className="card__add button">
                <svg className="card__add-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2"/>
                  <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>
           */}
        </div>
      </div>
    </div>
  );
}

export default App;
