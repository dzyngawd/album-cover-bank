import React from "react";

// STYLE IMPORT
import classes from "./SearchBar.module.css";

// IMAGE IMPORTS
import SearchIcon from "../../assets/searchIcon.png";
import FilterIcon from "../../assets/filterIcon.png";
import SearchFilter from "./SearchFilter";

export default function SearchBar({setSearchTerm}) {
  return (
    <div className={classes.SearchBar}>
      <img src={SearchIcon} alt="search" />
      <input
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img src={FilterIcon} alt="filter" />

      {/* FILTER DROPDOWN */}
      <SearchFilter />
    </div>
  );
}
