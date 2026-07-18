import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
