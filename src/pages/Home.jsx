import Card from '../components/Card'

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
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
          items
            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
            <Card 
              key={item.id}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onClickAdd={
                (obj) => onAddToCart(obj)
              }
              {...item}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home;