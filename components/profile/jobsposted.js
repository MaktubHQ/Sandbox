import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function JobsPosted (){


    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data, error } = useSWR('/api/profile', fetcher)

    const jobsPosted = ""

    const filterJobsPosted = () => {

        for(let i=0; i < data.data.length; ++i){
          console.log(data.data[i])
          if(session){
            if(data.data[i].ownerEmail == session.user.email){
              jobsPosted = (data.data[i])
            }
          }
              
             }
      
      }



    return(

        <div className="jobsPosted">
            {filterJobsPosted()}
<h3>Jobs Posted!</h3>
<Row xs={1} md={2} className="g-4">
      {Array.from({ length: jobsPosted.length }).map((_, idx) => (
        <Col key={jobsPosted._id}>
          <Card>
  
            <Card.Body>
              <Card.Title>{jobsPosted.title}</Card.Title>
              <Card.Text>
              Budget: {jobsPosted.budget ? jobsPosted.budget : "--"}
              <br></br>
              Description: {jobsPosted.jobdescription ? jobsPosted.jobdescription : "--"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
</div>
    )
}

export default JobsPosted