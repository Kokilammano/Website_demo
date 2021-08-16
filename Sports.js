import imgg from './sprts.jpg';
import imgg1 from './spr.jpg';
function Sports() {
    return(
        <div className="sports">
                <h2 align="center">Sports</h2>
                <img src={imgg} class="center"/>
                <img src={imgg1} class="center"/>
                <p>Department of physical education has all the facilities to coach the students to win the Inter – University, Inter -Zone, Inter – Collegiate, National level, State level and District level sports and games. Our college has a very spacious play ground of 10 acres which includes 400 mts Standard track, Cricket field, Football field, Hockey field, Volleyball, Kabaddy, Ball Batminton, Kho-Kho and Hand Ball Courts, well-equipped 16 multi – station gym for men and 6 for women. There are various Indoor games like Table Tennis, Chess, Carrrom and etc.</p>
                <h3>Facilities</h3>
                <ul>
                    <li>Multi Station Gym: 16 stations for men</li>
                    <li>Weight Lifting set: 4 nos.</li>
                    <li>6 Station Gym (Women)</li>
                    <li>Hurdles: 80 nos.</li>
                    <li>High Jump Up: Rights with foam mattings</li>
                    <li>Pole Vault Up: Rights</li>
                    <li>Volleyball Courts – 2</li>
                    <li>Table tennis Board – 2 Cricket Ground -1</li>
                    <li>Multipurpose 400mts standard mud track</li>
                </ul>
            </div>
    );
}
export default Sports;