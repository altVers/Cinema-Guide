import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage/MainPage";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutFilmPage } from "./pages/AboutFilmPage/AboutFilmPage";
import { GenresPage } from "./pages/GenresPage/GenresPage";
import { GenreFilmsPage } from "./pages/GenreFilmsPage/GenreFilmsPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { useCallback } from "react";

function App() {
  const memoHeader = useCallback(() => <Header />, [])
  return (
    <>
      <BrowserRouter>
        {memoHeader()}
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movie/:movieId" element={<AboutFilmPage />} />
            <Route path="/movie/genres/" element={<GenresPage />} />
            <Route
              path="/movie/genres/:movieGenre"
              element={<GenreFilmsPage />}
            />
            <Route path="/profile/" element={<ProfilePage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
