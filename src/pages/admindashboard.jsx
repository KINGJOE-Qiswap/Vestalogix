function AdminDashboard() {
  const stats = [
    { label: "Total Shipments", value: "1,240" },
    { label: "In Transit", value: "320" },
    { label: "Delivered", value: "890" },
    { label: "Carriers", value: "45" },
  ];
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {stats.map(s => (
          <div key={s.label} className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">{s.label}</p>
            <p className="text-2xl font-bold mt-2">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold mb-4">Recent Shipments</h3>
        <table className="w-full text-left">
          <thead className="text-gray-500 border-b"><tr><th className="pb-2">ID</th><th>Route</th><th>Status</th></tr></thead>
          <tbody>
            <tr className="border-b"><td className="py-3">VES123</td><td>Lagos → Abuja</td><td><span className="bg-yellow-100 px-2 py-1 rounded text-sm">In Transit</span></td></tr>
            <tr><td className="py-3">VES124</td><td>PH → Lagos</td><td><span className="bg-green-100 px-2 py-1 rounded text-sm">Delivered</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AdminDashboard;