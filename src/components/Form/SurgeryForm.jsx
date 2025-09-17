import { useState } from "react";

const SurgeryForm = ({ procedure, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    procedure || { patientName: "", surgeryType: "", surgeonName: "", date: "" }
  );
  const [errors, setErrors] = useState({}); // Validation bonus

  const surgeryTypes = ["Appendectomy", "Bypass", "Cataract"];

  const validate = () => {
    const newErrors = {};
    if (!formData.patientName.trim()) newErrors.patientName = "Required";
    if (!formData.surgeryType) newErrors.surgeryType = "Required";
    if (!formData.surgeonName.trim()) newErrors.surgeonName = "Required";
    if (!formData.date) newErrors.date = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Patient Name</label>
        <input
          type="text"
          value={formData.patientName}
          onChange={(e) =>
            setFormData({ ...formData, patientName: e.target.value })
          }
          className="w-full px-3 py-2 border rounded"
        />
        {errors.patientName && (
          <p className="text-red-500 text-sm">{errors.patientName}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Surgery Type</label>
        <select
          value={formData.surgeryType}
          onChange={(e) =>
            setFormData({ ...formData, surgeryType: e.target.value })
          }
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Select Type</option>
          {surgeryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.surgeryType && (
          <p className="text-red-500 text-sm">{errors.surgeryType}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Surgeon Name</label>
        <input
          type="text"
          value={formData.surgeonName}
          onChange={(e) =>
            setFormData({ ...formData, surgeonName: e.target.value })
          }
          className="w-full px-3 py-2 border rounded"
        />
        {errors.surgeonName && (
          <p className="text-red-500 text-sm">{errors.surgeonName}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Date</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default SurgeryForm;
