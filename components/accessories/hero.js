import Link from 'next/link'
import Image from 'next/image';
import Login from './login-btn';

const Hero = () => (
    <div className="hero">
      <div className="herocontainer">
    
    {/* Hero section starts at the picture of surprised lady. */}
        <div className="heroinformation">
            <div className='float-child'>
            <h1 className="herotitle">
            <span className="herotitle">Sandbox</span>
          </h1>
          <p className="herotext">
          A network for experimenters and early explorers to meet and share advice. 
          </p>
          <p className="herotextred">Mentor, sponsor, build</p>
          <Login/>
          <br></br>
                </div>
          <div className='float-child-image'>
          <Image src="/banner.png" alt="Contract" width='500px' height='500px'/>
              </div>
        </div>

{/* Section 2 of Hero highlights Masterclass. */}
<br></br>
        <hr></hr>
        <div className="heroinformation">
              <div className='float-child-image'>
              <Image src='/web3.png' alt="DeJobs" className="images" width='800px' height='500px' />
              </div>
            <div className='float-child'>
            <h1 className="herotitle">
            <span className="herotitle">Masterclass</span>
          </h1> 
          <p className="herotextred">Break into web technology.</p>
          <br></br>
          <Link href="/masterclass" style={{ textDecoration: 'none'}} className="button">Learn</Link>
          </div>
          
            
        </div>
  
  {/* Section 3 of Hero highlights Jobs. */}
        <hr></hr>
  
        <div className="heroinformation">
            <div className='float-child'>
            <h1 className="herotitle">
            <span className="herotitle">Voyage</span>
          </h1>
          <p className="herotextred">Gather with early explorers.</p>
          <br></br>
          
          <Link href="/jobs" style={{ textDecoration: 'none'}} className="button">Begin</Link>
          </div>
          <div className='float-child-image'>
          <Image src='/jobs.png' alt="Post a Job" className="images" width='800px' height='500px'/>
              </div>
                </div>
          
          
      </div>
    </div>
  );
  
  export default Hero;