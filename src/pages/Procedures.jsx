import { useState } from "react";
import { initialProcedures } from "../data/dummyData";
import ProceduresTable from "../components/Table/ProceduresTable";
import SurgeryForm from "../components/Form/SurgeryForm";
import SurgeryModal from "../components/Form/SurgeryModal";

const Procedures = () => {
  const [procedures, setProcedures] = useState(initialProcedures);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProcedure, setEditingProcedure] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const handleAdd = () => {
    setEditingProcedure(null);
    setModalOpen(true);
  };

  const handleEdit = (proc) => {
    setEditingProcedure(proc);
    setModalOpen(true);
  };

  const handleSave = (data) => {
    if (editingProcedure) {
      // Update
      setProcedures(
        procedures.map((p) =>
          p.id === editingProcedure.id ? { ...p, ...data } : p
        )
      );
    } else {
      // Add new (generate ID)
      const newProc = { id: Date.now(), ...data };
      setProcedures([...procedures, newProc]);
    }
    setModalOpen(false);
    setEditingProcedure(null);
  };

  const handleDelete = (id) => {
    if (deleteConfirmId === id) {
      setProcedures(procedures.filter((p) => p.id !== id));
      setDeleteConfirmId(null);
    } else {
      setDeleteConfirmId(id); // Show confirm
    }
  };

  return (
    <div className="p-8 ml-64">
      {" "}
      {/* ml-64 for sidebar offset */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Surgical Procedures</h1>
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Procedure
        </button>
      </div>
      <ProceduresTable
        procedures={procedures}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {/* Edit/Add Modal */}
      <SurgeryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingProcedure ? "Edit Procedure" : "Add Procedure"}
      >
        <SurgeryForm
          procedure={editingProcedure}
          onSave={handleSave}
          onCancel={() => setModalOpen(false)}
        />
      </SurgeryModal>
      {/* Delete Confirm (simple alert-style, or use another modal) */}
      {deleteConfirmId && (
        <SurgeryModal
          isOpen={!!deleteConfirmId}
          onClose={() => setDeleteConfirmId(null)}
          title="Confirm Delete"
        >
          <p>Are you sure you want to delete this procedure?</p>
          <div className="flex gap-4">
            <button
              onClick={() => handleDelete(deleteConfirmId)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => setDeleteConfirmId(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </SurgeryModal>
      )}
    </div>
  );
};

export default Procedures;
