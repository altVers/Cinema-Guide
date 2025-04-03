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
            <Route path="/Cinema-Guide" element={<MainPage />} />
            <Route path="/Cinema-Guide/movie/:movieId" element={<AboutFilmPage />} />
            <Route path="/Cinema-Guide/movie/genres/" element={<GenresPage />} />
            <Route
              path="/Cinema-Guide/movie/genres/:movieGenre"
              element={<GenreFilmsPage />}
            />
            <Route path="/Cinema-Guide/profile/" element={<ProfilePage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
