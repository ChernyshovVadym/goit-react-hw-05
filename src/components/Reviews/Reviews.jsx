import css from "./Reviews.module.css";

const Reviews = ({ review }) => {
  console.log(review);
  return (
    <div className={css.div}>
      <p className={css.author}>{review.author}</p>
      <p>User Score: {review.author_details.rating}</p>
      <p className={css.content}>{review.content}</p>
    </div>
  );
};

export default Reviews;
