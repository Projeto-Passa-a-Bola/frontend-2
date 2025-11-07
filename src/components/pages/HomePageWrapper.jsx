// src/components/HomePageWrapper.jsx

import React from 'react';
import { Inicio, HomeLogada } from './';

function HomePageWrapper() {
  const token = localStorage.getItem('authToken');

  if (token) {
    return <HomeLogada />;
  } else {
    return <Inicio />;
  }
}

export default HomePageWrapper;