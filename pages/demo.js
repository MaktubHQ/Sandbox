import React, { useState } from "react";
import Footer from '../components/landing/footer'
import Navbar from '../components/landing/navbar'
import FirstTab from "../components/demo/firsttab";
import SecondTab from "../components/demo/secondtab";
import styles from '../styles/Home.module.css'

const Demo = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    //  Functions to handle Tab Switching
    const handleTab1 = () => {
      // update the state to tab1
      setActiveTab("tab1");
    };
    const handleTab2 = () => {
      // update the state to tab2
      setActiveTab("tab2");
    };


    return ( 
        <div className={styles.container}>

      <Navbar />
      <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Job Listings
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Post Job
        </li>
      </ul>
 
      <div className="outlet">
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
      <Footer />

      
    </div>
     );
}
 
export default Demo;