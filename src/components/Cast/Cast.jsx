const Cast = ({ cast }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <h4>{cast.title}</h4>
      <img src={`${baseURL}${cast.backdrop_path}`} alt={cast.title} />

      <p>{cast.name}</p>
    </div>
  );
};

export default Cast;
