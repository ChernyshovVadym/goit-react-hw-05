import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTI3ZTA4OGIzMzc2ZDAwYjI5OTQxODhjYmMxZWVmMSIsInN1YiI6IjY2MWI2ZDgyZGJhZDUwMDE3YjQzMmFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QBK242kfXGTxNUhG31W0d9eYN0Dr9hcO-pzAnjl5ncc",
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    "/3/trending/movie/day?language=en-US",
    options
  );

  return data;
};
