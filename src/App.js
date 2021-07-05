import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./assets/css/dist/tailwind.css";
import Header from './SangNC/pages/Header';
import Footer from './SangNC/pages/Footer';
import Services from './SangNC/pages/Services';
import PriceServices from './SangNC/pages/PriceServices';
import MainServices from './SangNC/pages/MainServices';
import InfoServices from './SangNC/pages/InfoServices';
export default function App() {
  return (
    <section>
      <Header />
      <Services />
      <PriceServices />
      <MainServices />
      <InfoServices />
      <Footer />
    </section>
  );
}



