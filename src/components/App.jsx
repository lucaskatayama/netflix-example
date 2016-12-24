import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Billboard from './Billboard';
import Row from './Row';
import {titles, movie} from '../config'


export default () => (
  <div>
    <Header />
    <div className="content">
      <Billboard movie={movie}/>
      <Row header="Best horror movies" titles={titles}/>
      <Row header="bla" titles={titles}/>
      <Row header="bla" titles={titles}/>
      <Row header="bla" titles={titles}/>
    </div>
    <Footer />
  </div>
);
