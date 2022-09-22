import React, { useState } from "react";
import Footer from '../components/accessories/footer'
import Navbars from '../components/accessories/navbar'
import styles from '../styles/Home.module.css'
import TipAuthor from "../components/tipbox/tip";




const TipBox = () => {

    return ( 
        <div className={styles.container}>

      <Navbars />
      <TipAuthor/>
      <Footer />

      
    </div>
     );
}
 
export default TipBox;