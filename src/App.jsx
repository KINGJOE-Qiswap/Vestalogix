import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Auth from './pages/auth';
import ShipperDashboard from './pages/shipperdashboard';
import CarrierDashboard from './pages/carrierdashboard';
import AdminDashboard from './pages/admindashboard';
import NewShipment from './pages/newshipment';
import TrackingShipment from './pages/trackingshipment';
import ShipmentDetail from './pages/shipmentdetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/shipper" element={<ShipperDashboard />} />
        <Route path="/carrier" element={<CarrierDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/new" element={<NewShipment />} />
        <Route path="/tracking" element={<TrackingShipment />} />
        <Route path="/shipment/:id" element={<ShipmentDetail />} />
      </Routes>
    </Router>
  );
}