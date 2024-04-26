import { useState } from "react";
import toast from "react-hot-toast";

import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  //   console.log(query);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error("Can not be empty");
    }
    // console.log("query", query);
    onSubmit(query);
    setQuery("");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search movies..."
          value={query}
          required
          onChange={handleChange}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
