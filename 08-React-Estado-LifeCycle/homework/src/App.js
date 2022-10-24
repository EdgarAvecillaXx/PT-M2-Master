import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";

function App() {
  // states
  const [cities, setCities] = useState([]); //saves city info from the API
  const [flag, setFlag] = useState(true); //is set false, the API dind't find the city

  //API states
  const [search, setSearch] = useState(""); // recieves the city from the search box
  const [request, setRequest] = useState(false); // if true a request has been sendt

  // Weather API
  const apiKey = "353114f1eda9c627f7900d87707dd7d8";

  useEffect(() => {
    if (request) {
      //Request to the API
      const getWeather = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
          const ciudad = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon,
          };
          setCities(oldcities => [...oldcities, ciudad]);
          if (!flag) setFlag(true);
        } else {
          if (flag) setFlag(false);
        }
        setRequest(false);
      };
      getWeather();
    }
  }, [request]);

  //saves the city recieved from the searchbox
  const handleSearch = async ciudad => {
    setSearch(ciudad);
  };

  // handles the close action on the card
  const handleClose = id => {
    setCities(oldcities => oldcities.filter(city => city.id !== id));
  };

  // REVIEW:
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  //Component render
  return (
    <div className="App">
      {/* Tu código acá: */}
      <Nav onSearch={handleSearch} flag={flag} setRequest={setRequest} />
      <Cards cities={cities} onClose={handleClose} />
    </div>
  );
}

export default App;
