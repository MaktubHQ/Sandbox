
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function FirstTab() {
  const { data, error } = useSWR('/api/posts', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="container">
      <div>
        {console.log(data)}
        {data.data.map((job, index) => {
          return (




            
            <div className="gallery">
            <div className='gallery-list' style={{
            display: "flex",
            justifyContent: "center",
          }}>
              {/* Insert Gallery of DB requests 3 per row (infinite columns) */}
              <div className="card" key={index}>
              <h2 className="jobTitle">{job.title}</h2>
              <p>{job.role}</p>
              <p>{job.budget}</p>
            </div>
  
            </div>
          {/* First tab content will go here */}
        </div>
            
          );
        })}

          <br></br>
          <hr></hr>
          <br></br>
          <div style={{
            display: "flex",
            justifyContent: "center",
          }}>
          <p>Coming soon 😉</p>
          </div>
          
      </div>
    </div>
  );
}

export default FirstTab