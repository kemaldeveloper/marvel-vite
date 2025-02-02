import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ErrorMessage } from "../errorMessage/ErrorMessage";

const Page404 = () => {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <div>
        <ErrorMessage />
        <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}>Page doesn&apos;t exist</p>
        <Link
          to={"/"}
          style={{
            display: "block",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "24px",
            marginTop: "30px",
          }}
        >
          Back to main page
        </Link>
      </div>
    </>
  );
};

export default Page404;
