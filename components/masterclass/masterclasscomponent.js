import Image from "next/image";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then((res) => res.json())
const openLink = (url) => {
  window.open(url);
}

const MasterClasses = () => {

  {/* This function fetches data from DB. */}
  const { data, error } = useSWR('/api/education', fetcher)
  //const courses = data.data

  {/* This function checks if a user data is received from DB to properly display state. */}
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Magic is loading...</div>


    return (
      <div>
        <br></br>
      <h5 className="edutitle">Welcome to Masterclass!</h5>
      <div className="Tabs">
        {/* This function uses React Cards and fills with DB data. */}

        {console.log(data)}
      <h6 className="hottestcourses">Our hottest courses!</h6>
      <Row xs={1} md={3} className="g-4">
      {Array.from({ length: data.data.length-1 }).map((_, idx) => (
        // eslint-disable-next-line react/jsx-key
        <Col>
          <Card onClick={event => {openLink(data.data[idx].link)}}>
            <Card.Body>
              <Card.Img variant="top" src={`${idx}.png`}/>
              <Card.Title>{data.data[idx].name}</Card.Title>
              {/* <Card.Text>
                {data.data[idx].description}
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <br></br>

    <h6 className="hottestcourses">Amazing Resources!</h6>
      <Row xs={1} md={4} className="g-4">
      {Array.from({ length: data.data.length }).map((_, idx) => (
        // eslint-disable-next-line react/jsx-key
        <Col>
          <Card onClick={event => {openLink(data.data[idx].link)}}>
            <Card.Body>
              <Card.Title>{data.data[idx].name}</Card.Title>
              <Card.Text>
                {data.data[idx].description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </div>
    );
  };
  export default MasterClasses;