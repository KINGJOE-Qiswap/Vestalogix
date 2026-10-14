
function ShipmentDetail() {
  const shipment = {
    id: "VES12345",
    sender: "John Doe",
    receiver: "Jane Smith",
    status: "In Transit",
    from: "Lagos",
    to: "Abuja",
    weight: "5kg"
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6">Shipment Details</h2>
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Tracking ID</span>
            <span className="font-semibold">{shipment.id}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Sender</span>
            <span>{shipment.sender}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Receiver</span>
            <span>{shipment.receiver}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Route</span>
            <span>{shipment.from} → {shipment.to}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">{shipment.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipmentDetail;