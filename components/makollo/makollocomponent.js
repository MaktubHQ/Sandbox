
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
const { data, error } = useSWR('/api/education', fetcher)
//const courses = data.data

{/* This function checks if a user data is received from DB to properly display state. */}
if (error) return <div>Failed to load</div>
if (!data) return <div>Magic is loading...</div>


  return (
   
    <div className="Makollo">
        <hr></hr>
        <br></br>
    <h3 className="edutitle">Share a personal project you are proud of!</h3>
    <form id="form">
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" className="form-control" id="email" placeholder="maktub@gmail.com" required/>
  </div>
  <div className="form-group">
    <label htmlFor="portfolio-link">Link to Portfolio Project</label>
    <input type="url" className="form-control" id="portfolio-link" placeholder="https://maktublabs.com" required/>
  </div>
  <br></br>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  </div>

  );
};
export default MakolloComponent;