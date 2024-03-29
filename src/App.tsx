import './ResetStyles.module.scss';

import MainContent from './components/MainContent/MainContent';

import style from './App.module.scss';

function App() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
