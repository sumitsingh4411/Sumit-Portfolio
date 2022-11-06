import { PROJECTS_URLS } from "../components/projects/constant";

export function getProjectUrl(id: any) {
  let temp_data = PROJECTS_URLS?.filter((item) => item?.id === id);
  if (temp_data) {
    return temp_data[0]?.url;
  }
  return [];
}
