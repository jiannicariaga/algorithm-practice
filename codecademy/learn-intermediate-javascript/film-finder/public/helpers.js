import { showRandomMovie } from './script';

const populateGenreDropdown = genres => {
  const select = document.getElementById('genres');
  for (const genre of genres) {
    const option = document.createElement('option');
    option.value = genre.id;
    option.text = genre.name;
    select.appendChild(option);
  }
};

const getSelectedGenre = () => {
  const selectedGenre = document.getElementById('genres').value;
  return selectedGenre;
};

const showBtns = () => {
  const btnDiv = document.getElementById('like-or-dislike-btns');
  btnDiv.removeAttribute('hidden');
};

const clearCurrentMovie = () => {
  const moviePosterDiv = document.getElementById('movie-poster');
  const movieTextDiv = document.getElementById('movie-text');
  moviePosterDiv.innerHTML = '';
  movieTextDiv.innerHTML = '';
};

const likeMovie = () => {
  clearCurrentMovie();
  showRandomMovie();
};

const dislikeMovie = () => {
  clearCurrentMovie();
  showRandomMovie();
};

const createMoviePoster = posterPath => {
  const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;
  const posterImg = document.createElement('img');
  posterImg.setAttribute('src', moviePosterUrl);
  posterImg.setAttribute('id', 'movie-poster');
  return posterImg;
};

const createMovieTitle = title => {
  const titleHeader = document.createElement('h1');
  titleHeader.setAttribute('id', 'movie-title');
  titleHeader.innerHTML = title;
  return titleHeader;
};

const createMovieOverview = overview => {
  const overviewParagraph = document.createElement('p');
  overviewParagraph.setAttribute('id', 'movie-overview');
  overviewParagraph.innerHTML = overview;
  return overviewParagraph;
};

const getRandomMovie = movies => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];
  return randomMovie;
};

const displayMovie = movieInfo => {
  const moviePosterDiv = document.getElementById('movie-poster');
  const movieTextDiv = document.getElementById('movie-text');
  const likeBtn = document.getElementById('like-btn');
  const dislikeBtn = document.getElementById('dislike-btn');
  const moviePoster = createMoviePoster(movieInfo.poster_path);
  const titleHeader = createMovieTitle(movieInfo.title);
  const overviewText = createMovieOverview(movieInfo.overview);
  moviePosterDiv.appendChild(moviePoster);
  movieTextDiv.appendChild(titleHeader);
  movieTextDiv.appendChild(overviewText);
  showBtns();
  likeBtn.onclick = likeMovie;
  dislikeBtn.onclick = dislikeMovie;
};

export {
  populateGenreDropdown,
  getSelectedGenre,
  clearCurrentMovie,
  getRandomMovie,
  displayMovie
};
