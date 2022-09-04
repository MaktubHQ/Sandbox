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
          <Image src="/banner.png" alt="Contract" width='500px' height='500px'/>
              </div>
        </div>

        <hr></hr>
        <div className="heroinformation">
              <div className='float-child'>
              <Image src='/web3.png' alt="DeJobs" className="images" width='800px' height='500px' />
              </div>
            <div className='float-child'>
            <h1 className="herotitle">
            <span className="herotitle">Masterclass</span>
          </h1> 
          <p className="herotextred">Break into web3 as a developer, NFT enthusiast, or curious bee.</p>
          <br></br>
          <Link href="/demo" style={{ textDecoration: 'none'}} className="button">Learn</Link>
          </div>
          
            
        </div>
  
        <hr></hr>
  
        <div className="heroinformation">
            <div className='float-child'>
            <h1 className="herotitle">
            <span className="herotitle">Jobs</span>
          </h1>
          <p className="herotextred">Find job opportunities or post new ones for our community.</p>
          <br></br>
          
          <Link href="/dejobs" style={{ textDecoration: 'none'}} className="button">Earn</Link>
          </div>
          <div className='float-child'>
          <Image src='/jobs.png' alt="Post a Job" className="images" width='800px' height='500px'/>
              </div>
                </div>
          
          
      </div>
    </div>
  );
  
  export default Hero;