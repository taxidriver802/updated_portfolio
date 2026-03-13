import { fetchRepos } from './github';
import transformRepos from './transform';

export async function getProjects() {
  const repos = await fetchRepos('taxidriver802');
  return transformRepos(repos);
}
