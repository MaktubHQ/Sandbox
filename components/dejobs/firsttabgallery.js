import GalleryRow from "./galleryrow";
import Navbar from "../landing/navbar";


const Gallery = () => {

    return (
            <div>
            <Navbar />
            <div className="gallery-wrapper">
                <div className="gallery">
                    {data.data.map((jobGroup, i) => {
                              return <GalleryRow data={jobGroup} key={i} />;
                          })
                    }
                </div>
            </div>
            </div>
            
       
    );
};

export default Gallery;