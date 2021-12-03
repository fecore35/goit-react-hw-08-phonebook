import { Link } from "react-router-dom";
import Title from "components/Title";

function NotFoundView() {
  return (
    <div>
      <Title name="Nothing to see here!" />

      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default NotFoundView;
