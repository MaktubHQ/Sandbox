import Link from 'next/link'
import Image from 'next/image';

const Hero = () => (
    <div className="hero">
      <div className="herocontainer">
    
        <div className="heroinformation">
            <div className='float-child'>
            <h1 className="herotitle">
            <span className="herotitle">3Lance</span>
          </h1>
          <p className="herotext">
          Decentralized P2P Career Management Hub with payments soon managed via smart contracts.
          </p>
          <p className="herotextred">Freelance, EduPrograms, Finance!</p>
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
            <span className="herotitle">Propose a Job</span>
          </h1>
          <p className="herotextred">Propose a partnership to our community.</p>
          <br></br>
          
          <Link href="/dejobs" style={{ textDecoration: 'none'}} className="button">Jobs</Link>
          </div>
          <div className='float-child'>
          <Image src='/postjob.png' alt="Post a Job" className="images" width='800px' height='500px'/>
              </div>
                </div>
          
          
      </div>
    </div>
  );
  
  export default Hero;