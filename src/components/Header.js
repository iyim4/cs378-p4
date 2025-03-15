import React from 'react';

// This is a functional component that represents the menu header
const Header = ({ title }) => {
  return (
    <div>
      <div class="row align-items-center container-fluid">
        <div class="col-3 d-flex align-items-center">
          <img src="./logo512.png" alt={"React logo"} class="img-fluid rounded float-left"/>
        </div>
        <div class="col-9">
          <h1 class="text-center display-1">{ title }</h1>
        </div>
      </div>
      <p class="text-center tagline">Delicious Japanese Cuisine!</p>
    </div>
  );
};

export default Header;
