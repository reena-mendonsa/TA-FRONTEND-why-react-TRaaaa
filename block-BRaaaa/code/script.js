let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector('.movies_list');

let allMovies = [];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    createMovieUI();
    event.target.value = '';
  }
});
function deleteItems(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createMovieUI();
}
function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createMovieUI();
}
function createMovieUI() {
  rootElm.innerText = '';
  allMovies.forEach((movie, i) => {
    let li = document.createElement('li');
    let label = document.createElement('label');
    label.innerText = movie.name;
    let button = document.createElement('button');
    button.innerText = movie.watched ? 'Watched' : 'To Watch';
    button.style.fontSize ="18px";
    button.style.marginLeft= "2rem";

    button.id = i;
    button.addEventListener('click', handleChange);
    li.append(label, button);
    rootElm.append(li);
    input.innerHTML = '';
  });
}
createMovieUI();