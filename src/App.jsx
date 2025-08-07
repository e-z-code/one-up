import { React } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HeroDetails from './components/HeroDetails';
import HeroText from './components/HeroText';

function App() {

  return (
    <>
      <NavigationBar/>
      <HeroText/>
      <HeroDetails/>
    </>
  );

}

export default App;
