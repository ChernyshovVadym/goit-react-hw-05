import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">
        HomePage
      </Link>
      <h2>Not Found Page</h2>
      <img src="https://png.pngtree.com/element_pic/16/11/14/4810d7467c24879d43006148e3c0c73a.jpg" />
    </div>
  );
};

export default NotFoundPage;
