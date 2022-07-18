import { useState, useEffect, createContext, useCallback } from "react";
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import LyricsPage from "./Components/LyricsPage";
import SearchBar from "./Components/SearchBar";
import Loading from "./Components/Loading";

export const AppContext = createContext()
function App() {
  
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function getLyrics(searchString) {
    
    const url = `https://api.lyrics.ovh/v1/${searchString}`;
    setIsLoading(true)
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setSearchResults(data.lyrics);
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error);
      });
    }
    
    console.log(searchResults)
  function handleChange(event) {
    setSearchString(event.target.value);
  }

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    getLyrics(searchString);
    navigate('/results/')
  }
  
  return (
    <div className="App">
      {isLoading ? <Loading/> : <div></div>}
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
