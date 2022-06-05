import Image from "next/image";

const FirstTab = () => {
    return (
      <div className="FirstTab">
          <div style={{
          display: "flex",
          justifyContent: "center",
        }}>
            <Image src='/dejobs.png' alt="DeJobs" className="images" width='800px' height='500px'/>

          </div>
        
  
        <br></br>
        <hr></hr>
        <br></br>
  
        <div className="moreinfo" style={{
          display: "flex",
          justifyContent: "center",
        }} >
          <div className="left" >
          <Image src='/readjob.png' alt="Read Jobs" className="images" width='500px' height='300px'/>
          </div>
          <Image src='/arrow.png' alt="Arrow" className="arrow" width='200px' height='200px'/>
          <div className="right">
          <Image src='/submitapp.png' alt="Submit App" className="images" width='500px' height='300px'/>
          </div>
        </div>
       
  
        
        <p>Coming soon 😉</p>
        {/* First tab content will go here */}
      </div>
    );
  };
  export default FirstTab;