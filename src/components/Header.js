import React from 'react';

// renders the header banner image and description
const Header = ({ title, tagline }) => {
  return (
    <div class="align-items-center container-fluid">
      <img src="./images/Header_Banner.jpg" alt={"Volcano Watch banner"} class="banner" />
      <div>
        <h1 class="text-center display-1">{ title }</h1>
        <p class="text-center tagline">{tagline}</p>
      </div>
    </div>
  );
};

export default Header;
