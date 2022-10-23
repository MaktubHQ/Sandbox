/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Login from '../accessories/login-btn';
import TipAuthor from '../tipbox/tip';
import useSWR, { Key, Fetcher } from 'swr'


// interface FundraiseCard {
//   title: string
//   goal: number
//   usecase: string
//   pitch: string
//   icon: string
//   ownerwallet: string
//   children: React.ReactNode|React.ReactNode[];
// }


function FirstTab() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  
  const { data, error } = useSWR(() => '/api/fundraise', fetcher)
  
  const { connect, publicKey } = useWallet()




const rowEvents = (row) => {
   
    // applytoggleTrueFalse()
    
}




{/* This function handles submitting the form to our DB when you apply for a job. */}
const handleSubmit = async (event) => {
  // Stop the form from submitting and refreshing the page.
  event.preventDefault()
  console.log("here")


  // Get data from the form.
  const data = {
    

  }

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)

  // API endpoint where we send form data.
  const endpoint = '/api/fundraise'

  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: 'POST',
    // Tell the server we're sending JSON.
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  }

  // Send the form data to our forms API on Vercel and get a response.
  const response = await fetch(endpoint, options)

  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  const result = await response.json()
  console.log(result)
  console.log(data)
  

}

const router = useRouter()





{/* These checks make sure code doesn't break. There is latency between DB and our website, so DATA could be null for sometime. */}

if (error) return <div>Failed to load</div>
if (!data) return <div>Magic is loading...</div>


const dataReversed = []

function reverseArr(input) {
  for(var i = input.length-1; i >= 0; i--) {
      dataReversed.push(input[i]);
  }
}

  return (
    <>
      
        {console.log(data)}

        {reverseArr(data.data)}


        {/* This card concept was created by React Bootstrap. We dynamically set the data shown using our DB. */}

        <Row xs={1} md={2} className="g-4">
      {Array.from({ length: dataReversed.length }).map((_, idx) => (
        
        <Col>
          <Card className='cards' onClick={event => {rowEvents(dataReversed[idx])}}>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title className='cardtitle' numberOfLines={1} style={{fontSize:15, textAlign:"center"}}>{dataReversed[idx].title.substring(0, 75)}</Card.Title>
              <Card.Subtitle className='cardtitle' numberOfLines={1} style={{fontSize:12, textAlign:"center"}}>{"Goal $" + (dataReversed[idx].goal ? dataReversed[idx].goal : "----")}</Card.Subtitle>
              <Card.Text>
              
             
              <br></br>
              <div className='JobBox'>
              <div className='JobBox'>
              <span className='oneliner'>{"Fund Use: "} <Image src="/role.svg" height={20} width={20}/></span> {(dataReversed[idx].usecase ? dataReversed[idx].usecase : "----")}
              <br></br>
              <hr></hr>
              </div>
             <div className='JobBox'>
             <span className='oneliner'>{"Pitch: "} <Image src="/budget.svg" height={20} width={20}/> </span> {(dataReversed[idx].pitch ? dataReversed[idx].pitch : "----") }
              <br></br>
             </div>
             <div>
               <TipAuthor/>
             </div>
              </div>
            
             
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

        

          <br></br>
          <hr></hr>
          <br></br>
          <div style={{
            display: "flex",
            justifyContent: "center",
          }}>

            
          <p>Payment smart contracts coming soon 😉</p>
          </div>
      </>
  );
}

export default FirstTab
