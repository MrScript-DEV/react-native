import { apiFetch } from "./api";

export const create = async (subject, priority_id, message) => {
  const result = await apiFetch(
    "/tickets",
    "POST",
    {
      subject,
      priority_id,
      message,
    },
    true
  );

  return result;
};

export const index = async (status_id, priority_id) => {
  const query = new URLSearchParams();

  if (status_id) query.append("status_id", status_id);
  if (priority_id) query.append("priority_id", priority_id);

  const endpoint = `/tickets${query.toString() ? `?${query.toString()}` : ""}`;

  const result = await apiFetch(endpoint, "GET", null, true);
  return result;
};

export const show = async (id) => {
  const result = await apiFetch(`/tickets/${id}`, "GET", null, true);
  return result;
};

export const updateRating = async (id, rating) => {
  const result = await apiFetch(
    `/tickets/${id}/rating`,
    "PATCH",
    {
      rating: String(rating),
    },
    true
  );
  return result;
};
