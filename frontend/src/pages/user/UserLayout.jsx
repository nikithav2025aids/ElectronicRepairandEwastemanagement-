import { NavLink, Outlet, useNavigate } from "react-router-dom";

function UserLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .user-layout { display: flex; min-height: 100vh; background: #f8fafc; font-family: Arial, sans-serif; }
        .sidebar { width: 250px; min-height: 100vh; background: #103f40; color: white; padding: 28px 18px; flex-shrink: 0; }
        .sidebar-brand { font-size: 23px; font-weight: 700; margin: 0 0 38px 10px; }
        .sidebar-heading { color: #a7c5c3; font-size: 12px; font-weight: 600; letter-spacing: 1px; margin: 0 0 14px 10px; }
        .sidebar-link { display: block; padding: 13px 14px; margin: 7px 0; border-radius: 8px; color: #d5e5e3; text-decoration: none; font-size: 15px; transition: 0.2s; }
        .sidebar-link:hover { background: #24595a; color: white; }
        .sidebar-link.active { background: #14b8a6; color: white; font-weight: 600; }
        .main-area { flex: 1; min-width: 0; }
        .topbar { height: 72px; padding: 0 35px; background: white; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e2e8f0; }
        .topbar-title { color: #334155; font-size: 16px; font-weight: 600; }
        .logout-btn { border: 0; border-radius: 7px; padding: 10px 18px; background: #0f766e; color: white; cursor: pointer; font-size: 14px; }
        .logout-btn:hover { background: #115e59; }
        .page-content { padding: 32px 35px; }
        @media (max-width: 700px) {
          .sidebar { width: 175px; padding: 22px 10px; }
          .sidebar-brand { font-size: 19px; margin-left: 5px; }
          .sidebar-link { font-size: 13px; padding: 11px 9px; }
          .topbar { padding: 0 14px; }
          .page-content { padding: 22px 14px; }
        }
      `}</style>

      <div className="user-layout">
        <aside className="sidebar">
          <h2 className="sidebar-brand">ReTechLoop</h2>
          <p className="sidebar-heading">MAIN MENU</p>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>Dashboard</NavLink>
          <NavLink to="/repairservice" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>Repair Service</NavLink>
          <NavLink to="/bookrepair" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>Book a Repair</NavLink>
          <NavLink to="/spareparts" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>Spare Parts</NavLink>
        </aside>

        <div className="main-area">
          <header className="topbar">
            <span className="topbar-title">Smart Electronics Repair Platform</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </header>
          <main className="page-content">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default UserLayout;
