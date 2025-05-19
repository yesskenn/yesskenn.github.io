const fetch = require("node-fetch");

module.exports = async function () {
  const username = "YOUR_GITHUB_USERNAME"; // ← change this!
  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);

  if (!response.ok) {
    console.error("GitHub API error:", response.statusText);
    return [];
  }

  const data = await response.json();

  // Optionally filter or sort the repos
  return data
    .filter(repo => !repo.fork) // skip forks
    .map(repo => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
      updated: repo.updated_at
    }))
    .sort((a, b) => new Date(b.updated) - new Date(a.updated)); // newest first
};
