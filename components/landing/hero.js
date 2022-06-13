import Link from 'next/link'
import Image from 'next/image';

const Hero = () => (
    <div className="hero">
      <div className="herocontainer">
    
        <div className="heroinformation">
            <div className='float-child'>
            <h1 className="herotitle">
            <span className="herotitle">BMO Jobz</span>
          </h1>
          <p className="herotext">
            Need diamond hands in your project?
          </p>
          <p className="herotextred">Network with other BMOs. Coming soon!</p>😉
                </div>
          <div className='float-child'>
          <Image src="/contract.png" alt="Contract" width='500px' height='500px'/>
              </div>
        </div>

        <hr></hr>
        <div className="heroinformation">
              <div className='float-child'>
              <Image src='/dejobs.png' alt="DeJobs" className="images" width='800px' height='500px' />
              </div>
            <div className='float-child'>
            <h1 className="herotitle">
            <span className="herotitle">Job Listings for BMO</span>
          </h1> 
          <p className="herotextred">View all jobs posted by community members.</p>
          <br></br>
          <Link href="/demo" style={{ textDecoration: 'none'}} className="button">Demo</Link>
          </div>
          
            
        </div>
  
        <hr></hr>
  
        <div className="heroinformation">
            <div className='float-child'>
            <h1 className="herotitle">
            <span className="herotitle">Post Job to BMO</span>
          </h1>
          <p className="herotextred">Post a job to our community.</p>
          <br></br>
          
          <Link href="/dejobs" style={{ textDecoration: 'none'}} className="button">BMO Jobs</Link>
          </div>
          <div className='float-child'>
          <Image src='/postjob.png' alt="Post a Job" className="images" width='800px' height='500px'/>
              </div>
                </div>
          
          
      </div>
    </div>
  );
  
  export default Hero;