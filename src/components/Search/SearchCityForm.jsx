import React from "react";
import "./SearchCityForm.css";

function SearchCityForm({ searchSetCity, onChange }) {
  // const [city, setCity] = useState("");
  // const [query, setQuery] = useState("");
  // const [data, setData] = useState([]);

  // const searchSetCity = (e) => {
  //   e.preventDefault();
  //   const newCity = document.querySelector("#cityName").value;

  //   axios
  //     .get(
  //       `${process.env.REACT_APP_API_URL}/geo/1.0/direct?q=${city}&limit=5&appid==${process.env.REACT_APP_API_KEY}`
  //     )
  //     .then((res) => {
  //       if (res.cod === "404") {
  //         alert("City Not Found!");
  //       }
  //       if (res.statusText === "OK") {
  //         setData(res.data);
  //         console.log("search city: ", data);
  //         setQuery("");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const onChangeCity = (e) => {
  //   setCity(e.target.value)
  // }

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
