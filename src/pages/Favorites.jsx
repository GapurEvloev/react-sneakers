import React from 'react';
import Card from '../components/Card';
// import AppContext from '../context';

function Favorites({ items, onAddToFavorite }) {
//   const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="cards d-flex flex-wrap">
        {
          items
            .map((item, index) => (
            <Card key={item.id} favorited={true} onFavorite={onAddToFavorite} {...item} />
          ))
        }
      </div>
    </div>
  );
}

export default Favorites;