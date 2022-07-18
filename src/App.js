import { useState, useEffect, createContext, useCallback } from "react";
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import LyricsPage from "./Components/LyricsPage";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";

export const AppContext = createContext()
function App() {
  
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState('');

  function getLyrics(searchString) {
    
    const url = `https://api.lyrics.ovh/v1/${searchString}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleChange(event) {
    console.log("test");
    setSearchString(event.target.value);
  }

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    getLyrics(searchString);
    navigate('/results/')
  }

<Home
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  searchString={searchString}
/>
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path="/results/" element={<LyricsPage
          searchResults={searchResults}
          />} />
          <Route path="/" element={<Home
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  searchString={searchString}
/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
