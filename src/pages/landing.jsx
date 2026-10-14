import React from 'react';
import { Link } from 'react-router-dom';
export default function Landing(){
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-4">VestaLogix 🚚</h1>
      <p className="text-xl mb-8 text-slate-300">On-demand freight logistics for Africa</p>
      <div className="flex gap-4">
        <Link to="/auth" className="bg-blue-600 px-6 py-3 rounded-lg">Get Started</Link>
        <Link to="/tracking" className="bg-white text-black px-6 py-3 rounded-lg">Track Shipment</Link>
      </div>
    </div>
  )
}