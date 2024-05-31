import  axios  from "axios";

const API_KEY = "TiX6_SucpFpj3g4kTAJkSz-JJMEsg5hV3VUf7B5f1s0"
axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchArticles = async (query, currentPage) => {
    const response = await axios.get("/search/photos?",{
        params: {
            query: query, 
            client_id: API_KEY,
            page: currentPage,
            per_page: 12,
           orientation: 'landscape'
        }
    })
   
    return {
        result: response.data.results,
        total: response.data.total
    }
}