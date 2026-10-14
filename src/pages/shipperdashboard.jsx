import { useState } from "react";

function ShipperDashboard() {
  const [shipments] = useState([
    { id: "VES123", dest: "Abuja", status: "In Transit" },
    { id: "VES124", dest: "Lagos", status: "Delivered" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Shipments</h1>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">+ New Shipment</button>
      </div>
      <div className="grid gap-4">
        {shipments.map(s => (
          <div key={s.id} className="bg-white p-5 rounded-xl shadow flex justify-between">
            <div>
              <p className="font-bold">{s.id}</p>
              <p className="text-gray-500 text-sm">To {s.dest}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm h-fit ${s.status === 'Delivered'? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{s.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ShipperDashboard;