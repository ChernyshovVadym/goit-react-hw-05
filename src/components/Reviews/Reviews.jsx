const Reviews = ({ review }) => {
  return (
    <div>
      <p>{review.author}</p>
      <p>User Score: {review.author_details.rating}</p>
      <p>{review.author_details.content}</p>
    </div>
  );
};

export default Reviews;
