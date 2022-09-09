import Image from "next/image";
const SecondTab = () => {
    return (
      <div className="SecondTab" >
          <div style={{
          display: "flex",
          justifyContent: "center",
        }}>
 <Image src='/postjob.png' alt="Post DeJob" className="images" width="800px" height="500px"/>
          </div>
       
  
        <p>Coming soon 😉</p>
        {/* Second  tab content will go here */}
      </div>
    );
  };
  export default SecondTab;