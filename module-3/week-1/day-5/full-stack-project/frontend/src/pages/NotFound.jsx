import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      {" "}
      404 NotFound
      <p>
        You got lost...? <Link to="/">Go Home</Link>
      </p>
    </div>
  );
}
