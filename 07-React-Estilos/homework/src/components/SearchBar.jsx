import React from 'react';
import { useState } from "react";
import { search, input, button } from "../css/searchbar.module.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código

  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSearch = e => {
    onSearch(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={search}>
      <input className={input} value={value} onChange={handleChange} />
      <button className={button} onClick={handleSearch}>
        Agregar
      </button>
    </form>
  );
};