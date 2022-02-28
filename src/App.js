import './App.css';
import Header from './components/HeaderComponent'
import { Main } from './components/MainComponent'
import { Albums } from './components/albums/AlbumsComponent'
import { Album } from './components/albums/AlbumComponent'
import { Band } from './components/bands/BandComponent'
import { Bands } from './components/bands/BandsComponent'
import { Reviews } from './components/reviews/Reviews'

import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';


function App() {
  return (
   <Router>
     {/* <div className="App"> */}
      <Header />
      <Switch>
        <Route exact path="/" component= {withRouter(Main)}/>
        <Route exact path="/albums" component = {withRouter(Albums)} />
        <Route exact path="/albums/:id" component={withRouter(Album)} />
        <Route exact path="/bands" component ={withRouter(Bands)} />
        <Route exact path="/bands/:id" component= {withRouter(Band)} />
        <Route exact path="/reviews/:id" component ={withRouter(Reviews)} />
      </Switch>
     {/* </div> */}
   </Router>
  );
}

export default App;
