import Reviews from "../Reviews/Reviews";
import css from "./ReviewsList.module.css";

const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <ul className={css.ul}>
        {reviews.map((review) => (
          <li key={review.id}>
            <Reviews review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
