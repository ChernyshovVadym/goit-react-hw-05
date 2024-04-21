import Cast from "../Cast/Cast";

const CastList = ({ casts }) => {
  return (
    <div>
      <ul>
        {casts.map((cast) => (
          <li key={cast.id}>
            <Cast cast={cast} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastList;
