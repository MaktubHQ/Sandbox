import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";

function changeBackground(e) {
  e.target.style.color = 'black';
}





const JobListingForm = () => {

  const { connect, publicKey } = useWallet()

  if (!publicKey) return <div>Connect a wallet to post a Deal...</div>

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.publicKey.value)
    await db.collection("joblist").insertOne(bodyObject);
  }
  return (
    <form
      name="job-listing-form"
      method="post"
      action="/api/posts"
      // onSubmit={handleSubmit}

    >

      <input type="hidden" id="wallet" name="wallet" value={publicKey && publicKey.toString()} />

      <label htmlFor="title">Job Title:* </label>
      <input
        id="title"
        name="title"
        required
        type="text"
      />
      <br></br>

      <div className="role">
        <label htmlFor="role">Role:* </label>
        <input id="role" type="radio" name="role" value="Dev" />
        <label htmlFor="role"> Dev  </label>
        <input type="radio" id="role" name="role" value="Designer" />
        <label htmlFor="role"> Designer  </label>
        <input type="radio" id="role" name="role" value="Marketer" />
        <label htmlFor="role"> Marketer </label><br></br>

      </div>

      <div className="contacts">
        <label htmlFor="email"> E-mail Address:* </label>
        <input id="contact" type="email" name="email" required />

        <label htmlFor="discord"> Discord ID: </label>
        <input id="contact" type="text" name="discord" />

        <label htmlFor="twitter"> Twitter: </label>
        <input id="contact" type="text" name="twitter" />


        <br></br>

      </div>



      <div className="jobinfo">
        <label htmlFor="budget">Budget:* </label>
        <input id="contact" type="text" name="budget" required />
        <br></br>

        <label htmlFor="message">Job Description:* </label>
        <textarea id="jobdescription" name="jobdescription" required></textarea>


      </div>
      <div>
        <label htmlFor="image">Choose a listing photo: </label>

        <input type="file"
          id="avatar" name="avatar"
          accept="image/png, image/jpeg" />
      </div>
      <br></br>
      <hr></hr>
      <br></br>


      <button type="submit" className="postbutton">Post Job</button>
    </form>
  )
}

const SecondTab = () => {



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
        </div>


      </div>


    </div>
  );
};
export default SecondTab;