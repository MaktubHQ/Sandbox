import Image from "next/image";
import Link from "next/link";
import ConnectWallet from "./connectwallet";


const Navbar = () => {
  
    return (
        <nav>
            <div className="logo">
                <Link href='/'>
                    <a>
                    <Image src='/maktub.png' alt="Logo" className="logo" width='120px' height='120px'/>
                    </a>

                </Link>
                    
                
                
            </div>
            <div className="links">
            <Link href='/demo'>
            <a>Demo</a>

                </Link>
            
                <Link href='/dejobs'>
                    
            <a>Jobs</a>

                </Link>


            </div>
            <div className="wallet">
            <a><ConnectWallet/></a>

            </div>
           

        </nav>
      
  
  
    );
  };
  
  export default Navbar;