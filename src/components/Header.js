import React from 'react';

// This is a functional component that represents the menu header
const Header = ({ title, tagline }) => {
  return (
    <div class="row align-items-center container-fluid">
      <img src="./images/Header_Banner_Wordless.jpg" alt={"Volcano Watch banner1"} class="banner" />
      <img src="Header_Banner_Wordless.jpg" alt={"Volcano Watch banner2"} class="banner" />
      <img src="./Header_Banner_Wordless.jpg" alt={"Volcano Watch banner3"} class="banner" />
      <img src="./src/images/Header_Banner_Wordless.jpg" alt={"Volcano Watch banner4"} class="banner" />
      <h1 class="text-center display-1">{ title }</h1>
      <p class="text-center tagline">{tagline}</p>
    </div>
  );
};

export default Header;
