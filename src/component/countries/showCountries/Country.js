import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name, population, area, region, flags, cca3} = props.country;
    return (
        <div>
            {/*<div className="border">*/}
            {/*    <h3>Name: {props.name}</h3>*/}
            {/*    <p>Population: {props.population}</p>*/}
            {/*    <p>Area: {props.area}</p>*/}
            {/*</div>*/}
            <div className="border">
                <h3>Name: {name.common}</h3>
                <img src={flags.png} alt="flag"/>
                <p>Country Code: {cca3}</p>
                <p>Population: {population}</p>
                <p>Area: {area}</p>
                <p>Region: {region}</p>
            </div>
        </div>
    );
};

export default Country;