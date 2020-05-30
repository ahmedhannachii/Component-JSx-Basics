import React from 'react';
import './Main.css';
import Photo from './profile/ProfilPhoto';
import Name from './profile/FullName';
import Address from './profile/Address';



function Main() {
  return (
    <div className="Main">
    <Photo/>
    <Name/>
    <Address/>
    </div>
  );
}

export default Main;
