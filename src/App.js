import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.scss';

// Screen
import Home from './screen/Home'
import Quizz from './screen/Quizz'
  
function App() {
  return (
    <div className="App flex flex-col">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/quizz' component={Quizz} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
