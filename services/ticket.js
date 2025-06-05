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
