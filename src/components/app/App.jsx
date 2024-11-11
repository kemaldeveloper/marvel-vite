import AppHeader from '../appHeader/AppHeader.jsx';
import RandomChar from '../randomChar/RandomChar.jsx';
import CharList from '../charList/CharList.jsx';
import CharInfo from '../charInfo/CharInfo.jsx';

import decoration from '../../resources/img/vision.png';
import { Component } from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary.jsx';

class App extends Component {
  state = {
    selectedChar: null,
  };

  onCharSelected = id => {
    this.setState({
      selectedChar: id,
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          <ErrorBoundary>
            <RandomChar />
          </ErrorBoundary>
          <div className="char__content">
            <ErrorBoundary>
              <CharList onCharSelected={this.onCharSelected} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CharInfo charId={this.state.selectedChar} />
            </ErrorBoundary>
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
  }
}

export default App;
