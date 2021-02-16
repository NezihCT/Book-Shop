import React, { useRef, useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import LibraryInfo from "../data/LibraryInfo.json";
import "./style.css";

function Search(props) {
  const location = useLocation();
  const history = useHistory();
  // Burda yapmak istediğimiz bir urlden veri çekmek
  const params = new URLSearchParams(location.search);
  const q = params.get("q");
  // const [inputValue, setInputValue] = useState(q ? q : "")
  const inputValue = useRef();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (q) {
      inputValue.current.value = q;

      const writerSearch = LibraryInfo.library
        .filter((item) => item.writer.toLowerCase().includes(q.toLowerCase()))
        .map((item) => (
          <li key={item.id} className="list-group-item">
            <Link to={`/products/${item.id}`}>
              {item.writer} / {item.bookName}
            </Link>
          </li>
        ));

      setSearchResult(writerSearch);
    }

    //Sonsuz döngüye düşücek olursak görmüş
    //oluruz. Datei o yüzden kullandık
    console.log(new Date());
  }, [q]);

  function handleForm(event) {
    event.preventDefault();
    history.push(`/search?q=${inputValue.current.value}`);
  }
  return (
    <>
      <form onSubmit={handleForm} className="d-flex justify-content-center">
        <div className="input-group mt-5" id="search1">
          <label htmlFor="search"></label>
          <input
            name="q"
            type="text"
            className="form-control py-1 rounded"
            id="search"
            placeholder="Search Writer"
            aria-describedby="button-addon"
            ref={inputValue}
          />
          <button
            className="btn"
            type="button"
            id="button-addon"
            onClick={handleForm}
          >
            Search
          </button>
        </div>
      </form>
      <ul className="list-group mt-3">{searchResult}</ul>
    </>
  );
}

export default Search;
