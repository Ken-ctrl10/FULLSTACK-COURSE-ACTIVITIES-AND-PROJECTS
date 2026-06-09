//React Props Practice
import Avatar from "./Avatar";
import Heading from "./Heading";
import Card from "./Card";
import Footer from "./Footer";

import contact from '../contacts';

function CreateCard(contact){
  return <Card 
    key={contact.id}
    name={contact.name} 
    img={contact.img}
    phone={contact.phone}
    email={contact.email}
  />
}

function App(){
  return(
    <>
      <Heading />

      <Avatar img="https://tse1.mm.bing.net/th/id/OIP.-pjKCnBsdc-hSlfCbKY8JAHaDt?rs=1&pid=ImgDetMain&o=7&rm=3" name="Avatar" />

      {
        //Mapping through the contacts array
      }

      {contact.map(CreateCard)}

      {/*   <Card 
        name={contact[0].name}
        img={contact[0].img}
        phone={contact[0].phone}
        email={contact[0].email}
      />

      <Card 
        name={contact[1].name}
        img={contact[1].img}
        phone={contact[1].phone}
        email={contact[1].email}
      />

      <Card 
        name={contact[2].name}
        img={contact[2].img}
        phone={contact[2].phone}
        email={contact[2].email}
      /> */}


      <Footer/>
    </>
  );
}

export default App;


/* //React Props
import Card from "./Card";
import Footer from "./Footer";

function App() {
  return(
    <>

      <h2>My Contacts:</h2>

      <Card 
        name="Tom Holland"
        imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAdIvG0dRNgnSB70pEPlCfjJv4ZAd9GSB9_kWtHJbLOncN3cw3UYl5XkYaI_cbS1Hbnrwxh-vrFVsTapR60weUVKRb4Y-x2MEvjNLRJyy&s=10"
        phone="+(143) 662-9810"
        email="TomH@yahoo.com"
      />
      <Card 
        name="Charlie Cox"
        imgURL="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRu4MGvqgmxbpzrbDfoM7PjatuKoj00fOusRKnGCfIDKgOKfXQYhl2DnF5u9l4ADhfGzwmuXHuiJFgYkp3KIIxpX7_0U-OYw4fWgysR4zpB48sA23I2LvBu72vvdRMt_QJ7_IYZRrJfmq0W&s=19"
        phone="+(991) 129-2032"
        email="CCox67@gmail.com"
      />

      <Card 
        name="Elle Fanning"
        imgURL="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSfjPAX3cjwIXmyvXJly29Hk1f_wserOwf6-nvUr5wVnSEycP6OK3-NVjyPLbn4e8OSb9CtGlB7S_Vfw2uFlJDZ6ZQNSAzvOloOX7vo8YIbjEYMhkkpJNzbyxCWY9f-Ety-I-GBtsrE8f1M&s=19"
        phone="+(543) 892-9012"
        email="ElleF@gmail.com"
      />


      <Footer />
    </>
  );
}

export default App;
*/

/* //Import, Export, and Modules Practice
import List from './List';

function App() {
  return(
    <>
      <List />
    </>
  );
}

export default App; */

/*//React Component Practice
import Heading from "./Heading";
import Footer from "./Footer"

function App() {
  return(
    <div>
      <Heading />
      <Footer />
    </div>
  );
}

export default App; */
