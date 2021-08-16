import image1 from './entrance.jpg';
import image2 from './block.jpg';
function Aboutmpn() {
    return(
        <div className="aboutmpn">
           <h1>MPNMJEC</h1>
           <img src={image1} width="100%"/>
           <img src={image2} width="100%"/>
           <p>M.P.Nachimuthu M.Jaganathan Engineering College, Chennimalai, Erode is one among the best self-financing engineering colleges. The main thrust is given to discipline, quality education and also in moulding young minds to become fully competent engineers. The main scope of this institution is to provide education for the rural students and economically deprived students as per the ardent desire of the Founder Correspondent Thiru.J.Sudhanandhen. Free education is offered to the meritorious students and also, fees concession is provided every year for the under privileged students. The college has full-fledged infrastructure facilities, i.e., buildings, laboratories, hostels, sports etc. and provides better learning environment to the students through the dedicated, efficient and well qualified faculty. Also, the institution offers much needed academic exposure to the students along with communication skills and personality development programmes. The vibrant and active Training and Placement Cell provides continuous training to the students and better placements in various Multi -National Companies. All efforts are pursued assiduously to build the Institution as a Model One.</p><br/>
            <h1 align="center">MoU Details</h1>
            <p>M.P.Nachimuthu M.Jaganathan Engineering College, Chennimalai, Erode had signed MoU with the following organizations</p>
            <ul>
                <li>EEDISSIA - Erode District Small Industries Association</li>
                <li>CII - Confederation of Indian Industry</li>
                <li>ICT Academy of Tamil Nadu</li>
                <li>CODISSIA - The Coimbatore District Small Industries Association</li>
                <li>BSNL</li>
            </ul>
        </div>
    );
}
export default Aboutmpn;