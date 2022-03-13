import React, {useState} from 'react'
import './SearchCityForm.css'
import axios from 'axios'



const SearchCityForm = (props) => {
    const [city, setCity] = useState('')
    const [query, setQuery] = useState("")
    const [data, setData] = useState([])

    // const searchSetCity = (e) => {
    //     e.preventDefault();
    //     const newCity = document.querySelector("#cityName").value
        
    //     // console.log(newCity)
    //     setCity(newCity)
    //     axios
    //         .get(
    //             `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    //             )
    //     .then(res => {
    //         if(res.cod === '404') {
    //             alert("City Not Found!");
    //         }
    //         if(res.statusText === 'OK') {
    //             setData(res.data)
    //             console.log("search city: ", data)
    //             setQuery('')
    //         }
    //         })
    //     .catch(error => {
    //         console.log(error)
    //         })
    // }

    return (
        <div className="form-wrapper">
            <form className="search-form" onSubmit={props.searchSetCity}>
                <input
                    className="search-input"
                    type='text'
                    name='cityName'
                    id='cityName'
                    placeholder='Enter a City Name'
                />
            </form>
        </div>
    )
}


export default SearchCityForm