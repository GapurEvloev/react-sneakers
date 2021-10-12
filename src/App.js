import React, {useState} from 'react';
import Header from './components/Header'
import Card from './components/Card'
import Drawer from './components/Drawer';

const arr = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: './images/goods/good-1.jpg' },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: './images/goods/good-2.jpg' },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: './images/goods/good-3.jpg' },
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 12999, imageUrl: './images/goods/good-4.jpg' },
]

function App() {
  const [cartOpened, setCartOpened] = useState(false);

  return (
    <div className="wrapper clear">

      {cartOpened ? <Drawer/> : null}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content">
        
        <div className="content__header">
          <h1 className="main-title">Все кроссовки</h1>
          <div className="search-block">
            <img src="./images/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        
        <div className="cards">
          {
            arr.map((obj, index) => (
              <Card 
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                key={index}
                onClickFavourite={() => {console.log(obj)}}
                onClickAdd={() => {console.log(obj)}}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
