import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  const creator = "Ken Castillo";

  return (
    <footer>
      <p>Copyright ⓒ {year}. Created by {creator}.</p>
    </footer>
  );
}

export default Footer;
