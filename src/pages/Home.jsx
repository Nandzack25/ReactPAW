import EmployeeTable from "../components/EmployeeTable";

function Home({ employees = [], onEdit, onDelete, onAddClick }) {
  return (
    <div className="page-content">
      <header className="container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <h1 style={{fontSize: '28px', margin:0}}>Manajemen Karyawan</h1>
            <p style={{color:'#6b7280', marginTop:6}}>Kelola data karyawan, tambah, edit, dan hapus</p>
          </div>

          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <div className="stat">Total karyawan: <strong>{employees.length}</strong></div>
            <div className="stat">Total gaji: <strong>{employees.reduce((s,e)=>s+(Number(e.salary)||0),0).toLocaleString('id-ID')}</strong></div>
            <button onClick={onAddClick} className="btn btn-primary">+ Tambah Karyawan</button>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="card">
          <div className="card-title">Daftar Karyawan</div>
          <EmployeeTable
            employees={employees}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </section>
      </main>
    </div>
  );
}

export default Home;
