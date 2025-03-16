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
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // get volcano data
  useEffect(() => {
    fetchData(curUrl, setData);
  }, [curUrl]);

  // filter if searched
  useEffect(() => {
    setFilteredData(filterData(data, search));
  }, [search, data]);

  return (
    <div>
      <Header title="Volcano Watch" tagline="Find volcano statuses" />
      <Buttons curUrl={curUrl} setCurUrl={setCurUrl} />
      <Search setSearch={setSearch} />
      <div className="list">
        {filteredData.length > 0 ? (
          filteredData.map((vdata) => (
            <VolcanoData key={vdata.id} vdata={vdata} />
          ))
        ) : (
          <p>Couldn't find any volcanoes from "{search}"</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div class="align-items-center container-fluid">
      <p class="footer">Volcano data from the <a href="https://volcanoes.usgs.gov/hans-public/api/volcano/">U.S. Geological Survey</a>.</p>
      <img src="./images/Footer_Banner.jpg" alt={"Volcano Watch footer. Decorative."} class="banner" />
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

function filterData(data, query) {
  if (query) {
    return data.filter(vdata => 
      vdata.obs_fullname.toLowerCase().includes(query.toLowerCase()) ||
      vdata.volcano_name.toLowerCase().includes(query.toLowerCase())
    );
  }
  return data;
}

function Buttons({ curUrl, setCurUrl }) {
  return ( 
    <div className="row center buttons-con">
      <div className="col-4 d-flex center">
        <button 
          className={`btn ${curUrl === capUrl ? 'btn-primary' : 'btn-secondary'}`} 
          onClick={() => setCurUrl(capUrl)}
        >
          Orange+
        </button>
      </div>
      <div className="col-4 d-flex center">
        <button 
          className={`btn ${curUrl === elevUrl ? 'btn-primary' : 'btn-secondary'}`} 
          onClick={() => setCurUrl(elevUrl)}
        >
          Yellow+
        </button>
      </div>
      <div className="col-4 d-flex center">
        <button 
          className={`btn ${curUrl === allUrl ? 'btn-primary' : 'btn-secondary'}`} 
          onClick={() => setCurUrl(allUrl)}
        >
          All
        </button>
      </div>            
    </div>
  );
}

function Search ({ setSearch }) {
  return (
    <div class="search justify-content-center">
        <input 
          type="text" 
          placeholder="Search by observatory or volcano name" 
          class="form-control"
          onChange={(event) => setSearch(event.target.value)} 
          />
    </div>
  );
};

export default App;
