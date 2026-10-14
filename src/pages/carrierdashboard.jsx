function CarrierDashboard() {
  const jobs = [
    { id: "VES123", from: "Lagos", to: "Abuja", pay: "₦15,000" },
    { id: "VES124", from: "Ibadan", to: "Lagos", pay: "₦8,000" },
    { id: "VES125", from: "Lagos", to: "PH", pay: "₦22,000" },
  ];
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8">Carrier Dashboard</h1>
      <div className="grid gap-4">
        {jobs.map(job => (
          <div key={job.id} className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
            <div>
              <p className="font-bold">{job.id} - {job.from} → {job.to}</p>
              <p className="text-gray-500 text-sm">Available for pickup</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-600">{job.pay}</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm">Accept Job</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CarrierDashboard;