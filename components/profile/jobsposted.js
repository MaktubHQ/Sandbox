import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';


function JobsPosted (){


    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data, error } = useSWR('/api/posts', fetcher)
    const { data: session } = useSession()

    const jobsPosted = []

    const filterJobsPosted = () => {

        for(let i=0; i < data.data.length; ++i){
          console.log(data.data[i])
          if(session){
            if(data.data[i].email == session.user.email){
              jobsPosted.push(data.data[i])
            }
          }
              
             }
      
      }


if (error) return <div>Failed to load</div>
if (!data) return <div>Magic is loading...</div>

    return(

        <div className="jobsPosted">
            {filterJobsPosted()}
<h3>Jobs Posted!</h3>
<Row xs={1} md={4} className="g-4">
      {Array.from({ length: jobsPosted.length }).map((_, idx) => (
        // eslint-disable-next-line react/jsx-key
        <Col>
          <Card>
  
            <Card.Body>
              <Card.Title>{jobsPosted[idx].title}</Card.Title>
              <Card.Text>
              Budget: {jobsPosted[idx].budget ? jobsPosted[idx].budget : "--"}
              <br></br>
              Description: {jobsPosted[idx].jobdescription ? jobsPosted[idx].jobdescription : "--"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <hr></hr>
<br></br>
</div>

    )
}

export default JobsPosted