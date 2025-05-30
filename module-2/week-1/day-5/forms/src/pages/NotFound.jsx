import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      404 Not Found... You are lost
      <Link to="/">Go Back Home</Link>
    </div>
  );
};
