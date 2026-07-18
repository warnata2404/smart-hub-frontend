export default function EquipmentList() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Equipment</h2>

          <p className="text-muted mb-0">
            Manage all equipment within the Smart Hub Management System.
          </p>
        </div>

        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>
          Add Equipment
        </button>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <div className="row mb-4">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search equipment..."
              />
            </div>

            <div className="col-md-6 text-md-end mt-3 mt-md-0">
              <button className="btn btn-outline-secondary">
                <i className="bi bi-arrow-clockwise me-2"></i>
                Refresh
              </button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>ID</th>

                  <th>Name</th>

                  <th>Category</th>

                  <th>Status</th>

                  <th>Location</th>

                  <th width="160">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan="6" className="text-center py-5 text-muted">
                    No equipment data available.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
