import css from "./Cast.module.css";

const Cast = ({ cast }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const url =
    "https://upload.wikimedia.org/wikipedia/ru/4/4d/Shrek_%28character%29.png";
  return (
    <div className={css.div}>
      <h4>{cast.name}</h4>
      <img
        className={css.img}
        src={cast.profile_path ? `${baseURL}${cast.profile_path}` : url}
        alt={cast.name}
      />
    </div>
  );
};

export default Cast;
