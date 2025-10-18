import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import EmployeeModal from "./components/EmployeeModal";

function App() {
  // sidebar removed per request
  const [employees, setEmployees] = useState([
    { id: 1, name: "Nanda Zacky", position: "Backend Developer", salary: 12000000 },
    { id: 2, name: "Rina Kusuma", position: "UI Designer", salary: 9000000 },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState("employees");

  const addOrUpdateEmployee = (data) => {
    if (editEmployee) {
      setEmployees((prev) =>
        prev.map((e) => (e.id === editEmployee.id ? { ...data, id: e.id } : e))
      );
    } else {
      setEmployees((prev) => [...prev, { ...data, id: Date.now() }]);
    }
    setIsModalOpen(false);
    setEditEmployee(null);
  };

  const handleDelete = (id) => {
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  };

  const handleEdit = (emp) => {
    setEditEmployee(emp);
    setIsModalOpen(true);
  };

  const filtered = employees.filter((e) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      e.name.toLowerCase().includes(q) || e.position.toLowerCase().includes(q)
    );
  });

  return (
    <div className="app">
      <main className="main-content" style={{width:'100%'}}>
        <Navbar
          // sidebar removed; keep search and modal handlers
          openModal={() => {
            setEditEmployee(null);
            setIsModalOpen(true);
          }}
          onSearch={(v) => setSearch(v)}
        />

        <div className="container">
          <Home
            employees={filtered}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onAddClick={() => {
              setEditEmployee(null);
              setIsModalOpen(true);
            }}
          />
        </div>
      </main>

      {isModalOpen && (
        <EmployeeModal
          onClose={() => {
            setIsModalOpen(false);
            setEditEmployee(null);
          }}
          onSave={addOrUpdateEmployee}
          employee={editEmployee}
        />
      )}
    </div>
  );
}

export default App;
