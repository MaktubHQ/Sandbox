import GalleryJob from "./galleryjob";


const GalleryRow = (data) => {

    return (
        <div className="gallery-nft-row">
            {
                data.data.map((job, i) => {
                    return <GalleryJob job={job} key={i}/>
                })
            }
        </div>
    );
};

export default GalleryRow;