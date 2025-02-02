import { Helmet } from "react-helmet";
import AppBanner from "../appBanner/AppBanner.jsx";
import ComicsList from "../comicsList/ComicsList.jsx";

const ComicsPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Comics" />
        <title>Comics Page</title>
      </Helmet>
      <AppBanner />
      <ComicsList />
    </>
  );
};

export default ComicsPage;
