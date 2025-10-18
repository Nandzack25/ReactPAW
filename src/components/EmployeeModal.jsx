import { useState, useEffect } from "react";

function EmployeeModal({ onClose, onSave, employee }) {
  const [form, setForm] = useState({ name: "", position: "", salary: "" });

  useEffect(() => {
    if (employee) setForm({ name: employee.name || "", position: employee.position || "", salary: employee.salary ? String(employee.salary) : "" });
    else setForm({ name: "", position: "", salary: "" });
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.position.trim()) return;
    const payload = { ...form, salary: form.salary ? Number(form.salary) : 0 };
    onSave(payload);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{employee ? "Edit Karyawan" : "Tambah Karyawan"}</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Nama</label>
            <input type="text" placeholder="Nama lengkap" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
          </div>

          <div>
            <label>Jabatan</label>
            <input type="text" placeholder="Posisi / jabatan" value={form.position} onChange={(e)=>setForm({...form,position:e.target.value})} />
          </div>

          <div>
            <label>Gaji (IDR)</label>
            <input type="number" placeholder="contoh: 12000000" value={form.salary} onChange={(e)=>setForm({...form,salary:e.target.value})} />
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn btn-ghost">Batal</button>
            <button type="submit" className="btn btn-primary">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeModal;
