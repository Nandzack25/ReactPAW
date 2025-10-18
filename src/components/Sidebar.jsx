function Sidebar({ mobileOpen, collapsed, onClose, active, onNavigate }) {
  const items = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'employees', label: 'Karyawan' },
    { key: 'settings', label: 'Pengaturan' },
  ];
  const cls = ['sidebar', mobileOpen ? 'mobile-open' : '', collapsed ? 'collapsed' : ''].filter(Boolean).join(' ');

  return (
    <aside className={cls}>
      <div className="brand">HR Dashboard</div>
      <nav>
        <ul>
          {items.map((it) => (
            <li key={it.key} onClick={() => onNavigate && onNavigate(it.key)} style={{fontWeight: active === it.key ? 600 : 400, background: active === it.key ? '#f8fafc' : 'transparent'}}>
              {it.label}
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer">v1.0.0</div>

      {mobileOpen && (
        <button onClick={onClose} style={{position:'absolute',top:10,right:10,background:'transparent',border:'none',fontSize:18}}>✕</button>
      )}
    </aside>
  );
}

export default Sidebar;
