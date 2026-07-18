import { useCallback, useEffect, useState } from "react";
import EquipmentService from "../services/EquipmentService";

export default function useEquipments(initialPage = 1) {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [meta, setMeta] = useState(null);
  const [links, setLinks] = useState(null);

  const [page, setPage] = useState(initialPage);

  const [search, setSearch] = useState("");

  const fetchEquipments = useCallback(
    async (selectedPage = page, selectedSearch = search) => {
      setLoading(true);
      setError(null);

      try {
        const response = await EquipmentService.getAll(
          selectedPage,
          selectedSearch,
        );

        setEquipments(response.data.data);
        setMeta(response.data.meta);
        setLinks(response.data.links);
      } catch (err) {
        setError(
          err.response?.data?.message ?? "Failed to load equipment data.",
        );
      } finally {
        setLoading(false);
      }
    },
    [page, search],
  );

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchEquipments(page, search);
    }, 500);

    return () => clearTimeout(timer);
  }, [page, search, fetchEquipments]);

  const refresh = () => {
    fetchEquipments(page, search);
  };

  return {
    equipments,

    loading,

    error,

    meta,

    links,

    page,

    setPage,

    search,

    setSearch,

    refresh,
  };
}
