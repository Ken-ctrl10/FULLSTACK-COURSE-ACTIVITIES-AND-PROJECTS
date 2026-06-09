function Footer(){

  const date = new Date().getFullYear();
  const creator = "Ken Castillo";


  return(
    <footer>
      <p>© Copyright {date}. Created by {creator}.</p>
    </footer>
  );
}

export default Footer;