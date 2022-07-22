import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import LyricsPage from "./Components/LyricsPage";
import Loading from "./Components/Loading";

function App() {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState("");

  function getLyrics(searchString) {
    const url = `https://api.lyrics.ovh/v1/${searchString}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setSearchResults(data.lyrics);
        navigate("/results/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(searchResults);
  function handleChange(event) {
    setSearchString(event.target.value);
  }

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    getLyrics(searchString);
    navigate("/loading/");
  }
  return (
    <div className="App">
      <nav className="nav-1">
        <h1 className="nav-child-title">Music Finder</h1>
        <Link className="nav-child" to="/">
          <h2>Home</h2>
        </Link>
      </nav>
      <main>
        <Routes>
          <Route
            path="/results/"
            element={<LyricsPage searchResults={searchResults}
            searchString={searchString} />}
          />
          <Route
            path="/"
            element={
              <Home
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                searchString={searchString}
              />
            }
          />
          <Route path="/loading/" element={<Loading />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
