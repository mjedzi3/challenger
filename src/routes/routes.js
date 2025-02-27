import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Main';
import Demo from '../pages/Demo';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
};

export default AppRoutes;