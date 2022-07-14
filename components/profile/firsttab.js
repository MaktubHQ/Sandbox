/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import useSWR from 'swr'
import { Modal, Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

// es5 

// es6
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

function FirstTab() {
  const { data, error } = useSWR('/api/posts', fetcher)

  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [applymodalInfo, applysetModalInfo] = useState([]);
  const [applyshowModal, applysetShowModal] = useState(false);


  const [show, setShow] = useState(false)

  const [applyshow, applysetShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const applyhandleClose = () => applysetShow(false)
  const applyhandleShow = () => applysetShow(true)

  const toggleTrueFalse = () => {
    setShowModal(handleShow)
  }
  const applytoggleTrueFalse = () => {
    applysetShowModal(applyhandleShow)
  }

  const columns = [{
  dataField: 'role',
  text: 'Job Title'
}, {
  dataField: 'title',
  text: 'Details'
}, {
  dataField: 'budget',
  text: 'Pay'
}];

const rowEvents = {
  onClick: (e, row) => {
    console.log(row)
    setModalInfo(row)
    toggleTrueFalse()

  }
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

        <Modal.Title>{modalInfo.role}</Modal.Title>

        <Modal.Body>
          <p>
          {modalInfo.title}
          </p>
          <p>
          {"Budget is " + modalInfo.budget}
          </p>
        
           </Modal.Body>

        <Modal.Footer> 

          <Button onClick={applyhandleShow} variant="primary">Apply</Button>
        </Modal.Footer>


        </Modal.Header>


    </Modal>
  )
}

const ApplyModal = () => {
  return (
    <Modal show = { applyshow } onHide= {applyhandleClose}>

    <Modal.Header closeButton>

      <Modal.Title>{applymodalInfo.role} Application</Modal.Title>

      <Modal.Body>
      <form
  name="job-listing-form"
  method="POST"
  action="contact/?success=true"
>
    

<div className="contacts">
<label htmlFor="email"> E-mail Address:* </label>
  <input id="contact" type="email" name="email" required />

<label htmlFor="discord"> Discord ID: </label>
  <input id="contact" type="text" name="discord"  />

  <label htmlFor="twitter"> Twitter: </label>
  <input id="contact" type="text" name="twitter"  />

  
  <br></br>

</div>
 

  
<div className="jobinfo">

  <label htmlFor="message">Introduction:* </label>
  <textarea id="intro" name="intro" required></textarea>


</div>
<div>
<label htmlFor="image">Upload Resume/CV: </label>

<input type="file"
   id="avatar" name="avatar"
   accept="application/pdf" />
</div>
<br></br>
<hr></hr>
<br></br>
  

  <button type="submit" className="postbutton">Post Job</button>
</form>
      
         </Modal.Body>

      <Modal.Footer> 

        <Button onClick={applyhandleClose} variant="secondary">Close</Button>
      </Modal.Footer>


      </Modal.Header>


  </Modal>
  )
 
}



  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>



  return (
      <div className='container'>
        {console.log(data)}
       
        <BootstrapTable keyField="index" data={ data.data } columns={ columns } pagination={ paginationFactory() } rowEvents={rowEvents} />

        {show ? <ModalContent /> : null}
        {applyshow ? <ApplyModal /> : null}
        

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
