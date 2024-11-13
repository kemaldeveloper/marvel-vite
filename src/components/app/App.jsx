import {useState} from 'react';

// Components
import AppHeader from '../appHeader/AppHeader.jsx';
import ErrorBoundary from '../errorBoundary/ErrorBoundary.jsx';
import RandomChar from '../randomChar/RandomChar.jsx';
import CharList from '../charList/CharList.jsx';
import CharInfo from '../charInfo/CharInfo.jsx';

// Images
import decoration from '../../resources/img/vision.png';

console.log(decoration)

const App = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = id => {
    setChar(id);
  };
    return (
      <div className="app">
        <AppHeader />
        <main>
          <ErrorBoundary>
            <RandomChar />
          </ErrorBoundary>
          <div className="char__content">
            <ErrorBoundary>
              <CharList onCharSelected={onCharSelected} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CharInfo charId={selectedChar} />
            </ErrorBoundary>
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
}

export default App;
