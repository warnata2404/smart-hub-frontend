import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EquipmentService from "../../services/EquipmentService";
import EquipmentForm from "./EquipmentForm";

export default function EquipmentEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [submitting, setSubmitting] = useState(false);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    code: "",
    name: "",
    description: "",
    quantity: 0,
    available_quantity: 0,
    condition: "",
    status: "",
  });

  useEffect(() => {
    loadEquipment();
  }, []);

  const loadEquipment = async () => {
    try {
      const response = await EquipmentService.getById(id);

      const equipment = response.data.data;

      setFormData({
        code: equipment.code,
        name: equipment.name,
        description: equipment.description ?? "",
        quantity: equipment.quantity,
        available_quantity: equipment.available_quantity,
        condition: equipment.condition,
        status: equipment.status,
      });
    } catch (error) {
      alert(error.response?.data?.message ?? "Failed to load equipment.");

      navigate("/equipments");
    } finally {
      setLoading(false);
    }
  };

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
      await EquipmentService.update(id, formData);

      navigate("/equipments");
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors ?? {});
      } else {
        alert(error.response?.data?.message ?? "Failed to update equipment.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/equipments");
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <p className="mt-3 mb-0">Loading equipment...</p>
      </div>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Edit Equipment</h2>

          <p className="text-muted mb-0">Update equipment information.</p>
        </div>
      </div>

      <EquipmentForm
        formData={formData}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitText="Update Equipment"
        submitting={submitting}
      />
    </>
  );
}
