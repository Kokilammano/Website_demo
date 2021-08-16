import ima from './lib.jpg';
import ima1 from './lib1.jpg';
import ima2 from './lib2.jpg';
import ima3 from './lib3.jpg';
function Library(){
    return(
        <div className="library">
            <h2 align="center">Library Images</h2>
            <img src={ima1} class="center"/>
            <img src={ima2} class="center" />
            <img src={ima3} class="center"/>
        </div>
    );
}
export default Library;