import Image from "next/image";
import { useState } from "react";
import React from "react";

function changeBackground(e) {
    e.target.style.color = 'black';
  }



  

const JobListingForm = (

  
    


    <form
      name="job-listing-form"
      method="post"
      action="/api/posts"
    >
        
      <input type="hidden" id="wallet" name="wallet" value={{wallet}} />
        
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
      <input id="role" type="radio" name="role" value="Dev"/>
      <label htmlFor="role"> Dev  </label>
      <input type="radio" id="role" name="role" value="Designer"/>
      <label htmlFor="role"> Designer  </label>
      <input type="radio" id="role" name="role" value="Marketer"/>
      <label htmlFor="role"> Marketer </label><br></br>

</div>

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
  );

const SecondTab = () => {

  const [walletAddress, setWalletAddress] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          handleShowProfile()
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );

          /*
           * Set the user's publicKey in state to be used later!
           */
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };



 useEffect(() => {
  const onLoad = async () => {
    await checkIfWalletIsConnected();
  };
  window.addEventListener('load', onLoad);
  return () => window.removeEventListener('load', onLoad);
}, []);

const wallet = checkIfWalletIsConnected().walletAddress
console.log(wallet)
  
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
            {JobListingForm}
            </div>

 
          </div>
       

      </div>
    );
  };
  export default SecondTab;