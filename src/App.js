import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Cv1 from './Cv1';
import Cv2 from './Cv2';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/cv1' component={Cv1} /> 
        <Route exact path='/cv2' component={Cv2} /> 
        <Route exact path='/' component={Home} />
      </Switch>
      
    </div>
  );
}

export default App;
