import React from 'react';
import {
  Navbar,
  Header,
  Featured,
  PropertyList,
  FeaturedPropertiesList,
  MailList,
  Footer
} from '../../components';

import './Home.scss';


export const Home = ({ className }) => {
 
  return (
    <div className={`Home ${className !== undefined ? className : ''}`}>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedPropertiesList />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
