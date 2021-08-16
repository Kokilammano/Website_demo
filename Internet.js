import imagg from './it.jpg';
import imagg1 from './it2.jpg';
function Internet(){
    return(
        <div className="internet">
            <h2 align="center">Internet</h2>
            <img src={imagg} class="center"/>
            <img src={imagg1} class="center"/>
            <h2>Internet</h2>
            <ul>
                <li>Number of systems:80 with latest configuration</li>
                <li>Bandwidth:60 mbps through VSAT connections & upto 8 mbps through BSNL connection</li>
            </ul>
        </div>
    );
}
export default Internet;