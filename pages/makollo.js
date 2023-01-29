import React, { useState } from "react";
import Footer from '../components/accessories/footer'
import Navbarsv2 from '../components/accessories/navbarv2'
import styles from '../styles/Home.module.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useSWR from "swr";
import MakolloComponent from "../components/makollo/makollocomponent";




const Makollo = () => {

    return ( 
        <div className={styles.container}>

      <Navbarsv2 />
     <MakolloComponent/>
      <Footer />

      
    </div>
     );
}
 
export default Makollo;