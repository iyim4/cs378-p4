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

  useEffect(() => {
    fetchData(capUrl, setData);
  }, []);

  return (
    <div>
      <Header title="Volcano Watch" tagline="Find volcano statuses" />
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
    <div>
      <p>footer</p>
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
