import { useState } from "react";

const ProceduresTable = ({ procedures, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Filter logic (bonus)
  const filteredProcedures = procedures.filter(
    (proc) =>
      (proc.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proc.surgeryType.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterType === "all" || proc.surgeryType === filterType)
  );

  const surgeryTypes = ["Appendectomy", "Bypass", "Cataract"]; // For filter dropdown

  return (
    <div className="mt-8">
      {/* Search/Filter (bonus) */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by Patient Name or Surgery Type"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded w-64"
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="all">All Types</option>
          {surgeryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Patient Name</th>
            <th className="py-2 px-4 border">Surgery Type</th>
            <th className="py-2 px-4 border">Surgeon Name</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProcedures.map((proc) => (
            <tr key={proc.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border">{proc.id}</td>
              <td className="py-2 px-4 border">{proc.patientName}</td>
              <td className="py-2 px-4 border">{proc.surgeryType}</td>
              <td className="py-2 px-4 border">{proc.surgeonName}</td>
              <td className="py-2 px-4 border">{proc.date}</td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => onEdit(proc)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(proc.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProceduresTable;
