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

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const onSelect = (item) => {
    setNewCity(item);
    setShowList(false);
    inputRef.current.value = "";
  };

  return (
    <div className="form-wrapper">
      <form className="search-form" onSubmit={onSubmitForm}>
        <input
          className="search-input"
          type="text"
          name="cityName"
          id="cityName"
          placeholder="Enter a City Name"
          onChange={onChange}
          ref={inputRef}
        />
      </form>
      {cityList.cod !== "400" && cityList && showList ? (
        <ul className="city-ul">
          {Object.keys(cityList).map((key, index) => (
            <li className="city-li" key={cityList[index].lat}>
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
      ) : (
        <p />
      )}
    </div>
  );
}

export default SearchCityForm;
