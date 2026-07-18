export default function SummaryCard({ title, value, icon, color = "primary" }) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <small className="text-muted">{title}</small>

            <h2 className="mt-2 fw-bold">{value}</h2>
          </div>

          <div
            className={`bg-${color} text-white rounded-circle d-flex justify-content-center align-items-center`}
            style={{
              width: 60,
              height: 60,
              fontSize: 28,
            }}
          >
            <i className={icon}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
