import React from 'react';
import './Title.css';

const Title = () => {
  return (
    <div className="container">
      <div className="text-wrapper">
        <div className="text text-R">R</div>
        <div className="text text-e">e</div>
        <div className="text text-a">a</div>
        <div className="text text-c">c</div>
        <div className="text text-t">t</div>
        <div className="text text-space"> </div>
        <div className="text text-C">C</div>
        <div className="text text-S">S</div>
        <div className="text text-S2">S</div>
        <div className="text text-space"> </div>
        <div className="text text-S3">S</div>
        <div className="text text-h">h</div>
        <div className="text text-o">o</div>
        <div className="text text-w">w</div>
        <div className="text text-c2">c</div>
        <div className="text text-a2">a</div>
        <div className="text text-s">s</div>
        <div className="text text-e2">e</div>
      </div>
      <div className="explanation">
        <p>Press the <span className="eye-icon">Eye</span> icon to view the code for each section.</p>
      </div>
    </div>
  );
};

export default Title;