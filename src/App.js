import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import AppContext from './context';

import Header from './components/Header';
import Drawer from './components/Drawer';


import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    async function fetchData () {
      // setIsLoading(true)
      const cartResonse = await axios.get('https://60d62397943aa60017768e77.mockapi.io/cart');
      const favoritesResonse = await axios.get('https://60d62397943aa60017768e77.mockapi.io/favorites');
      const itemsResonse = await axios.get('https://61659f30cb73ea001764213a.mockapi.io/items');

      setIsLoading(false)
      
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
      if(favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://60d62397943aa60017768e77.mockapi.io/favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
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

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems }}>
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
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>

        <Route path="/orders" exact>
          <Orders />
        </Route>

      </div>
    </AppContext.Provider>
  );
}

export default App;
