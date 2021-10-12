import React, {useState} from 'react';
import Header from './components/Header'
import Card from './components/Card'
import Drawer from './components/Drawer';

const arr = [];

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  React.useEffect(() => {
    fetch('https://61659f30cb73ea001764213a.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="wrapper clear">

      { 
        cartOpened && <Drawer 
          items={cartItems}
          onClose={() => setCartOpened(!cartOpened)} 
          // onRemove={onRemoveItem}
          // opened={cartOpened}
        /> 
      }

      <Header onClickCart={() => setCartOpened(!cartOpened)} />

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
            items.map((obj, index) => (
              <Card 
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                key={index}
                onClickFavourite={() => {console.log("obj")}}
                onClickAdd={() => {console.log("obj")}}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
