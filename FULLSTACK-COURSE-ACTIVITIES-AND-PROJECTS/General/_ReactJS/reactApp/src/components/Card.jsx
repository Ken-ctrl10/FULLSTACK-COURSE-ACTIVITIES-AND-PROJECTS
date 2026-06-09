//Contact Card Component Practice with Styles
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card({name, img, phone, email}){
  return(
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <Avatar img={img} name={name} />
      </div>
      <div className="bottom">
        <Detail detailInfo={phone} />
        <Detail detailInfo={email} />
      </div>
    </div>
  );
}

export default Card;
/* //Contact Card Component
function Card({ name, imgURL, phone, email  }){
  return(
    <div>
      <h2>{name}</h2>
      <img src={imgURL} alt={name + "-image"} />
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}

export default Card; */