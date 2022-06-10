
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function GalleryJob() {
  const { data, error } = useSWR('/api/posts', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
    
    return (
        <div className="gallery-nft">
            {data.data.map((job, index) => {
                
          return (
              
              <div className="card" key={index}>
                   <button onClick={() => setShowModal(true)}>
                       
            <h2 className="jobTitle">{job.title}</h2>
              <p>{job.role}</p>
              <p>{job.budget}</p>
                       
                       </button>
                    <Modal
                    onClose={() => setShowModal(false)}
                    show={showModal}
                    >
          Hello from the modal!
        </Modal>
              
            </div>
            
          );
        })}
        </div>
    );
};

export default GalleryJob;