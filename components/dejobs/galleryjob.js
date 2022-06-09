
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
              <h2 className="jobTitle">{job.title}</h2>
              <p>{job.role}</p>
              <p>{job.budget}</p>
            </div>
            
          );
        })}
        </div>
    );
};

export default GalleryJob;