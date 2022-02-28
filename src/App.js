import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavouriteMeetupPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage />} />
        <Route exact path="/New-Meetups" element={<NewMeetupPage />} />
        <Route exact path="/Favourites" element={<FavouriteMeetupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
