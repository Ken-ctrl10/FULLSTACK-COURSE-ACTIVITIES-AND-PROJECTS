function Avatar({ img, name }){
  return <img src={img} alt={name + "-image"} className="circle-img" />;
}

export default Avatar;