import React, { useState } from "react";
import Footer from '../components/accessories/footer'
import Navbars from '../components/accessories/navbar'
import styles from '../styles/Home.module.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useSWR from "swr";
import MasterClasses from "../components/masterclass/masterclasscomponent";



const Masterclass = () => {

    return ( 
        <div className={styles.container}>

      <Navbars />
     <MasterClasses/>
      <Footer />

      
    </div>
     );
}
 
export default Masterclass;