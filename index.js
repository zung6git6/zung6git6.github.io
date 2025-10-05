$(document).ready(function () {
  const username = "zung6git6";
  const apiUrl = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`;

  $.getJSON(apiUrl, function (data) {
    const projects = data
      .filter(repo => !repo.fork || repo.forks_count > 0)
      .map(repo => `
        <div class="repo">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          <div class="desc">${repo.description || "No availbale description."}</div>
        </div>
      `)
      .join("");

    $("#projects").html(projects || "No available repository.");
  }).fail(function () {
    $("#projects").html("Failed to charge the repositories.");
  });
});