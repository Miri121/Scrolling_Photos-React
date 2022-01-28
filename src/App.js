//import logo from './logo.svg';
import './App.css';
//import reactDom from 'react-dom';
import Photo from './component/photo'
import Photos from './component/photos'
import { Img } from 'react-image'
import image from './imgs/img.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Switch>
            <Route path="/photos">
              <Photos />
            </Route>
            <Route path="/photo">
              <Photo />
            </Route>
          </Switch>
          <nav >
            {/* <Link  to="/photos" ><Img  src={image} alt='img'></Img></Link> */}
            <a href="/photos" ><Img className='img1' src={image} alt='img'></Img></a>
          </nav>
        </Router>
      </div>
    </>
  );
}
export default App;

