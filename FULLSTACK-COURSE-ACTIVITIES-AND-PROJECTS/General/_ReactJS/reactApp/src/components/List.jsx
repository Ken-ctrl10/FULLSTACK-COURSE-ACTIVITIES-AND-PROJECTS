//Import, Export, and Modules Practice
import { add, subtract, multiply, divide} from '../calculator.js';

function List(){
  return(
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5,2)}</li>
    </ul>
  );
}

export default List;

/* function List(){

  const katekyo = "https://tse1.mm.bing.net/th/id/OIP.XdXCgU2a4zgLzXNfckX3ewHaKh?rs=1&pid=ImgDetMain&o=7&rm=3";
  const bleach = "https://tse1.mm.bing.net/th/id/OIP.vJuCMhd9c6jfjiq4xrCrswHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3";
  const yakitate = "https://tse4.mm.bing.net/th/id/OIP.AQUmPrksUqzXvXZFOscpHAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3";
  const frieren = "https://tse1.mm.bing.net/th/id/OIP.dDzQc-BTebWGuJbBy1DurgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3";
  const onePiece = "https://images-cdn.ubuy.co.in/633ff1157e3fbc25557517c8-one-piece-poster-japanese-anime-posters.jpg";

  return(
    <ul>
      <li><img src={katekyo} alt="katekyo-img"/></li>
      <li><img src={bleach} alt="bleach-img"/></li>
      <li><img src={yakitate} alt="yakitate-img"/></li>
      <li><img src={frieren} alt="frieren-img"/></li>
      <li><img src={onePiece} alt="one-piece-img"/></li>
    </ul>
  );
}


export default List; */