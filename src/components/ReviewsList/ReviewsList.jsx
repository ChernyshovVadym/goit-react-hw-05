import Reviews from "../Reviews/Reviews";

const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <ul>
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
