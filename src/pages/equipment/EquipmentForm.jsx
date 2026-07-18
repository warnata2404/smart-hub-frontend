export default function EquipmentForm({
  formData,
  errors = {},
  onChange,
  onSubmit,
  onCancel,
  submitText = "Save",
  submitting = false,
}) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <div className="row">
            {/* Equipment Code */}
            <div className="col-md-6 mb-3">
              <label htmlFor="code" className="form-label">
                Equipment Code <span className="text-danger">*</span>
              </label>

              <input
                id="code"
                type="text"
                name="code"
                value={formData.code}
                onChange={onChange}
                className={`form-control ${errors.code ? "is-invalid" : ""}`}
              />

              {errors.code && (
                <div className="invalid-feedback">{errors.code[0]}</div>
              )}
            </div>

            {/* Equipment Name */}
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">
                Equipment Name <span className="text-danger">*</span>
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />

              {errors.name && (
                <div className="invalid-feedback">{errors.name[0]}</div>
              )}
            </div>

            {/* Quantity */}
            <div className="col-md-6 mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity <span className="text-danger">*</span>
              </label>

              <input
                id="quantity"
                type="number"
                min="0"
                name="quantity"
                value={formData.quantity}
                onChange={onChange}
                className={`form-control ${
                  errors.quantity ? "is-invalid" : ""
                }`}
              />

              {errors.quantity && (
                <div className="invalid-feedback">{errors.quantity[0]}</div>
              )}
            </div>

            {/* Available Quantity */}
            <div className="col-md-6 mb-3">
              <label htmlFor="available_quantity" className="form-label">
                Available Quantity <span className="text-danger">*</span>
              </label>

              <input
                id="available_quantity"
                type="number"
                min="0"
                name="available_quantity"
                value={formData.available_quantity}
                onChange={onChange}
                className={`form-control ${
                  errors.available_quantity ? "is-invalid" : ""
                }`}
              />

              {errors.available_quantity && (
                <div className="invalid-feedback">
                  {errors.available_quantity[0]}
                </div>
              )}
            </div>

            {/* Condition */}
            <div className="col-md-6 mb-3">
              <label htmlFor="condition" className="form-label">
                Condition <span className="text-danger">*</span>
              </label>

              <select
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={onChange}
                className={`form-select ${
                  errors.condition ? "is-invalid" : ""
                }`}
              >
                <option value="">Select Condition</option>
                <option value="good">Good</option>
                <option value="damaged">Damaged</option>
                <option value="maintenance">Maintenance</option>
              </select>

              {errors.condition && (
                <div className="invalid-feedback">{errors.condition[0]}</div>
              )}
            </div>

            {/* Status */}
            <div className="col-md-6 mb-3">
              <label htmlFor="status" className="form-label">
                Status <span className="text-danger">*</span>
              </label>

              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={onChange}
                className={`form-select ${errors.status ? "is-invalid" : ""}`}
              >
                <option value="">Select Status</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>

              {errors.status && (
                <div className="invalid-feedback">{errors.status[0]}</div>
              )}
            </div>

            {/* Description */}
            <div className="col-12 mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>

              <textarea
                id="description"
                rows="4"
                name="description"
                value={formData.description}
                onChange={onChange}
                className={`form-control ${
                  errors.description ? "is-invalid" : ""
                }`}
              />

              {errors.description && (
                <div className="invalid-feedback">{errors.description[0]}</div>
              )}
            </div>
          </div>
        </div>

        <div className="card-footer bg-white text-end">
          <button
            type="button"
            className="btn btn-outline-secondary me-2"
            onClick={onCancel}
            disabled={submitting}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting}
          >
            {submitting ? "Saving..." : submitText}
          </button>
        </div>
      </div>
    </form>
  );
}
