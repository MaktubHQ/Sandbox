import Image from "next/image";
function changeBackground(e) {
    e.target.style.color = 'black';
  }

const JobListingForm = (

    


    <form
      name="job-listing-form"
      method="POST"
      action="contact/?success=true"
    >
        
        
      <label htmlFor="name">Job Title: *</label>
      <input
        id="name"
        name="name"
        required
        type="text"
      />
      <br></br>
<div className="role">
<label htmlFor="role">Role: *</label>
      <input id="role" type="radio" name="role" value="Dev"/>
      <label htmlFor="role"> Dev  </label>
      <input type="radio" id="role" name="role" value="Designer"/>
      <label htmlFor="role"> Designer  </label>
      <input type="radio" id="role" name="role" value="Marketer"/>
      <label htmlFor="role"> Marketer </label><br></br>

</div>

<div className="contacts">
<label htmlFor="email"> E-mail Address: *</label>
      <input id="contact" type="email" name="email" required />

<label htmlFor="discord"> Discord ID: </label>
      <input id="contact" type="text" name="discord"  />

      <label htmlFor="twitter"> Twitter: </label>
      <input id="contact" type="text" name="twitter"  />

      
      <br></br>

</div>
     

      
<div className="jobinfo">
<label htmlFor="budget">Budget: *</label>
      <input id="contact" type="text" name="budget" required />
      <br></br>

      <label htmlFor="message">Job Description: *</label>
      <textarea id="jobdescription" name="jobdescription" required></textarea>


</div>
      

      <button type="submit" className="postbutton">Post Job</button>
    </form>
  );

const SecondTab = () => {
    return (
      <div className="SecondTab" >
          <div style={{
          justifyContent: "center", textAlign: "center"
        }}>
            <div>
            <h1>Post a Job Listing</h1>
            </div>
            <hr></hr>
            <div>
            {JobListingForm}
            </div>

 
          </div>
       

      </div>
    );
  };
  export default SecondTab;