/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import useSWR from 'swr'
import { Modal, Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { useWallet } from '@solana/wallet-adapter-react';



// es5 

// es6
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { WalletReadyState } from '@solana/wallet-adapter-base';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

function SecondTab() {
  const { data, error } = useSWR('/api/profileapplications', fetcher)

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
  const { connect, publicKey } = useWallet()

  const columns = [{
    dataField: 'title',
    text: 'Job Title'
  },
  {
  dataField: 'intro',
  text: 'Introduction'
}, 
{
  dataField: 'discord',
  text: 'Discord'
}, 
{
  dataField: 'twitter',
  text: 'Twitter'
}
];

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

        <Modal.Title>{modalInfo.title}</Modal.Title>

        <Modal.Body>
          <h6>
            Meet your partner!
            </h6>
          <p>
          {modalInfo.intro}
          </p>
          <br></br>
          <p>
          {"Discord: " + modalInfo.discord}
          </p>
          <p>
          {"Twitter: " + modalInfo.twitter}
          </p>
        
           </Modal.Body>

        <Modal.Footer> 

          {/* <Button onClick={applyhandleShow} variant="primary">Contact for update</Button> */}
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
  if (!data || !publicKey) return <div>Connect a wallet to see applications to your Dealz...</div>
  console.log(data)
  console.log(publicKey.toString())


  var showHide = false;


    if (data.data.wallet == (publicKey.toString())){
    showHide = true
    }
    else{
      showHide = false
    }
  
    const walletData = [];

    const cleanData = () =>  {
      
        for(let i=0; i < data.data.length; ++i){
          console.log(data.data[i])
              if(data.data[i].wallet == publicKey.toString()){
                walletData.push(data.data[i])
                console.log("Wallet Data")
                console.log(walletData)
              }
             }
    }





  return (
      <div className='container'>
        {console.log(data)}
        {cleanData()}

        
       
        <BootstrapTable keyField="index" data={ walletData } columns={ columns } pagination={ paginationFactory() } rowEvents={rowEvents} filter={ filterFactory()} />

        

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

export default SecondTab
