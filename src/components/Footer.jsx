import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <h1> Duy Hung - {currentYear}</h1>
    </footer>
  );
}
export default Footer;
