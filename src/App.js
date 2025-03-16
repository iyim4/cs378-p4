import './App.css';
import VolcanoData from './components/VolcanoData';
import Header from './components/Header';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; 

// orange+
const capUrl = "https://volcanoes.usgs.gov/hans-public/api/volcano/getCapElevated";
// yellow+
const elevUrl = "https://volcanoes.usgs.gov/hans-public/api/volcano/getElevatedVolcanoes";
// all
const allUrl =  "https://volcanoes.usgs.gov/hans-public/api/volcano/getMonitoredVolcanoes";

function App() {
  const [data, setData] = useState([]);
  const [curUrl, setCurUrl] = useState(capUrl);

  useEffect(() => {
    fetchData(curUrl, setData);
  }, [curUrl]);

  return (
    <div>
      <Header title="Volcano Watch" tagline="Find volcano statuses" />
      <div class="row justify-content-center align-items-center">
        <div class="col-4 d-flex justify-content-center">
          <button class="btn btn-secondary vorange" onClick={() => setCurUrl(capUrl)}>Orange+</button>
        </div>
        <div class="col-4 d-flex justify-content-center">
          <button class="btn btn-secondary vyellow" onClick={() => setCurUrl(elevUrl)}>Yellow+</button>
        </div>
        <div class="col-4 d-flex justify-content-center">
          <button class="btn btn-secondary vunknown" onClick={() => setCurUrl(allUrl)}>All</button>
        </div>            
      </div>
      <div className="list">
        {data.map((vdata) => (
          <VolcanoData vdata={vdata} />
        ))}
      </div>
      <Footer />
    </div>
  );
}



function Footer() {
  return (
    <div class="footer">
      <p>Volcano data from the <a href="https://volcanoes.usgs.gov/hans-public/api/volcano/">U.S. Geological Survey</a>.</p>
    </div>
  );
}

async function fetchData(url, setData) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  } catch (err) {
    console.error("Error fetching data: ", err);
    setData([]);
  }
}

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching data: ", err);
    return [];
  }
}

export default App;
