import axios from "axios";

export const getTrendingRepos = () =>
  axios
    .get(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories"
    )
    .then(response => response.data.items);

export const getUser = (id) => 
    axios.get(`https://api.github.com/users/${id}`)