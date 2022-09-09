import Image from "next/image";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MasterClasses = () => {
    return (
      <div>
      <h5 className="edutitle">Welcome to Masterclass!</h5>
      <div className="Tabs">
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
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