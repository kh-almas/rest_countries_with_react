import React, {useEffect, useState} from 'react';
import Country from "../showCountries/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[]);
    return (
        <div>
            <div className="text-center">
                <h2>All countries information</h2>
                <h4>Available countries: {countries.length}</h4>
            </div>
            {/*<div id="info">*/}
            {/*    {*/}
            {/*        countries.map(country => <Country name={country.name.common} population={country.population} area={country.area}></Country>)*/}
            {/*    }*/}
            {/*</div>*/}
            <div id="info">
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;