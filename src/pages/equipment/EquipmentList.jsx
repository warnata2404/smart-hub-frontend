import { Link } from "react-router-dom";
import Pagination from "../../components/common/Pagination";
import useEquipments from "../../hooks/useEquipments";

export default function EquipmentList() {
  const {
    equipments,
    loading,
    error,
    refresh,
    meta,
    page,
    setPage,
    search,
    setSearch,
  } = useEquipments();

  const handleRefresh = () => {
    setSearch("");
    setPage(1);
    refresh();
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Equipment</h2>

          <p className="text-muted mb-0">
            Manage all equipment within the Smart Hub Management System.
          </p>
        </div>

        <Link to="/equipments/create" className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>
          Add Equipment
        </Link>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <div className="row mb-4">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search by code, name, condition, or status..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-md-6 text-md-end mt-3 mt-md-0">
              <button
                className="btn btn-outline-secondary"
                onClick={handleRefresh}
              >
                <i className="bi bi-arrow-clockwise me-2"></i>
                Refresh
              </button>
            </div>
          </div>

          {loading && (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>

              <p className="mt-3 mb-0">Loading equipment data...</p>
            </div>
          )}

          {!loading && error && (
            <div className="alert alert-danger">{error}</div>
          )}

          {!loading && !error && (
            <>
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Code</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Available</th>
                      <th>Condition</th>
                      <th>Status</th>
                      <th width="150">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {equipments.length === 0 ? (
                      <tr>
                        <td colSpan="8" className="text-center py-5 text-muted">
                          No equipment data available.
                        </td>
                      </tr>
                    ) : (
                      equipments.map((equipment) => (
                        <tr key={equipment.id}>
                          <td>{equipment.id}</td>
                          <td>{equipment.code}</td>
                          <td>{equipment.name}</td>
                          <td>{equipment.quantity}</td>
                          <td>{equipment.available_quantity}</td>
                          <td>{equipment.condition}</td>
                          <td>{equipment.status}</td>

                          <td>
                            <Link
                              to={`/equipments/${equipment.id}/edit`}
                              className="btn btn-sm btn-outline-primary me-2"
                            >
                              Edit
                            </Link>

                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              <Pagination
                currentPage={page}
                lastPage={meta?.last_page ?? 1}
                onPageChange={setPage}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
