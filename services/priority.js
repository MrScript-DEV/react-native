import { apiFetch } from "./api";

export const index = async () => {
  const result = await apiFetch("/priorities", "GET", null, true);
  return result;
};
