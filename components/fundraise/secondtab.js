import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Modal, Button } from "react-bootstrap";
import { useSession } from "next-auth/react";
import Login from "../accessories/login-btn";


function SecondTab() {

  const [confirmmodalInfo, confirmsetModalInfo] = useState([]);
  const [confirmshowModal, confirmsetShowModal] = useState(false);
  const [confirmshow, confirmsetShow] = useState(false)
  const confirmhandleClose = () => confirmsetShow(false)
  const confirmhandleShow = () => confirmsetShow(true)
  const confirmtoggleTrueFalse = () => {
    confirmsetShowModal(confirmhandleShow)
  }


const StartFundraise = () => {

  const { connect, publicKey } = useWallet()
  const { data: session } = useSession()

{/* This function checks if a user is signed in to access writing data to our DB with actions(Post Job or Apply to Job). */}
  if (!session) return <div>Please sign in! <Login/></div>

  

  {/* This function handles submitting a job form details to our DB.*/}
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
  
    confirmhandleShow()
  
    // Get data from the form.
    const data = {
      ownerWallet: event.target.ownerWallet.value,
      email: event.target.email.value,
      title: event.target.title.value,
      goal: event.target.goal.value,
      usecase: event.target.usecase.value,
      pitch: event.target.pitch.value,
      discord: event.target.discord.value,
      twitter: event.target.twitter.value,
      icon: event.target.icon.value,
      
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
  {/* This function returns a form for user to fill out about a job. */}
  return (
    <form
      name="start-fundraise-form"
      onSubmit={handleSubmit}

    >

      <input type="hidden" id="ownerWallet" name="ownerWallet" value={publicKey && publicKey.toString()} />
      <input type="hidden" id="email"  name="email" value={session && session.user.email}/>

      <div className="main">
        
        <label htmlFor="title"> Title: </label>
        <input id="title" type="text" name="title" required/>

        <label htmlFor="goal"> Goal: </label>
        <input id="goal" type="text" name="goal" required/>

        <label htmlFor="usecase"> Use Case: </label>
        <input id="usecase" type="text" name="usecase" />
        <br></br>
        <hr></hr>

      </div>

      <div className="pitch">
      <label htmlFor="pitch"> Pitch: </label>
        <textarea id="pitch" type="text" name="pitch" required></textarea>
        <br></br>
        <hr></hr>
      </div>



      <div className="contacts">
        
        <label htmlFor="discord"> Discord ID: </label>
        <input id="discord" type="text" name="discord" />

        <label htmlFor="twitter"> Twitter: </label>
        <input id="twitter" type="text" name="twitter" />

        <label htmlFor="icon"> Icon: </label>
        <input id="icon" type="text" name="icon" />


        <br></br>
        <hr></hr>

      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <button type="submit" className="postbutton">Post Campaign</button>
    </form>
  )
}



{/* This function handles a confirmation screen for user after Post Job  button clicked. */}
  const ModalConfirm = () => {
    return (
      <Modal show = { confirmshow } onHide= {confirmhandleClose}>
  
        <Modal.Header confirmcloseButton>
  
          <Modal.Title>Your campaign was successfully uploaded!</Modal.Title>
          <hr></hr>
  
          <Modal.Body>
            <p>
            Keep an eye on * My Fundraise Campaigns * tab in your profile for progress status.
            </p>
             </Modal.Body>
  
          <Modal.Footer> 
  
            <Button onClick={confirmhandleShow} variant="secondary">Close</Button>
          </Modal.Footer>
  
  
          </Modal.Header>
  
  
      </Modal>
    )
  }






  return (
    <div className="SecondTab" >
      <div style={{
        justifyContent: "center", textAlign: "center"
      }}>
        <div>
          <h1>Start a Fundraise</h1>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div>
          <StartFundraise />

          {/* Checks when to display popups based on user clicking buttons. */}
          {confirmshow ? <ModalConfirm /> : null}
        </div>


      </div>


    </div>
  );
};
export default SecondTab;