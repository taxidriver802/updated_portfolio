export async function fetchRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch GitHub repos');
  }

  const data = await res.json();

  return data
    .filter((repo: any) => !repo.fork && !repo.archived)
    .sort(
      (a: any, b: any) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
}
