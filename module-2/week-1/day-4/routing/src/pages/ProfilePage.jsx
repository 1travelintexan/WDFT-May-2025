import { Link, useSearchParams } from "react-router-dom";

export const ProfilePage = () => {
  const [theQueries] = useSearchParams();
  const firstQuery = theQueries.get("pet-name");
  const secondQuery = theQueries.get("pizza");
  console.log(theQueries, firstQuery, secondQuery);
  return (
    <div>
      <h2>ProfilePage</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
};
