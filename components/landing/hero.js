import Link from 'next/link'
import Image from 'next/image';

const Hero = () => (
    <div className="hero">
      <div className="herocontainer">
    
        <div className="heroinformation">
            <div className='float-child'>
            <h1 className="herotitle">
            <span className="herotitle">Deal 🤝 </span>
          </h1>
          <p className="herotext">
            Need diamond hands in your project?
          </p>
          <p className="herotextred">Network with other 💎 🙌. Coming soon!</p>😉
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
            <span className="herotitle">Job Listings</span>
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
            <span className="herotitle">Post a Job</span>
          </h1>
          <p className="herotextred">Post a deal to our community.</p>
          <br></br>
          
          <Link href="/dejobs" style={{ textDecoration: 'none'}} className="button">Active Deals</Link>
          </div>
          <div className='float-child'>
          <Image src='/postjob.png' alt="Post a Job" className="images" width='800px' height='500px'/>
              </div>
                </div>
          
          
      </div>
    </div>
  );
  
  export default Hero;