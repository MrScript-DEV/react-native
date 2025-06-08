import { apiFetch } from "./api";

export const create = async (ticket_id, message) => {
  const result = await apiFetch(
    "/messages",
    "POST",
    {
      ticket_id,
      message,
    },
    true
  );

  return result;
};
