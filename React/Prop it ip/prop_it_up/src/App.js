import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
      firstName='Jonathan' 
      lastName='Jones'
      hairColor='Black'
      age='24'/>
      <PersonCard
      firstName='Jack' 
      lastName='Bo'
      hairColor='green'
      age='25'/>
      <PersonCard
      firstName='Jane' 
      lastName='Doe'
      hairColor='Brown'
      age='33'/>
      <PersonCard
      firstName='Jill' 
      lastName='Hill'
      hairColor='Blue'
      age='25'/>
    </div>
  );
}

export default App;
