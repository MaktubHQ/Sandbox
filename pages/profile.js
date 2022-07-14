import React, { useState } from "react";
import Footer from '../components/landing/footer'
import Navbar from '../components/landing/navbar'
import FirstTab from "../components/profile/firsttab";
import SecondTab from "../components/profile/secondtab";
import styles from '../styles/Home.module.css'


const Profile = () => {
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
          My Job Listings
        </li>
        <li
          className={activeTab === "tab2" ? "active" : "passive"}
          onClick={handleTab2}
        >
          My Applications
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
 
export default Profile;