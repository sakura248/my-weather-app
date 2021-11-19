import React from 'react'
import './SearchCityForm.css'


const SearchCityForm = (props) => {

    return (
        <div className="form-wrapper">
            <form className="search-form" onSubmit={props.SearchCity}>
                <input
                    className="search-input"
                    type='text'
                    name='city'
                    id='city'
                    placeholder='Enter a City Name'
                />
            </form>
        </div>
    )
}


export default SearchCityForm