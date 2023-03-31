import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Nav/Navbar";
import NoMatch from "./components/NoMatch";
// eslint-disable-next-line
import Page from "./components/View/Page";
import About from "./components/About/About";
import BackToTop from "./components/Controls/BackToTop/BackToTop";
import MovieTemplate from "./components/movie/MovieTemplate";
import SearchResults from "./components/Search/SearchResults";
import Upcoming from "./components/movie/Upcoming";
import Latest from "./components/movie/Latest";
import { MovieByIdAPI } from "./components/API/MovieById";
import CustomAPI from "./components/API/CustomAPI";

function App() {
  return (
    <div>
      <CustomAPI>
        <MovieByIdAPI>
          <Navbar />
          <BackToTop />

          <Routes>
            <Route path="/MovieRating" element={<Home />}>
              <Route path="latest" element={<Latest />}>
                <Route path=":id" element={<Page pageType="latest" />}></Route>
              </Route>
              <Route path="upcoming" element={<Upcoming />}>
                <Route
                  path=":id"
                  element={<Page pageType="upcoming" />}></Route>
              </Route>
            </Route>

            <Route path="/MovieRating/about" element={<About />}></Route>
            <Route
              path="/MovieRating/search/:string"
              element={<SearchResults />}></Route>
            <Route
              path="MovieRating/MovieTemplate/:id"
              element={<MovieTemplate />}
            />

            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </MovieByIdAPI>
      </CustomAPI>
    </div>
  );
}

export default App;
