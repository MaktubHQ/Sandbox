
function FirstTab({ joblist }) {
  return (
    <div className="container">
      <div>
        {console.log(joblist)}
        {joblist.map((job, index) => {
          return (
            <div className="FirstTab">
            <div style={{
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
          
    
          <br></br>
          <hr></hr>
          <br></br>
    
         
    
          
          <p>Coming soon 😉</p>
          {/* First tab content will go here */}
        </div>
            
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("dejobs");

  let joblist = await db.collection("joblist").find({}).toArray();
  joblist = JSON.parse(JSON.stringify(joblist));

  return {
    props: { joblist },
  };
}

export default FirstTab