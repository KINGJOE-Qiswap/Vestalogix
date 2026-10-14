import { useState } from "react";

function NewShipment() {
  const [formData, setFormData] = useState({
    receiverName: "",
    address: "",
    weight: "",
    type: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Shipment Created! - " + JSON.stringify(formData));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6">Create New Shipment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="receiverName"
            onChange={handleChange}
            placeholder="Receiver Full Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            name="address"
            onChange={handleChange}
            placeholder="Delivery Address"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              name="weight"
              onChange={handleChange}
              placeholder="Weight (kg)"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <select
              name="type"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="">Select Type</option>
              <option value="Document">Document</option>
              <option value="Parcel">Parcel</option>
              <option value="Fragile">Fragile</option>
            </select>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold">
            Create Shipment
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewShipment