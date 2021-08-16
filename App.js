import Home from './Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Aboutmpn from './Aboutmpn';
import Aboutfounder from './Aboutfounder';
import './App.css';
import image1 from './logo.jpeg';
import Vision from './Vision';
import Academics from './Academics';
import Sports from './Sports';
import Library from './Library';
import Transport from './Transport';
import Internet from './Internet';
import Pgcourse from './Pgcourse';
function App(){
    return(
        <Router>
             <div className="header">
                <img src={image1}  width={100} />
            </div>
                <header>M.P.NACHIMUTHU M.JAGANATHAN ENGINEERING COLLEGE</header>
                <h2>Approved by AICTE, New Delhi & Permanently Affiliated to Anna University, Chennai <br/>
                Sudhanandhen Kalvi Nagar, Chennimalai, Erode-638 112, TamilNadu.</h2>
            
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/aboutmpn">
                            <Aboutmpn/>
                        </Route>
                        <Route path="/aboutfounder">
                            <Aboutfounder/>
                        </Route>
                        <Route path="/vision">
                            <Vision/>
                        </Route>
                        <Route path="/academics">
                            <Academics/>
                        </Route>
                        <Route path="/pgcourse">
                            <Pgcourse/>
                        </Route>
                        <Route path="/sports">
                            <Sports/>
                        </Route>
                        <Route path="/library">
                            <Library/>
                        </Route>
                        <Route path="/transport">
                            <Transport/>
                        </Route>
                        <Route path="/internet">
                            <Internet/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
export default App;