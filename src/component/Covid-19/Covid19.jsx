import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Covid19 = () => {

    const [covidHis, setCovidHistory] = useState({
        country: "",
        cases: "",
        deaths: "",
        recovered: "",
        todayCases: ""
    })

    const [search, setSerch] = useState();

    function fetchData(query) {
        // Using fetch api
        // fetch(`https://disease.sh/v3/covid-19/countries/${query}`)
        //     .then((data) => data.json()).then((response) =>
        //         setCovidHistory({
        //             ...covidHis,
        //             country: response.country,
        //             cases: response.cases,
        //             deaths: response.deaths,
        //             recovered: response.recovered,
        //             todayCases: response.todayCases


        //         }))
        //     .catch((error) => console.log(error.message));

        // Using axios
        axios.get(`https://disease.sh/v3/covid-19/countries/${query}`)
            .then((response) => 
                setCovidHistory({
                    ...covidHis,
                    country: response.data.country,
                    cases: response.data.cases,
                    deaths: response.data.deaths,
                    recovered: response.data.recovered,
                    todayCases: response.data.todayCases


                })
                )
            .catch((error) => console.log(error.message));
    }

    useEffect(() => {
        fetchData("india")
    }, []);

    function searchData() {
        fetchData(search)
    }

    return (
        <div>

            <h1>Covid 19 cases country wise </h1>

            <input type="text" onChange={(e) => setSerch(e.target.value)} />
            <br />
            <br />
            <button onClick={searchData}>Search</button>

            <p>Country name : {covidHis.country}</p>
            <p>Cases : {covidHis.cases}</p>
            <p>Deaths : {covidHis.deaths}</p>
            <p>Recovered : {covidHis.recovered}</p>
            <p>Today cases : {covidHis.todayCases}</p>
        </div>



    )
}

export default Covid19