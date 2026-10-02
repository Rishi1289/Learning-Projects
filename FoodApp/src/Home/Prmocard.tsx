import React from 'react';

const Prmocard = (props) => {
  return (
    <div
      className="Prmcard"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="Prmcard-overlay" />
      <div className="Prmcard-content">
        <h2 className="Prmcard-offer">{props.user}</h2>
      </div>
    </div>
  );
};

export default Prmocard;