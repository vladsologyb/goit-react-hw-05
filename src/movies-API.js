import axios from "axios";

const API_KEY = "e5f6e5b1ff021bf1b835aeca0df3a2d1"
const ACCESS_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWY2ZTViMWZmMDIxYmYxYjgzNWFlY2EwZGYzYTJkMSIsInN1YiI6IjY2NWExY2VjM2UzMjJkNmUwNzhlNGJlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SMHUqYh55-O84SlkAijNrVYYE8BfK3xt_64i3ZPSf2E"
axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`

const options = {
    params: {
             page: 1,
             include_adult: false,
            api_key: API_KEY,
        language: 'en-US'    
    },
    
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    };
   
   

export const getMovies = async () => {
    const response = await axios.get("/3/trending/movie/week", options)
    console.log(response.data.results)
    return response.data.results
}
export const getMovieById = async(movieId)=>{
    const resp = await axios.get(`/3/movie/${movieId}?language=en-US`);
    return resp.data
}
export const getMovieCredits = async(movieId)=>{
    const resp = await axios.get(`/3/movie/${movieId}/credits?language=en-US`);
    return resp.data
}

export const getMovieReview = async(movieId) =>{
    const resp = await axios.get(`/3/movie/${movieId}/reviews?language=en-US&page=1`);
    return resp.data
}
export const getMoviesByQuery = async(query) =>{
    const resp = await axios.get(`/3/search/movie?include_adult=false&language=en-US&`,
    {params: {
        query,
    }}
    );
    return resp.data
}