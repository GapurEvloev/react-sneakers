import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';


import Home from './pages/Home';
import Favorites from './pages/Favorites';
// import Orders from './pages/Orders';

// const arr = [];

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData () {
      const cartResonse = await axios.get('https://60d62397943aa60017768e77.mockapi.io/cart');
      const favoritesResonse = await axios.get('https://60d62397943aa60017768e77.mockapi.io/favorites');
      const itemsResonse = await axios.get('https://61659f30cb73ea001764213a.mockapi.io/items');
      
      setCartItems(cartResonse.data);
      setFavorites(favoritesResonse.data);
      setItems(itemsResonse.data);
    }
    fetchData ();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if(cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://60d62397943aa60017768e77.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://60d62397943aa60017768e77.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj])
      }
    } catch (error) {
      alert('Не удалось добавить!')
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60d62397943aa60017768e77.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onAddToFavorite = async (obj) => {
    try {
      if(favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://60d62397943aa60017768e77.mockapi.io/favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => item.id !== obj.id))
      } else {
        const { data } = await axios.post(`https://60d62397943aa60017768e77.mockapi.io/favorites`, obj);
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить!')
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
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

      <Route path="/" exact>
        <Home
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          // isLoading={isLoading}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>

      {/* <Route path="orders" exact>
        <Orders />
      </Route> */}

    </div>
  );
}

export default App;
