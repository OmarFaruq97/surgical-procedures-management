import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Reports = () => {
  // Sample data for surgical procedures
  const procedureData = [
    { name: 'Cardiac', count: 45, revenue: 125000 },
    { name: 'Orthopedic', count: 78, revenue: 189000 },
    { name: 'Neurological', count: 32, revenue: 156000 },
    { name: 'General', count: 120, revenue: 240000 },
    { name: 'Plastic', count: 28, revenue: 98000 },
    { name: 'Ophthalmic', count: 65, revenue: 145000 }
  ];

  // Monthly statistics
  const monthlyStats = [
    { month: 'Jan', procedures: 85, revenue: 285000 },
    { month: 'Feb', procedures: 92, revenue: 312000 },
    { month: 'Mar', procedures: 78, revenue: 265000 },
    { month: 'Apr', procedures: 105, revenue: 345000 },
    { month: 'May', procedures: 120, revenue: 420000 },
    { month: 'Jun', procedures: 98, revenue: 335000 }
  ];

  // Success rates by procedure type
  const successRateData = [
    { name: 'Cardiac', value: 92 },
    { name: 'Orthopedic', value: 88 },
    { name: 'Neurological', value: 85 },
    { name: 'General', value: 95 },
    { name: 'Plastic', value: 90 },
    { name: 'Ophthalmic', value: 94 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  // Key metrics
  const metrics = [
    { title: 'Total Procedures', value: '458', change: '+12%', trend: 'up' },
    { title: 'Success Rate', value: '91.5%', change: '+2.3%', trend: 'up' },
    { title: 'Avg. Procedure Time', value: '2.8h', change: '-0.4h', trend: 'down' },
    { title: 'Revenue', value: '$1.76M', change: '+15%', trend: 'up' }
  ];

  return (
    <div className="p-8 ml-64">
      <h1 className="text-2xl font-bold mb-6">Surgical Reports & Analytics</h1>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-600 text-sm font-medium">{metric.title}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">{metric.value}</p>
            <div className={`flex items-center mt-2 ${
              metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className="text-sm">{metric.change}</span>
              <span className="ml-1">{metric.trend === 'up' ? '↑' : '↓'}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Procedures by Type */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Procedures by Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={procedureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" name="Number of Procedures" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Revenue Trend */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Monthly Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
              <Legend />
              <Bar dataKey="revenue" fill="#00C49F" name="Revenue ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Success Rates */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Success Rates by Procedure Type</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={successRateData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {successRateData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value}%`, 'Success Rate']} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Procedure Details Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Procedure Details</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Procedure Type</th>
                <th className="px-4 py-2 text-left">Count</th>
                <th className="px-4 py-2 text-left">Revenue</th>
                <th className="px-4 py-2 text-left">Avg. Time</th>
                <th className="px-4 py-2 text-left">Success Rate</th>
              </tr>
            </thead>
            <tbody>
              {procedureData.map((procedure, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 border">{procedure.name}</td>
                  <td className="px-4 py-2 border">{procedure.count}</td>
                  <td className="px-4 py-2 border">${procedure.revenue.toLocaleString()}</td>
                  <td className="px-4 py-2 border">{Math.random() * 3 + 1.5.toFixed(1)}h</td>
                  <td className="px-4 py-2 border">{successRateData[index].value}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;