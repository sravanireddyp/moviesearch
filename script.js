const API_URL='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d9e2eda26ce9d82015a9827acd6e64c3&page=1'
const IMG_PATH='https://image.tmdb.org/t/p/w1280'
const SEARCH_API='https://api.themoviedb.org/3/search/movie?api_key=d9e2eda26ce9d82015a9827acd6e64c3&query='
const APIURL = 'https://api.github.com/users/'
//for selectors
 const main=document.getElementById('main');
 const form=document.getElementById('form');
 const Search=document.getElementById('Search');
//function to get all movies
getMovies(API_URL);
async function getMovies(url)
{
    const res=await fetch(url);
    const data=await res.json();
    showMovies(data.results)
}
function showMovies(movies)
{
main.innerHTML=``;
movies.forEach((movie) => {
    const {poster_path,title,vote_average,overview}=movie
    const movieEl=document.createElement('div');
    movieEl.classList.add('movie')
    movieEl.innerHTML=`<img src="${IMG_PATH+poster_path}"alt="">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate()}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            <p>${overview}</p>
        </div>`
        main.appendChild(movieEl)
    
});
}
function getClassByRate(vote)
{
    if(vote>=8)
    {
    return 'green'
    }
    else if(vote>=5)
    {
        return 'orange'
    }
    else
    {
    return 'red'
    }
}
form.addEventListener('submit',(e)=>
{
    e.preventDefault()
    const SearchTerm=Search.value 
    if(SearchTerm && SearchTerm!=='')
    {
        getMovies(SEARCH_API+SearchTerm)
    }
})