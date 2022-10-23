import React, { useState } from "react";
import Footer from '../components/accessories/footer'
import Navbars from '../components/accessories/navbar'
import styles from '../styles/Home.module.css'
import TipAuthor from "../components/tipbox/tip";




const TipBox = () => {

    return ( 
        <div className={styles.container}>

      <Navbars />
      <br></br>
        <h5>Buy our devs at Maktub Labs coffee :)</h5>
        <br></br>
      <TipAuthor/>
      <h5>Or send to </h5>
        <h6>2hBWBzunMehc5nWKeY17sMqRLGosKaoNHfsBXtrdmJmt</h6>
      <Footer />

      
    </div>
     );
}
 
export default TipBox;