import Link from 'next/link'
import Image from 'next/image';
import Login from './login-btn';

const Hero = () => (
    <div className="hero">
      <div className="herocontainer">
    
        <div className="heroinformation">
            <div className='float-child'>
            <h1 className="herotitle">
            <span className="herotitle">3Lance</span>
          </h1>
          <p className="herotext">
          Decentralized P2P Career Hub for educators, engineers, creators, and organizations.
          </p>
          <p className="herotextred">Educate, Freelance, Finance</p>
          <Login/>
                </div>
          <div className='float-child-image'>
          <Image src="/banner.png" alt="Contract" width='500px' height='500px'/>
              </div>
        </div>

        <hr></hr>
        <div className="heroinformation">
              <div className='float-child-image'>
              <Image src='/web3.png' alt="DeJobs" className="images" width='800px' height='500px' />
              </div>
            <div className='float-child'>
            <h1 className="herotitle">
            <span className="herotitle">Masterclass</span>
          </h1> 
          <p className="herotextred">Break into web3. Or teach your own course.</p>
          <br></br>
          <Link href="/education" style={{ textDecoration: 'none'}} className="button">Learn</Link>
          </div>
          
            
        </div>
  
        <hr></hr>
  
        <div className="heroinformation">
            <div className='float-child'>
            <h1 className="herotitle">
            <span className="herotitle">Jobs</span>
          </h1>
          <p className="herotextred">Find or post working opportunities</p>
          <br></br>
          
          <Link href="/dejobs" style={{ textDecoration: 'none'}} className="button">Earn</Link>
          </div>
          <div className='float-child-image'>
          <Image src='/jobs.png' alt="Post a Job" className="images" width='800px' height='500px'/>
              </div>
                </div>
          
          
      </div>
    </div>
  );
  
  export default Hero;