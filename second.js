const descriptionForm = document.getElementById("descriptionForm");
let ul = document.getElementById("userRepos");

descriptionForm.addEventListener("submit", (e) => {

  e.preventDefault();
  let descriptionInput = document.getElementById("descriptionInput");

  let githubDescription = descriptionInput.value;

  if(githubDescription.length < 2){
    let li = document.createElement("li");
        li.classList.add("li_error");
        li.innerHTML = `
                      Строка не может быть короче 2 букв`;
        ul.appendChild(li);
  } else {
  getDescription(githubDescription)
    .then((response) => response.json())
    .then((data) => {
      ul.innerHTML = null;
      if (data.items.length === 0 ) {
        let li = document.createElement("li");
        li.classList.add("li_error");
        li.innerHTML = `
                      Репозиториев с таким описанем нет`;
        ul.appendChild(li);
      } else {
      for (let i in data.items) {
        console.log(data)
          let ul = document.getElementById("userRepos");
          let li = document.createElement("li");
          li.classList.add("li_container");
          li.innerHTML = `
                        <a target="_blank" rel="noopener noreferrer" href=${data.items[i].html_url}><strong>Название: ${data.items[i].name}</strong></a>
                        <div class="li_login"><strong>Создатель: ${data.items[i].owner.login}</strong></div>
                        <div class="li_id"><strong>ID:${data.items[i].id}</strong></div>
                    `;

          ul.appendChild(li);
        }
      }
    })
  }
});

function getDescription(description) {
  return Promise.resolve(
    fetch(
      `https://api.github.com/search/repositories?q=${description}+in:description&per_page=10`
    )
  );
}
