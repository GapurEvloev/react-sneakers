import React from 'react';
import Card from '../components/Card';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card 
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onClickAdd={
          (obj) => onAddToCart(obj)
        }
        loading={isLoading}
        {...item}
      />
    ))
  }


  return (
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
          renderItems()
        }
      </div>
    </div>
  )
}

export default Home;