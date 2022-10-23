import React, { useState } from "react";
import Footer from '../components/accessories/footer'
import Navbars from '../components/accessories/navbar'
import styles from '../styles/Home.module.css'
import useSWR from "swr";
import FirstTab from "../components/fundraise/firsttab.tsx";
import SecondTab from "../components/fundraise/secondtab";




const Fundraise = () => {

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

      <Navbars />
      <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : "passive"}
          onClick={handleTab1}
        >
          Donate
        </li>
        <li
          className={activeTab === "tab2" ? "active" : "passive"}
          onClick={handleTab2}
        >
          Raise Funds
        </li>
      </ul>
 
      <div className="outlet">
        {/* This function handles when we toggle the Job page between Listings and Posting a job. */}
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
      <Footer />

      
    </div>
     );
}
 
export default Fundraise;