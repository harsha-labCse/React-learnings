import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'; //we don't have to use {} as export is default
import {Todos} from './MyComponents/Todos'; //we have to use {} as export is not default for this
import {Footer} from './MyComponents/Footer';

function App() {
  return (
    // <>    //html content should be embeded in something like id, className  if not we have to embed that in <>  </>
    // <h3>Todo</h3>
    // <p>My app works</p>
    // </>

   <>
      <Header/>
      <Todos/>
      <Footer/>
   </>

  );
}

export default App;
