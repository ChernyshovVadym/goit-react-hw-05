import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTI3ZTA4OGIzMzc2ZDAwYjI5OTQxODhjYmMxZWVmMSIsInN1YiI6IjY2MWI2ZDgyZGJhZDUwMDE3YjQzMmFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QBK242kfXGTxNUhG31W0d9eYN0Dr9hcO-pzAnjl5ncc",
  },
};

export const fetchTrendingMovies = async (page) => {
  const { data } = await axios.get(
    `/3/trending/movie/day?language=en-US&page=${page}`,
    options
  );

  return data;
};

export const fetchSearchMovie = async (query, page) => {
  const { data } = await axios.get(
    `/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,

    options
  );

  return data;
};

// export const fetchSearchId = async (id) => {
//   const { data } = await axios.get(`/3/movie/${id}?language=en-US`, options);

//   return data;
// };
export const fetchSearchId = async (id) => {
  const url = `/3/movie/${id}?language=en-US`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchCastById = async (id) => {
  const { data } = await axios.get(
    `/3/movie/${id}/credits?language=en-US`,
    options
  );

  return data;
};

export const fetchReviewsById = async (id) => {
  const { data } = await axios.get(
    `/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );

  return data;
};
