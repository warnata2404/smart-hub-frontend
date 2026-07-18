import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EquipmentService from "../../services/EquipmentService";
import EquipmentForm from "./EquipmentForm";

export default function EquipmentCreate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    code: "",
    name: "",
    description: "",
    quantity: 0,
    available_quantity: 0,
    condition: "",
    status: "",
  });

  const [errors, setErrors] = useState({});

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);

    setErrors({});

    try {
      await EquipmentService.create(formData);

      navigate("/equipments");
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors ?? {});
      } else {
        alert(error.response?.data?.message ?? "Failed to create equipment.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/equipments");
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Add Equipment</h2>

          <p className="text-muted mb-0">
            Create a new equipment record for the Smart Hub Management System.
          </p>
        </div>
      </div>

      <EquipmentForm
        formData={formData}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitText="Save Equipment"
        submitting={submitting}
      />
    </>
  );
}
