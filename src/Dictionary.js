import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  
  function search(event) {
    event.preventDefault();
    // Documentation (SheCodes) API: https://api.shecodes.io/dictionary
    let apiKey = "4foa607c84aebtf4ba3ef312c0d43387";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <div className="search-box">
            <input
              type="search"
              onChange={handleKeywordChange}
              placeholder="Enter a word"
              className="search-box"
            />
          </div>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
