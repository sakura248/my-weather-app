import React, {useState} from 'react'
import './SearchCityForm.css'
import axios from 'axios'



const SearchCityForm = (props) => {

    const [query, setQuery] = useState("")
    const [data, setData] = useState([])

    const setQueryHandler =(event)=> {
        event.preventDefault();
        const newQuery = document.querySelector("#cityName").value
        setQuery(newQuery)
        SearchCity(newQuery)
    } 

    const SearchCity = (city) => {
        console.log(city)
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/weather/?q=${
                    city !== "[object Object]" ? city : query
                }&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
                )
        .then(res => {
            // if(res.cod === '404') {
            //     alert("City Not Found!");
            // }
            if(res.statusText === 'OK') {
                setData(res.data)
                console.log(data)
            }
            setQuery('')
            })
        .catch(error => {
            console.log(error)
            })
    }


    return (
        <div className="form-wrapper">
            <form className="search-form" onSubmit={setQueryHandler}>
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