import pic from './bus1.jpg';
import pic1 from './bus2.jpg';
function Transport(){
    return(
        <div className="transport">
            <h2 align="center">Transport</h2>
            <img src={pic} class="center"/>
            <img src={pic1} class="center"/>
            <h3>Buses are operated from following places</h3>
            <ul>
                <li>Erode</li>
                <li>Chennimalai</li>
                <li>Kangeyam</li>
                <li>Perundurai</li>
                <li>Kavindapadi</li>
                <li>Chithode</li>
                <li>Nasiyanur</li>
                <li>Kodumudi</li>
            </ul>
        </div>
    );
}
export default Transport;