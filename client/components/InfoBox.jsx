import React from 'react';

const InfoBox = (props) => {
  
  if (props.item === null) {
    return (
      <div className="browsingCarouselItemBox"></div>
    );
  } else {
    return (
      <div className="browsingCarouselItemBox">
        <img className="browsingCarouselPics" onClick={() => props.setGlobal(event, props.item.ProductId)} src={props.item.Photo}></img>
      </div>
    );
  }
};

export default InfoBox;