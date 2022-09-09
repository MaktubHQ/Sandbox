import React, { useState } from "react";
import Footer from '../components/accessories/footer'
import Navbars from '../components/accessories/navbar'
import styles from '../styles/Home.module.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then((res) => res.json())
const openLink = (url) => {
  window.open(url);
}

const Demo = () => {

  const { data, error } = useSWR('/api/education', fetcher)

  if (error) return <div>Failed to load</div>
if (!data) return <div>Magic is loading...</div>

    return ( 
        <div className={styles.container}>
          {console.log(data.data)}

      <Navbars />
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
      <Footer />

      
    </div>
     );
}
 
export default Demo;