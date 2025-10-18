function Navbar({ openModal, onSearch }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{fontWeight:600}}>Manajemen Karyawan</div>
        </div>

        <div style={{flex:1,display:'flex',justifyContent:'center'}}>
          <input placeholder="Cari karyawan..." className="search-input" onChange={(e)=>onSearch && onSearch(e.target.value)} />
        </div>

        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{color:'#6b7280'}}>Hi, Admin</div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
