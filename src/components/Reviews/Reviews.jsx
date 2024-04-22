const Reviews = ({ review }) => {
  console.log(review);
  return (
    <div>
      <p>{review.author}</p>
      <p>User Score: {review.author_details.rating}</p>
      <p>{review.content}</p>
    </div>
  );
};

export default Reviews;
