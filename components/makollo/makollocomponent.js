
import Image from "next/image";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then((res) => res.json())
const openLink = (url) => {
  window.open(url);

}

const MakolloComponent = () => {

{/* This function fetches data from DB. */}
const { data, error } = useSWR('/api/makollo', fetcher)
//const courses = data.data

{/* This function checks if a user data is received from DB to properly display state. */}
if (error) return <div>Failed to load</div>
if (!data) return <div>Magic is loading...</div>

const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
  
  
    // Get data from the form.
    const data = {
      email: event.target.email.value,
      portfolioLink: event.target.portfolioLink.value,
    }
  
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
  
    // API endpoint where we send form data.
    const endpoint = '/api/makollo'
  
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }
  
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)
  
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    console.log(result)
    console.log(data)
    
  
  }

  return (
   
    <div className="Makollo">
        
        <br></br>
    
    <form 
    id="form" 
    onSubmit={handleSubmit} >
    <h3 className="makollotitle">Anonymous project feedback! Share something you are currently proud of ...</h3>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" className="form-control" id="email" placeholder="maktub@gmail.com" required/>
  </div>
  <div className="form-group">
    <label htmlFor="portfolioLink">Link to Portfolio Project</label>
    <input type="url" className="form-control" id="portfolioLink" placeholder="https://maktublabs.com" required/>
  </div>
  <br></br>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  </div>

  );
};
export default MakolloComponent;