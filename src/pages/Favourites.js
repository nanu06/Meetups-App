import { useContext } from "react";
import FavoritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";
function FavouriteMeetupPage() {
  const favouriteCtx = useContext(FavoritesContext);

  let content;

  if (favouriteCtx.totalFavorites === 0) {
    content = <p>YOU GOT NO FAVORITES YET, START ADDING SOME?</p>;
  }else{
    content = <MeetupList meetups={favouriteCtx.favorites} />
  }
  return (
    <section>
      <h1>My Favourites!</h1>
      {content}
    </section>
  );
}
export default FavouriteMeetupPage;
// import { useContext } from 'react';

// import FavoritesContext from '../store/favourites-context';
// import MeetupList from '../components/meetups/MeetupList';

// function FavoritesPage() {
//   const favoritesCtx = useContext(FavoritesContext);

//   let content;

//   if (favoritesCtx.totalFavorites === 0) {
//     content = <p>You got no favorites yet. Start adding some?</p>;
//   } else {
//     content = <MeetupList meetups={favoritesCtx.favorites} />;
//   }

//   return (
//     <section>
//       <h1>My Favorites</h1>
//       {content}
//     </section>
//   );
// }

// export default FavoritesPage;