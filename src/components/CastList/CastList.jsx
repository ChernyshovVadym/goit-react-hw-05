import Cast from "../Cast/Cast";
import css from "./CastList.module.css";

const CastList = ({ casts }) => {
  return (
    <div className={css.div}>
      <ul className={css.ul}>
        {casts.map((cast) => (
          <li className={css.li} key={cast.id}>
            <Cast cast={cast} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastList;
