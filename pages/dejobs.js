import React, { useState } from "react";
import Footer from '../components/landing/footer'
import Navbar from '../components/landing/navbar'
import FirstTab from "../components/dejobs/firsttab";
import SecondTab from "../components/dejobs/secondtab";
import styles from '../styles/Home.module.css'

const DeJobs = () => {
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
          className={activeTab === "tab1" ? "active" : "passive"}
          onClick={handleTab1}
        >
          Maktub Job Listings
        </li>
        <li
          className={activeTab === "tab2" ? "active" : "passive"}
          onClick={handleTab2}
        >
          Post Maktub Job
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
 
export default DeJobs;