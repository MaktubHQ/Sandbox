/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import useSWR from 'swr'
import { Modal, Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router'

// es6
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

function FirstTab({walletAddress}) {

  const { data, error } = useSWR('/api/posts', fetcher)
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

 

  const columns = [{
    dataField: 'project',
    text: 'Organization'
  },{
  dataField: 'role',
  text: 'Job Title',
  filter: textFilter()
}, {
  dataField: 'title',
  text: 'Details'
}, {
  dataField: 'budget',
  text: 'Pay'
},
, {
  dataField: 'wallet',
  hidden: true
},{
  dataField: 'jobdescription',
  hidden: true
},
];

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
const handleSubmit = async (event) => {
  // Stop the form from submitting and refreshing the page.
  event.preventDefault()

  handleClose()
  applyhandleClose()
  confirmhandleShow()

  // Get data from the form.
  const data = {
    ownerWallet: event.target.ownerWallet.value,
    jobTitle: event.target.jobTitle.value,
    email: event.target.email.value,
    discord: event.target.discord.value,
    twitter: event.target.twitter.value,
    intro: event.target.intro.value,
    file: event.target.file.value,

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



const ApplyModal = () => {
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

<div className="contacts">
<label htmlFor="email"> E-mail Address: </label>
  <input id="email" type="email" name="email" />
<br></br>

<hr></hr>

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

<div>
<label htmlFor="file">Upload Resume/CV: </label>

<input type="file"
   id="file" name="file"
   accept="application/pdf" />
</div>
<br></br>
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

const ModalConfirm = () => {
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

          <Button onClick={confirmhandleShow} variant="secondary">Close</Button>
        </Modal.Footer>


        </Modal.Header>


    </Modal>
  )
}



if (error) return <div>Failed to load</div>
if (!data) return <div>Please connect a wallet to see Dealz...</div>



  return (
      <div className='container'>
        {console.log(data)}

        <Row xs={1} md={2} className="g-4">
      {Array.from({ length: data.data.length }).map((_, idx) => (
        <Col>
          <Card className='cards' onClick={event => {rowEvents(data.data[idx])}}>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Subtitle className='cardtitle' numberOfLines={1} style={{fontSize:15}}>{data.data[idx].title.substring(0, 75) + " ..."}</Card.Subtitle>
              <Card.Text>
              <br></br>
             <span className='oneliner'>Org:  </span> {" " + (data.data[idx].project ? data.data[idx].project : "----")}
              <br></br>
              <span className='oneliner'>Role: </span> {" " + (data.data[idx].role ? data.data[idx].role : "----")}
              <br></br>
              <span className='oneliner'> Budget: </span> {" " + (data.data[idx].budget ? data.data[idx].budget : "----") }
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

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

            
          <p>Coming soon 😉</p>
          </div>
          
      </div>
  );
}

export default FirstTab
