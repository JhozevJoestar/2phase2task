import { Octokit, App } from "https://cdn.skypack.dev/octokit";

// Меня заблокировал CORS поэтому мне пришлось идти окольными путями

const octokit = new Octokit({
    auth: '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'
    
  })

gitHubForm.addEventListener("submit", (e) => {
  e.preventDefault();
  octokit.request('GET /search/repositories?q=tetris+in:description&per_page=1', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  .then((data) => {
    for (let i in data) {
    }
    console.log(data.data)
})
})
