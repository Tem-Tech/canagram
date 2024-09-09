import React from 'react';

const Heading: React.FC = () => {
  return (
    <div className="holder" id="holder">
  <div className="tile" id="tile-1">
    <p className="tile__letter">C</p>
    <p className="tile__value">3</p>
  </div>
  <div className="tile" id="tile-2">
    <p className="tile__letter">A</p>
    <p className="tile__value">1</p>
  </div>
  <div className="tile" id="tile-3">
    <p className="tile__letter">N</p>
    <p className="tile__value">1</p>
  </div>
  <div className="tile" id="tile-4">
    <p className="tile__letter">A</p>
    <p className="tile__value">1</p>
  </div>
  <div className="tile" id="tile-5">
    <p className="tile__letter">G</p>
    <p className="tile__value">2</p>
  </div>
  <div className="tile" id="tile-6">
    <p className="tile__letter">R</p>
    <p className="tile__value">1</p>
  </div>
    <div className="tile" id="tile-7">
    <p className="tile__letter">A</p>
    <p className="tile__value">1</p>
    </div>
  <div className="tile" id="tile-8">
    <p className="tile__letter">M</p>
    <p className="tile__value">3</p>
  </div>
  </div>

  );
};

export default Heading;
