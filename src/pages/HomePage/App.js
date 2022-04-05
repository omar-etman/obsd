import Nav from '../../components/Nav/Nav'
import Cover from '../../components/Cover/Cover'
import ItemsList from '../../components/ItemsList/ItemsList';
import Form from '../Form/Form';
import DashBoard from '../DashBoard/DashBoard';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>loading route ...</h2>}>
        <Router>
          <header className="App-header">
            <Nav/>
          </header>
          <Routes>
            <Route exact path ="/">
              <div className='App-homepage'>
                <section>
                  <Cover/>
                </section>
                <main>
                  <ItemsList/>
                </main>
              </div>
            </Route>
            <Route path = "/form">

              <div className='App-form'>
                <main>
                  <Form/>
                </main>
              </div>
            </Route>
            <Route path = "/dashboard">
              <div className='App-dashBoard'>
                <main>
                  <DashBoard/>
                </main>
              </div>
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
