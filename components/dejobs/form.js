const JobListingForm = (
    <form
      name="job-listing-form"
      method="POST"
      action="contact/?success=true"
    >
        <h1>Post a Job Listing</h1>
        
      <label htmlFor="name">Name *</label>
      <input
        id="name"
        name="name"
        required
        type="text"
      />
       <label htmlFor="role">Dev *</label>
      <input id="role" type="radio" name="role" required value="Dev"/>

      <input type="radio" id="role" name="role" value="Designer"/>
  <label htmlFor="role">Designer</label><br></br>
  <input type="radio" id="role" name="role" value="Marketer"/>
  <label htmlFor="role">Marketer</label><br></br>

      <label htmlFor="discord">Discord ID *</label>
      <input id="discord" type="text" name="discord" required />

      <label htmlFor="twitter">Twitter @ *</label>
      <input id="twitter" type="text" name="twitter" required />

      <label htmlFor="email">E-mail Address *</label>
      <input id="email" type="email" name="email" required />

      <label htmlFor="budget">Budget *</label>
      <input id="budget" type="text" name="budget" required />

      <label htmlFor="message">Job Description *</label>
      <textarea id="jobdescription" name="jobdescription" required></textarea>

      <button type="submit">Submit</button>
    </form>
  );