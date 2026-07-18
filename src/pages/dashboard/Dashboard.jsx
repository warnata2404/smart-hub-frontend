import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="container py-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="text-success">Dashboard</h2>

          <hr />

          <h5>Welcome, {user?.name}</h5>

          <table className="table mt-4">
            <tbody>
              <tr>
                <th width="180">ID</th>

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
    </div>
  );
}
