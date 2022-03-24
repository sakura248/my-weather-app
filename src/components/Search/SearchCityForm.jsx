import React, { useRef } from "react";
import "./SearchCityForm.css";

function SearchCityForm({
  onChange,
  showList,
  cityList,
  setNewCity,
  setShowList,
}) {
  const inputRef = useRef();

  const onSelect = (item) => {
    setNewCity(item);
    setShowList(false);
    inputRef.current.value = "";
  };

  return (
    <div className="form-wrapper">
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          name="cityName"
          id="cityName"
          placeholder="Enter a City Name"
          onChange={onChange}
          // value={valueTxt}
          ref={inputRef}
        />
      </form>
      {showList && (
        <ul className="city-ul">
          {Object.keys(cityList).map((key, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className="city-li" key={index}>
              <button
                onClick={() => onSelect(cityList[index])}
                type="button"
                className="city-btn"
              >
                {cityList[index].name}&#44;&nbsp;{cityList[index].state}&nbsp;
                {cityList[index].country}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchCityForm;
