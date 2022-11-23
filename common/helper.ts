export const getParticulatInfo = (info: any) => {
  return info?.map((repo: any) => ({
    created_at: repo?.created_at,
    homepage: repo?.homepage,
    html_url: repo?.html_url,
    id: repo?.id,
    topics: repo?.topics,
    name: repo?.name,
    description: repo?.description,
    language: repo?.language,
    updated_at: repo?.updated_at,
    url: repo?.url,
  }));
};
