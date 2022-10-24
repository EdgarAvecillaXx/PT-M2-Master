import React from "react";
import Logo from "../../logoHenry.png";
import SearchBar from "../SearchBar/SearchBar";
import { nav, title, search } from "./nav.module.css";

function Nav({ onSearch, flag, setRequest }) {
  return (
    <div className={nav}>
      <div>
        <img src={Logo} alt="logo" />
        <span className={title}>Henry - Weather App</span>
      </div>

      <SearchBar
        className={search}
        onSearch={onSearch}
        flag={flag}
        setRequest={setRequest}
      />
    </div>
  );
}

export default Nav;
