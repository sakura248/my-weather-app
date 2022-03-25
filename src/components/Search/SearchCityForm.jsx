import React from "react";
import "./SearchCityForm.css";

function SearchCityForm({ searchSetCity, onChange }) {
  return (
    <div className="form-wrapper">
      <form className="search-form" onSubmit={searchSetCity}>
        <input
          className="search-input"
          type="text"
          name="cityName"
          id="cityName"
          placeholder="Enter a City Name"
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default SearchCityForm;
