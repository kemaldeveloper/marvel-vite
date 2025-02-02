import { useState } from "react";

import { Helmet } from "react-helmet";
import decoration from "../../resources/img/vision.png";
import CharInfo from "../charInfo/CharInfo.jsx";
import CharList from "../charList/CharList.jsx";
import { CharSearchForm } from "../charSearchForm/CharSearchForm.jsx";
import ErrorBoundary from "../errorBoundary/ErrorBoundary.jsx";
import RandomChar from "../randomChar/RandomChar.jsx";

const MainPage = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = id => {
    setChar(id);
  };

  return (
    <>
      <Helmet>
        <meta name="content" description="Main Page" />
        <title>Main page</title>
      </Helmet>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <div>
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharSearchForm />
          </ErrorBoundary>
        </div>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
