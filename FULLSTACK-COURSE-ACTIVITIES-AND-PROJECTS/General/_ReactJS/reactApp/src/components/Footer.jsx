function Footer(){

  const fullName = "Ken Castillo";
  const currYear = new Date().getFullYear();

  return(
    <footer>
      Created by {fullName}<br/> © Copyright {currYear}
    </footer>
  );
}

export default Footer;