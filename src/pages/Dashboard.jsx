import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState("monthly");

  // Sample data for dashboard
  const surgicalStats = {
    totalProcedures: 458,
    successRate: 91.5,
    avgProcedureTime: 2.8,
    revenue: 1760000,
    pendingProcedures: 23,
    completedToday: 18,
  };

  const monthlyData = [
    { month: "Jan", procedures: 85, revenue: 285000, complications: 5 },
    { month: "Feb", procedures: 92, revenue: 312000, complications: 3 },
    { month: "Mar", procedures: 78, revenue: 265000, complications: 7 },
    { month: "Apr", procedures: 105, revenue: 345000, complications: 4 },
    { month: "May", procedures: 120, revenue: 420000, complications: 6 },
    { month: "Jun", procedures: 98, revenue: 335000, complications: 2 },
    { month: "Dec", procedures: 95, revenue: 332000, complications: 1 },
  ];

  const procedureTypes = [
    { name: "Cardiac", count: 45, color: "#0088FE" },
    { name: "Orthopedic", count: 78, color: "#00C49F" },
    { name: "Neurological", count: 32, color: "#FFBB28" },
    { name: "General", count: 120, color: "#FF8042" },
    { name: "Plastic", count: 28, color: "#8884D8" },
    { name: "Ophthalmic", count: 65, color: "#82CA9D" },
  ];

  const upcomingProcedures = [
    {
      id: 1,
      patient: "John Doe",
      procedure: "Knee Replacement",
      time: "09:00 AM",
      status: "Scheduled",
    },
    {
      id: 2,
      patient: "Jane Smith",
      procedure: "Cataract Surgery",
      time: "10:30 AM",
      status: "Pre-op",
    },
    {
      id: 3,
      patient: "Mike Johnson",
      procedure: "Appendectomy",
      time: "01:15 PM",
      status: "Scheduled",
    },
    {
      id: 4,
      patient: "Sarah Wilson",
      procedure: "Hip Replacement",
      time: "03:00 PM",
      status: "Pre-op",
    },
    {
      id: 5,
      patient: "Iqram",
      procedure: "Brain Replacement",
      time: "25:62 PM",
      status: "Scheduled",
    },
  ];

  const quickStats = [
    { title: "OR Utilization", value: "78%", trend: "+5%", positive: true },
    {
      title: "Patient Satisfaction",
      value: "94%",
      trend: "+2%",
      positive: true,
    },
    { title: "Avg. Wait Time", value: "32min", trend: "-8min", positive: true },
    {
      title: "Staff Availability",
      value: "92%",
      trend: "-3%",
      positive: false,
    },
  ];

  return (
    <div className="p-8 ml-64 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          সার্জিক্যাল ড্যাশবোর্ড
        </h1>
        <p className="text-gray-600">
          সার্জিক্যাল প্রসিডিউর ম্যানেজমেন্ট সিস্টেমে স্বাগতম
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
          <div className="text-2xl font-bold text-gray-800">
            {surgicalStats.totalProcedures}
          </div>
          <div className="text-sm text-gray-600">মোট প্রসিডিউর</div>
          <div className="text-xs text-green-600 mt-1">+12% এই মাসে</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
          <div className="text-2xl font-bold text-gray-800">
            {surgicalStats.successRate}%
          </div>
          <div className="text-sm text-gray-600">সাফল্যের হার</div>
          <div className="text-xs text-green-600 mt-1">+2.3% গত মাস থেকে</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
          <div className="text-2xl font-bold text-gray-800">
            {surgicalStats.avgProcedureTime}h
          </div>
          <div className="text-sm text-gray-600">গড় প্রসিডিউর সময়</div>
          <div className="text-xs text-green-600 mt-1">-0.4h উন্নতি</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
          <div className="text-2xl font-bold text-gray-800">
            ${(surgicalStats.revenue / 1000000).toFixed(1)}M
          </div>
          <div className="text-sm text-gray-600">রেভেনিউ</div>
          <div className="text-xs text-green-600 mt-1">+15% YTD</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
          <div className="text-2xl font-bold text-gray-800">
            {surgicalStats.pendingProcedures}
          </div>
          <div className="text-sm text-gray-600">বিচারাধীন প্রসিডিউর</div>
          <div className="text-xs text-gray-600 mt-1">এই সপ্তাহে নির্ধারিত</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
          <div className="text-2xl font-bold text-gray-800">
            {surgicalStats.completedToday}
          </div>
          <div className="text-sm text-gray-600">আজ সম্পন্ন</div>
          <div className="text-xs text-gray-600 mt-1">এখন পর্যন্ত</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue Trend Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">রেভেনিউ ট্রেন্ড</h3>
            <select
              className="text-sm border rounded px-3 py-1"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="weekly">সাপ্তাহিক</option>
              <option value="monthly">মাসিক</option>
              <option value="quarterly">ত্রৈমাসিক</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                formatter={(value) => [`$${value.toLocaleString()}`, "রেভেনিউ"]}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Procedure Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">প্রসিডিউর বন্টন</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={procedureTypes}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="count"
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
              >
                {procedureTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [value, "প্রসিডিউর"]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Procedures */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">আজকের সময়সূচী</h3>
          <div className="space-y-3">
            {upcomingProcedures.map((procedure) => (
              <div
                key={procedure.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div>
                  <div className="font-medium">{procedure.patient}</div>
                  <div className="text-sm text-gray-600">
                    {procedure.procedure}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{procedure.time}</div>
                  <div
                    className={`text-xs px-2 py-1 rounded-full ${
                      procedure.status === "Scheduled"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {procedure.status === "Scheduled" ? "নির্ধারিত" : "প্রি-অপ"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">পারফরম্যান্স মেট্রিক্স</h3>
          <div className="grid grid-cols-1 gap-4">
            {quickStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700">
                  {(stat.title === "OR Utilization" && "OR ব্যবহার") ||
                    (stat.title === "Patient Satisfaction" &&
                      "রোগী সন্তুষ্টি") ||
                    (stat.title === "Avg. Wait Time" && "গড় অপেক্ষার সময়") ||
                    (stat.title === "Staff Availability" && "স্টাফ প্রাপ্যতা")}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{stat.value}</span>
                  <span
                    className={`text-xs ${
                      stat.positive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
