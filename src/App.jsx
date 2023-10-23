import './App.css'
import Header from './components/Header.jsx';
import GetStarted from './components/GetStarted.jsx';
import Statistics from './components/Statistics.jsx';
import LinkBoost from './components/LinkBoost.jsx';

function App() {

  return (
    <div className='shortly-container'>
      <Header />
      <GetStarted />
      <Statistics />
      <LinkBoost />
    </div>
  )
}

export default App
