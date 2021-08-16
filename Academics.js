import img5 from './civil.jpg';
import img6 from './cse.jpg';
import img7 from './eee.jpg';
import img8 from './ece1.jpg';
import img9 from './mech.jpg';
import img10 from './it3.jpg';
import {Link} from 'react-router-dom';
function Academics() {
    return(
        <div className="academics">
            <div className="sidebar">
            <h2>UG COURSES</h2>
            <sidebar>
                <a href="#civil">Civil Engineering</a><br/><br/>
                <a href="#cse">Computer Science and Engineering</a><br/><br/>
                <a href="#eee">Electrical and Electronics Engineering</a><br/><br/>
                <a href="#ece">Electronics and Communication Engineering</a><br/><br/>
                <a href="#mech">Mechanical Engineering</a><br/><br/>
                <a href="#it">Information Technology</a><br/><br/>
            </sidebar>
            </div>

            
            <div id="civil">
                <h2> Civil Department</h2>
                <img src={img5} className="center" width="30%"/>
                <p>The primary objective of the Civil Engineering department is to impart technical education of high quality coupled with professional ethics to meet the global challenges. The department offers both UG and PG (Structural Engg.) Programmes. The Department has well equipped laboratories like SOM lab, HEL, Soil Mechanics Lab, Concrete & Highway Engg. Lab, EEL, SurveyLab, CADDLab& Structural Engg.Lab  with Loading frame of capacity 100 Ton. Department has dedicated and experienced faculty members. The faculty members are actively involved in number of R&D and consultancy projects. The Department offers short term value added courses like Auto CAD, Revit, Stad pro, MS project , Primavera  etc.to increase the employment potential of the students and to improve their technical skills.<br/><br/>
                The department produces more Anna University rank holders. The students of our department are well placed in various MNC’s such as CCCL pvt.Ltd, L & T, URC construction, Shoba Developers, Jain Housing pvt.Ltd, Caritor India pvt.Ltd, , Thriveni earth movers pvt.Ltd, RRP housing units, New Premier construction etc. Apart from that more number of our dept. students is currently working as Assistant Engineers in various Tamilnadu Government Departments like rural development, water resources, Highways, Public works department, Pollution control board etc. Our students are also well placed in abroad.<br/><br/>
                Our department signed MOU with– PENTA CADD, ERODE. PEACE-Passionately Enthusiastic Association of Civil Engineering and ICI student’s chapter of our department conducts number of programme like concrete Day celebration, Engineer’s day  celebration , international conference , national level technical symposium  and guest lectures etc all over the year.<br/><br/>
                Our department students are participating in various co-curicular and extracurricular activities in and around Tamilnadu like conferences, seminars, workshops, technical symposium, technical Quiz, poster presentation, CADD contest, code cracking, model making, cube contest, sports etc. and got awards and rewards.<br/><br/>
                Our students are visiting various construction compaines at cochin, Bangalore, mysore, kerala etc. and also  visited salem steel plant, water treatment plant , SERC- Structural Engineering Research Centre- Chennai-open exhibition, book exhibitions etc.</p>
            </div>
            <div id="cse">
                <h2 align="center">CSE Department</h2>
                <img src={img6} class="center" width="30%"/>
                <p>Computer science deals with the theoretical foundations of information, computation and with practical techniques for their implementation and application. The Field of Computer Science is the main developing area in the country, as well as a major contributor to the skilled and trained manpower of the world. Computer engineers are involved in many aspects of computing, from the design of individual microprocessors, personal computers and supercomputers, to circuit design. The department offers B.E. and M.E program in Computer Science and Engineering.<br/><br/>
                The aim of these programs is to enable students to acquire specialized knowledge for various subjects in computer science and to update regularly to keep up with the growing demands and the changing trends of the software industry. And also offers certified Value-added courses like Angular JS, soft skill development programs and job-oriented courses to help increase the employment potential of the students.<br/><br/>
                The Department has state of the art infrastructure, laboratories and computing equipment supported by high speed internet. The faculty members update their knowledge by regularly attending various conferences and faculty development program. Several faculty members are currently doing their research work and are involved in taking care of software projects.<br/><br/>
                Mere theoretical knowledge is not sufficient for the students hence Industrial visit is considered as one of the most practical methods of teaching. Students are taken for a guided tour to various industries, providing them information about the background of the companies and their current position in the global business scenario. It helps the students to know things practically through interaction, working methods and employment practices. Moreover, it gives exposure from academic point of view.<br/><br/>
                With a view to bridge the gap between industrial requirements and academic curriculum, the department invites experts from various fields of engineering and management to enable the students to know and understand the requirements of industries. And have designed a discussion forum to share and learn.<br/><br/>
                A team of learned and dedicated teachers train the students in the latest technology enabling them to acquire the necessary skills to work in any reputed IT industry and prides itself on good career opportunities for students. There is a major contribution from our Alumni team in the development of the department as well as mentoring and sharing experiences to the existing students.</p>

            </div>
            <div id="eee">
                <h2 align="center">EEE Department</h2>
                <img src={img7} class="center" width="30%"/>
                <p>The department of Electrical and Electronics Engineering, presently headed by Dr.D.Sabapathi, offers a full time 4-years B.E. degree course in Electrical and Electronics Engineering and 2-years M.E. Power systems Engineering. The department has conducted many National and International Conferences, Seminars, Workshops, Symposium, Short-term training programs and Faculty Development Programs. The good infrastructure facilities like full-fledged laboratories, well established library and a dedicated team of faculty with qualified staff members and technical supporting staff are the highlights of the department’s strength.<br/><br/>
                The department is providing Special Training Programmes for Faculty and Industrial Person. It is developing industrial consultancy services, Research and Development projects.</p>
            </div>
            <div id="ece">
                <h2 align="center">ECE Department</h2>
                <img src={img8} class="center" width="30%"/>
                <p>The Department of Electronics and Communication Engineering of M.P.NACHIMUTHU M. JAGANATHAN ENGINEERING COLLEGE was established in the academic year 2001 with an annual intake of 60. The intake was increased to 90 from the academic year 2008. In addition to this, the department offers M.E. Programme with an intake of 18 in the specialization of VLSI Design from the year 2011.<br/><br/>
                The objective of this programme is to learn the concepts of electronics and communication disciplines and apply them to solve real world problems in the industry. It emphasizes the design of hardware systems as well as communication systems. The students start the programme learning the fundamental concepts of electronics engineering, while doing foundation courses in mathematics and physics in tandem. A student then progresses to study core subjects of electronics such as Analog and Pulse Circuits, Electronic Circuit Analysis, communications courses such as Analog and Digital Communications, Signals and Systems etc. The foundations laid by these basic courses enable students to select various electives that provide them with specialized skill sets. A student successfully completing this programme would be well equipped with necessary skills to either pursue higher studies or work in industry as IC Design Engineer, Systems Engineer, Embedded Systems Design Engineer, RF Engineer, Wireless / Mobile Network Engineer etc.</p>
            </div>
            <div id="mech">
                <h2 align="center">Mechanical Engineering</h2>
                <img src={img9} class="center" width="30%"/>
                <p>
                  Our Department committed hands-on-education for our students through innovative teaching-learning methods, outcome-based education (OBE), and effective training practices. The Mechanical Engineering department was started in the year 2001. The department offers a U.G course – B.E in Mechanical Engineering and a P.G course – M.E in CAD/CAM Engineering. The department has well-equipped laboratories with start-of- the- art infrastructure facilities which include a Central workshop, Thermal laboratory, Special machines lab, Mechatronics lab, Simulation & Analysis lab, CAD/CAM center equipped with the latest software for the benefit of the students and faculty to carry out their project and research work. The department has well qualified, experienced, and dedicated faculty members. The faculty has constantly published papers in reputed international journals and presented papers at national and international conferences. We have signed MoU with various companies. The department has a track record of conducting many national and international level conferences, seminars, workshops, short-term training programs, and faculty development programs. The department is engaged in sponsored research, consultancy, testing & characterization mainly in the areas of advanced materials and manufacturing process. Our department has separate associations and professional bodies like ISTE, IIPE, SAE, and Energy Club. Many Values added courses are provided for our students to enhance their knowledge in soft skills. Our department produces many rank holders both in U.G and P.G courses. Our department has secured seventh anna university rank. A dedicated placement team has been active in generating employment opportunities for students through various reputed companies. Our department students take up their higher studies in prestigious universities in India and aboard. We provide industrial training for our students to improve their practical skills. Industrial visits and Guest lectures are periodically arranged to enrich the knowledge of the students. We consistently encourage our students to participate in various extra-curricular activities.  
                </p>
            </div>
            <div id="it">
                <h2 align="center">Information Technology</h2>
                <img src={img10} class="center" width="30%"/>
                <p>
                The Department of Information technology was established in  the year 2007, with the primary goal of providing knowledge in the latest technologies towards the upgrowing environment. The department has a team of dedicated faculty members with an updated knowledge in the field of Information Technology and also have an excellent infrastructure in terms of laboratories, classrooms, seminar halls, etc . Here we empower the students with the tools and ideas which emphasis on theoretical and experimental Technology that can be applied anywhere both in Academic and Industrial fields. The department produces excellent students with enriched knowledge in the latest Technologies like Big data, Data mining and Data ware housing, Java Programming, cloud computing, mobile computing etc… We also aim at molding the students to make them good citizens of our nation to serve the industry and society
                </p>
            </div>
            </div>
    );
}
export default Academics;