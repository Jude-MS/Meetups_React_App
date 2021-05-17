import {Route, Switch} from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetups />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
