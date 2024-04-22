const Cast = ({ cast }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <h4>{cast.name}</h4>
      <img src={`${baseURL}${cast.profile_path}`} alt={cast.name} />

      <p>{cast.name}</p>
    </div>
  );
};

export default Cast;
