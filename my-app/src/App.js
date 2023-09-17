import './App.css';

import Header from './components/structure/Header';
import Main from './components/structure/Main';
import Footer from './components/structure/Footer';
import ScrollButton from './components/buttons/ScrollButton';

function App () {
  return (
      <div id="app">
        <Header />
        <hr />
        <Main />
        <hr />
        <Footer />
        <ScrollButton />
      </div >
  );
}

export default App;
