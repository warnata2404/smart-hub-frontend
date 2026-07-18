import api from "../api/axios";

const EquipmentService = {
  /**
   * Get paginated equipment list.
   *
   * @param {number} page
   * @param {string} search
   * @returns {Promise}
   */
  getAll(page = 1, search = "") {
    const params = new URLSearchParams({
      page,
    });

    if (search.trim()) {
      params.append("search", search.trim());
    }

    return api.get(`/equipments?${params.toString()}`);
  },

  /**
   * Get equipment detail.
   *
   * @param {number|string} id
   * @returns {Promise}
   */
  getById(id) {
    return api.get(`/equipments/${id}`);
  },

  /**
   * Create equipment.
   *
   * @param {object} data
   * @returns {Promise}
   */
  create(data) {
    return api.post("/equipments", data);
  },

  /**
   * Update equipment.
   *
   * @param {number|string} id
   * @param {object} data
   * @returns {Promise}
   */
  update(id, data) {
    return api.put(`/equipments/${id}`, data);
  },

  /**
   * Delete equipment.
   *
   * @param {number|string} id
   * @returns {Promise}
   */
  delete(id) {
    return api.delete(`/equipments/${id}`);
  },
};

export default EquipmentService;
