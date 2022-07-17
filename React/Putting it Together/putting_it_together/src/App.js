import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
      firstName='Jonathan' 
      lastName='Jones'
      hairColor='Black'
      age='24'
      />
      <PersonCard
      firstName='Jack' 
      lastName='Bo'
      hairColor='green'
      age= '44'
      />
    </div>
  );
}

export default App;
