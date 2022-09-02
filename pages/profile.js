import React, { useState } from "react";
import ConnectWallet from "../components/landing/connectwallet";
import Footer from '../components/landing/footer'
import Navbars from '../components/landing/navbar'
import FirstTab from "../components/profile/firsttab";
import SecondTab from "../components/profile/secondtab";
import styles from '../styles/Home.module.css'
import { useSession } from "next-auth/react";



const Profile = () => {
  const { data: session } = useSession()


    return ( 
        <div className={styles.container}>

      <Navbars />
      
      <div className="profilePage">
      <div className="username">
          <h3>Welcome {session ? session.user.email : ""}!</h3>
          <br></br>
          <form
      name="editprofile"

    >
          <label htmlFor="username"><h6>Change your username:</h6></label>
        <br></br>
        <input id="username" type="text" name="username"/>
        </form>
        </div>


        <div className="walletDiv">
        <div className="profileWallet">
          <h6>Connect your Solana Wallet:</h6> 
          </div>
          <div className="profileWallet">
          <ConnectWallet/>
          </div>
        </div>


        <div className="connectsocials">

          <div>
          <form
      name="editprofile"

    >
          <label htmlFor="username"><h6>Change Twitter @:</h6></label>
        <br></br>
        <input id="twitter" type="text" name="twitter"/>
        </form>
          </div>
          <div>
          <form
      name="editprofile"

    >
      <br></br>
          <label htmlFor="username"><h6>Change Discord (User#1010):</h6></label>
        <br></br>
        <input id="discord" type="text" name="discord"/>
        </form>
          </div>

        </div>

        
          

      
    </div>
      <Footer />

      
    </div>
     );
}
 
export default Profile;