import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header'
import Card from './components/Card'
import Drawer from './components/Drawer';

// const arr = [];

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = useState(false);

  React.useEffect(() => {
    axios.get('https://61659f30cb73ea001764213a.mockapi.io/items').then( res => {
      setItems(res.data);
    });
    axios.get('https://60d62397943aa60017768e77.mockapi.io/cart').then( res => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://60d62397943aa60017768e77.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60d62397943aa60017768e77.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id))
    
  }

  const onAddToFavorite = (obj) => {
    axios.post(`https://60d62397943aa60017768e77.mockapi.io/favorites`, obj);
    setFavorites(prev => [...prev, obj])
    
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
    // console.log(event.target.value);
  } 

  return (
    <div className="wrapper clear">
      { 
        cartOpened && <Drawer 
          items={cartItems}
          onClose={() => setCartOpened(!cartOpened)} 
          onRemove={onRemoveItem}
          // opened={cartOpened}
        /> 
      }

      <Header onClickCart={() => setCartOpened(!cartOpened)} />

      {/* <Route path="/"></Route> */}

      <div className="content">
        
        <div className="content__header">
          <h1 className="main-title">
            {
              searchValue ? `Поиск по запросу "${searchValue}"` : `Все кроссовки`
            }
          </h1>
          <div className="search-block">
            <img src="./images/search.svg" alt="Search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="removeBtn" src="./images/btn-remove.svg" alt="Remove" />}
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
          </div>
        </div>
        
        <div className="cards">
          {
            items
              .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item, index) => (
              <Card 
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                key={item.id}
                onFavorite={onAddToFavorite}
                onClickAdd={
                  onAddToCart
                }
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
