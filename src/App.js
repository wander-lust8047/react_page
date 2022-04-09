// import logo from './logo.svg';
import './App.css';
import Navi from './navi';
import Home  from './home';
import Gallery from './gallery';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navi />
      <Router>
      {/* <Home />
      <Gallery /> */}
      <Switch>
          <Route path="/home" component={Home} />
          
          
          <Route path="/Gallery" component={Gallery}/>
        
        
        </Switch>
      </Router>
      
     
    </div>
  );
}

export default App;
