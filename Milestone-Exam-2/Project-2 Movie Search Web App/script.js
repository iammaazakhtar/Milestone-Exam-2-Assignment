const input=document.getElementById('input')
const apiKey='33ee4b9b'
const movieList=document.querySelector('.movie-list')

const fetchMovieList=async(query)=>{
    const apiUrl=`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
    const res=await fetch(apiUrl)
    const data=await res.json()
    if(data.Response==='True'){
        movieList.innerHTML=''
        displayMovieResults(data.Search)
    } else{
        movieList.innerHTML='Not Found'
    }
}

fetchMovieList('avenger')

input.oninput=()=>{
    movieList.innerHTML=''
    fetchMovieList(input.value)
    if(input.value===''){
        fetchMovieList('avenger')
    }
}

const displayMovieResults=(search)=>{
    console.log(search)
    search.forEach(item => {
        const{Title,Poster}=item
        let card=document.createElement('div')
        card.innerHTML=`
        <img src=${Poster === 'N/A' ? '': Poster} alt=${Title}>
        <h4>${Title}</h4>
        <button>Watch Now</button>
        `
        card.classList.add('movie-card')
        movieList.appendChild(card)
    })
}