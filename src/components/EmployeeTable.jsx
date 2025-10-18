function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <div className="table-wrap">
      <div className="card">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px',borderBottom:'1px solid var(--border)'}}>
          <div style={{color:'var(--muted)',fontSize:13}}>Tabel karyawan</div>
          <div style={{color:'#9ca3af',fontSize:13}}>{employees.length} entries</div>
        </div>

        {employees.length > 0 ? (
          <table>
            <thead>
              <tr>
                  <th>Nama</th>
                  <th>Jabatan</th>
                  <th>Gaji</th>
                  <th style={{textAlign:'right'}}>Aksi</th>
                </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                    <td>{emp.name}</td>
                    <td>{emp.position}</td>
                    <td>{emp.salary ? emp.salary.toLocaleString('id-ID') : '-'}</td>
                    <td style={{textAlign:'right'}} className="actions">
                      <button onClick={() => onEdit(emp)}>Edit</button>
                      <button onClick={() => onDelete(emp.id)} style={{color:'#dc2626'}}>Hapus</button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="empty-state">Belum ada data karyawan</div>
        )}
      </div>
    </div>
  );
}

export default EmployeeTable;
