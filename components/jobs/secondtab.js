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


const JobListingForm = () => {

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
      wallet: event.target.wallet.value,
      project: event.target.project.value,
      title: event.target.title.value,
      role: event.target.role.value,
      email: event.target.email.value,
      discord: event.target.discord.value,
      twitter: event.target.twitter.value,
      budget: event.target.budget.value,
      jobdescription: event.target.jobdescription.value,
    }
  
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
  
    // API endpoint where we send form data.
    const endpoint = '/api/posts'
  
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
  return (
    <form
      name="job-listing-form"
      onSubmit={handleSubmit}

    >

      <input type="hidden" id="wallet" name="wallet" value={publicKey && publicKey.toString()} />

      <label htmlFor="project"> Organization: </label>
        <input id="project" type="text" name="project" />
      <br></br>
<hr></hr>
      <label htmlFor="title">Job Title: * </label>
      <input
        id="title"
        name="title"
        required
        type="text"
      />
 <br></br>
 <hr></hr>



      <div className="role">
        <label htmlFor="role">Role:* </label>
        <br></br>
        <input id="role" type="radio" name="role" value="Dev " />
        <label htmlFor="role"> Dev   </label>
        <br></br>
        <input type="radio" id="role" name="role" value="Designer " />
        <label htmlFor="role"> Designer   </label>
        <br></br>
        <input type="radio" id="role" name="role" value="Marketer " />
        <label htmlFor="role"> Marketer </label><br></br>

      </div>

      <hr></hr>

      <div className="contacts">
        <label htmlFor="email"> E-mail Address: </label>
        <input id="email" type="email" name="email" />

        <label htmlFor="discord"> Discord ID: </label>
        <input id="discord" type="text" name="discord" />

        <label htmlFor="twitter"> Twitter: </label>
        <input id="twitter" type="text" name="twitter" />


        <br></br>
        <hr></hr>

      </div>



      <div className="jobinfo">
        <label htmlFor="budget">Budget: * </label>
        <input id="budget" type="text" name="budget" required />
        <br></br>

        <hr></hr>

        <label htmlFor="message">Job Description: * </label>
        <textarea id="jobdescription" name="jobdescription" required></textarea>


      </div>
     
      <br></br>
      <hr></hr>
      <br></br>


      <button type="submit" className="postbutton">Post Job</button>
    </form>
  )
}



{/* This function handles a confirmation screen for user after Post Job  button clicked. */}
  const ModalConfirm = () => {
    return (
      <Modal show = { confirmshow } onHide= {confirmhandleClose}>
  
        <Modal.Header confirmcloseButton>
  
          <Modal.Title>Your job was successfully uploaded!</Modal.Title>
          <hr></hr>
  
          <Modal.Body>
            <p>
            Keep an eye on * My Applications * tab in your profile for applications to your job.
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
          <h1>Post a Job Listing</h1>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div>
          <JobListingForm />

          {/* Checks when to display popups based on user clicking buttons. */}
          {confirmshow ? <ModalConfirm /> : null}
        </div>


      </div>


    </div>
  );
};
export default SecondTab;