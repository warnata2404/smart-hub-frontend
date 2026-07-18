import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container py-5">
        <div className="text-center">
          <h1 className="display-4 fw-bold text-primary">
            Smart Hub Management System
          </h1>

          <p className="lead mt-3">
            Frontend React + Vite berhasil dikonfigurasi.
          </p>

          <hr />

          <span className="badge bg-success fs-6">FE-1 Batch 1 Completed</span>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
