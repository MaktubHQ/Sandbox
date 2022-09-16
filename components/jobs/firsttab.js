/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import useSWR from 'swr'
import { Modal, Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

// es6
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Login from '../accessories/login-btn';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

function FirstTab({walletAddress}) {

  const { data, error } = useSWR('/api/posts', fetcher)
  const dataReversed = data.data.reverse()
  const { connect, publicKey } = useWallet()

  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [applymodalInfo, applysetModalInfo] = useState([]);
  const [applyshowModal, applysetShowModal] = useState(false);

  const [confirmmodalInfo, confirmsetModalInfo] = useState([]);
  const [confirmshowModal, confirmsetShowModal] = useState(false);

  console.log(walletAddress)
  const [show, setShow] = useState(false)

  const [applyshow, applysetShow] = useState(false)

  const [confirmshow, confirmsetShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const applyhandleClose = () => applysetShow(false)
  const applyhandleShow = () => applysetShow(true)

  const confirmhandleClose = () => confirmsetShow(false)
  const confirmhandleShow = () => confirmsetShow(true)

  const toggleTrueFalse = () => {
    setShowModal(handleShow)
  }
  const applytoggleTrueFalse = () => {
    applysetShowModal(applyhandleShow)
  }
  const confirmtoggleTrueFalse = () => {
    confirmsetShowModal(confirmhandleShow)
  }


const rowEvents = (row) => {
    console.log(row)
    setModalInfo(row)
    toggleTrueFalse()
    applysetModalInfo(row)
    // applytoggleTrueFalse()
    
}

const triggerApply = {
  onClick: (e, row) => {
    applysetModalInfo(row)
    applytoggleTrueFalse()
  }
}

{/* This function handles when you click a job. Loads a pop up with single-job details. */}
const ModalContent = () => {
  return (
    <Modal show = { show } onHide= {handleClose}>

      <Modal.Header closeButton>

        <Modal.Title>{modalInfo.title}</Modal.Title>
        <hr></hr>

        <Modal.Body>
          <p>
          {modalInfo.role + " Role"}
          </p>
          <hr></hr>
          <p>
          {"Budget is " + modalInfo.budget}
          </p>
          <hr></hr>
          <p>
          {modalInfo.jobdescription}
          </p>
          
        
           </Modal.Body>

        <Modal.Footer> 

          <Button onClick={applyhandleShow} variant="primary">Apply</Button>
        </Modal.Footer>


        </Modal.Header>


    </Modal>
  )
}

{/* This function handles opening the application form */}
const ApplyModal = () => {
  const { data: session } = useSession()
  if(!session) {
    handleClose()

  return( 
    <Modal show = { applyshow } onHide= {applyhandleClose}>
<div><p>Please sign in to apply :)</p><Login/></div>
    </Modal>
  )
  }
  else{
  return (
    <Modal show = { applyshow } onHide= {applyhandleClose}>

    <Modal.Header closeButton>

      <Modal.Title>{applymodalInfo.role} Application</Modal.Title>

      <Modal.Body>

      <form
  name="job-listing-form"
  onSubmit={handleSubmit}
>
    
<input type="hidden" id="ownerWallet" name="ownerWallet" value={applymodalInfo.wallet} />
<input type="hidden" id="jobTitle" name="jobTitle" value={applymodalInfo.title} />
<input type="hidden" id="ownerEmail"  name="ownerEmail" value={applymodalInfo.email}/>
<input type="hidden" id="email"  name="email" value={session && session.user.email}/>


<div className="contacts">

<label htmlFor="discord"> Discord ID: </label>
  <input id="discord" type="text" name="discord"  />
  <br></br>
  <hr></hr>

  <label htmlFor="twitter"> Twitter: </label>
  <input id="twitter" type="text" name="twitter"  />
  <br></br>
  <hr></hr>

</div>
 

  
<div className="jobinfo">

  <label htmlFor="message">Introduction: * </label>
  <textarea id="intro" name="intro" required></textarea>


</div>

<hr></hr>
<br></br>
  

  <button type="submit" className="postbutton" >Apply to Job</button>
</form>
      
         </Modal.Body>

      <Modal.Footer> 

        <Button onClick={applyhandleClose} variant="secondary">Close</Button>
      </Modal.Footer>


      </Modal.Header>


  </Modal>
  )
}
 
}

{/* This function handles a confirmation screen for user after apply button clicked. */}
const ModalConfirm = () => {
  applyhandleClose()
  return (
    <Modal show = { confirmshow } onHide= {confirmhandleClose}>

      <Modal.Header confirmcloseButton>

        <Modal.Title>Your application was successfully submitted!</Modal.Title>
        <hr></hr>

        <Modal.Body>
          <p>
          Keep an eye on your contact informations provided for more details.
          </p>
           </Modal.Body>

        <Modal.Footer> 

          <Button onClick={confirmhandleClose} variant="secondary">Close</Button>
        </Modal.Footer>


        </Modal.Header>


    </Modal>
  )
}

{/* This function handles submitting the form to our DB when you apply for a job. */}
const handleSubmit = async (event) => {
  // Stop the form from submitting and refreshing the page.
  event.preventDefault()
  console.log("here")

  handleClose()
  applyhandleClose()
  confirmhandleShow()

  // Get data from the form.
  const data = {
    ownerWallet: event.target.ownerWallet.value,
    ownerEmail: event.target.ownerEmail.value,
    jobTitle: event.target.jobTitle.value,
    email: event.target.email.value,
    discord: event.target.discord.value,
    twitter: event.target.twitter.value,
    intro: event.target.intro.value,

  }

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)

  // API endpoint where we send form data.
  const endpoint = '/api/profileapplications'

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




  return (
      <div className='container'>
        {console.log(data)}

        


        {/* This card concept was created by React Bootstrap. We dynamically set the data shown using our DB. */}

        <Row xs={1} md={2} className="g-4">
      {Array.from({ length: dataReversed.length }).map((_, idx) => (
        
        <Col>
          <Card className='cards' onClick={event => {rowEvents(dataReversed[idx])}}>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title className='cardtitle' numberOfLines={1} style={{fontSize:15, textAlign:"center"}}>{dataReversed[idx].title.substring(0, 75)}</Card.Title>
              <Card.Subtitle className='cardtitle' numberOfLines={1} style={{fontSize:12, textAlign:"center"}}>{" " + (dataReversed[idx].project ? dataReversed[idx].project : "----")}</Card.Subtitle>
              <Card.Text>
              
             
              <br></br>
              <div className='JobBox'>
              <div className='JobBox'>
              <span className='oneliner'><Image src="/role.svg" height={20} width={20}/></span> {(dataReversed[idx].role ? dataReversed[idx].role : "----")}
              <br></br>
              </div>
             <div className='JobBox'>
             <span className='oneliner'><Image src="/budget.svg" height={20} width={20}/> </span> {(dataReversed[idx].budget ? dataReversed[idx].budget : "----") }
              <br></br>
             </div>
              <div className='JobBox'>
              <span className='oneliner'><Image src="/discord.svg" height={20} width={20}/></span> {(dataReversed[idx].discord ? dataReversed[idx].discord : "----")}
              <br></br>

              </div>
              <div className='JobBox'>
              
                <a href={"https://twitter.com/" + dataReversed[idx].twitter} style={{fontSize: 15}}> 
              <span className='oneliner'><Image src="/twitter.svg" height={20} width={20}/></span> {(dataReversed[idx].twitter ? dataReversed[idx].twitter : "----")}
              </a>
              </div>

              </div>
            
             
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>


  {/* Checks when to display popups based on user clicking buttons. */}
        {show ? <ModalContent /> : null}
        {applyshow ? <ApplyModal /> : null}
        {confirmshow ? <ModalConfirm /> : null}
        

          <br></br>
          <hr></hr>
          <br></br>
          <div style={{
            display: "flex",
            justifyContent: "center",
          }}>

            
          <p>Payment smart contracts coming soon 😉</p>
          </div>
          
      </div>
  );
}

export default FirstTab
