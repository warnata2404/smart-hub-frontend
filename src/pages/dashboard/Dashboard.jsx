import { useAuth } from "../../context/AuthContext";
import SummaryCard from "../../components/dashboard/SummaryCard";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <div className="mb-5">
        <h2 className="fw-bold">Dashboard</h2>

        <p className="text-muted mb-0">
          Welcome back,
          <strong> {user?.name}</strong>
        </p>
      </div>

      <div className="row g-4">
        <div className="col-lg-3 col-md-6">
          <SummaryCard
            title="Equipment"
            value="0"
            icon="bi bi-pc-display"
            color="primary"
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <SummaryCard
            title="Borrowing Schedule"
            value="0"
            icon="bi bi-calendar-week"
            color="success"
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <SummaryCard
            title="Bookings"
            value="0"
            icon="bi bi-journal-bookmark"
            color="warning"
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <SummaryCard
            title="Check-In"
            value="0"
            icon="bi bi-check2-square"
            color="danger"
          />
        </div>
      </div>

      <div className="card mt-5 border-0 shadow-sm">
        <div className="card-body">
          <h5 className="mb-4">Logged In User</h5>

          <table className="table table-bordered align-middle mb-0">
            <tbody>
              <tr>
                <th width="200">ID</th>
                <td>{user?.id}</td>
              </tr>

              <tr>
                <th>Name</th>
                <td>{user?.name}</td>
              </tr>

              <tr>
                <th>Email</th>
                <td>{user?.email}</td>
              </tr>

              <tr>
                <th>Role</th>
                <td>{user?.role}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
