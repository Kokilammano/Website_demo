import React,{Component} from 'react';
import image from './Infrastructure.jpg';
import App from './App.css';
class Home extends Component{
    render(){
        return(
            <div className="main">
                <img src={image} width="100%" alt="image"/>
                <h2>WELCOME TO MPNMJ ENGINEERING COLLEGE</h2>
                <p>M.P.Nachimuthu M.Jaganathan Engineering College, Chennimalai, Erode is one among the 
                    best self-financing engineering colleges. The main thrust is given to discipline, 
                    quality education and also in moulding young minds to become fully competent engineers.
                    The main scope of this institution is to provide education for the rural students and 
                    economically deprived students as per the ardent desire of the Founder 
                    Correspondent Thiru.J.Sudhanandhen. Free education is offered to the meritorious students
                     and also, fee concession of about 35-40 lakhs is provided every year for the under privileged 
                     students.</p>
                <div id="contact">
                    <h2>CONTACT</h2>
                    <pre>M.P.Nachimuthu M.Jaganathan Engineering College, <br/>
                       Sudhanandhen Kalvi Nagar,<br/>
                       Chennimalai, Erode-638112.<br/>
                       FAX : 04294 – 250219</pre>
                </div>
            </div>
        )
    }
}
export default Home;