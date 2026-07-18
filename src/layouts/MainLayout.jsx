import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MainLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="d-flex vh-100">
      <aside className="bg-dark text-white p-3" style={{ width: "260px" }}>
        <h4 className="mb-4">Smart Hub</h4>

        <div className="nav flex-column">
          <NavLink to="/dashboard" className="nav-link text-white">
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </NavLink>

          <NavLink to="/equipments" className="nav-link text-white">
            <i className="bi bi-pc-display me-2"></i>
            Equipment
          </NavLink>

          <NavLink to="/borrowing-schedules" className="nav-link text-white">
            <i className="bi bi-calendar-week me-2"></i>
            Borrowing Schedule
          </NavLink>

          <NavLink to="/bookings" className="nav-link text-white">
            <i className="bi bi-journal-bookmark me-2"></i>
            Booking
          </NavLink>

          <NavLink to="/booking-items" className="nav-link text-white">
            <i className="bi bi-list-ul me-2"></i>
            Booking Item
          </NavLink>

          <NavLink to="/check-ins" className="nav-link text-white">
            <i className="bi bi-check2-square me-2"></i>
            Check-In
          </NavLink>
        </div>
      </aside>

      <div className="flex-grow-1 d-flex flex-column">
        <nav className="navbar navbar-light bg-white border-bottom">
          <div className="container-fluid">
            <span className="navbar-brand fw-bold">
              Smart Hub Management System
            </span>

            <div className="d-flex align-items-center">
              <span className="me-3">{user?.name}</span>

              <button
                className="btn btn-outline-danger btn-sm"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>

        <main className="p-4 flex-grow-1 bg-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
