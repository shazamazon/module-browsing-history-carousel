import React from 'react';

const InfoBox = (props) => {
  
  if (props.item === null) {
    return (
      <div className="carouselItemBox"></div>
    );
  } else {
    return (
      <div className="carouselItemBox">
        <img className="carouselPics" onClick={() => props.setGlobal(event, props.item.ProductId)} src={props.item.Photo}></img>
      </div>
    );
  }
};

export default InfoBox;